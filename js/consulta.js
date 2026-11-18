/* FRANCITEC — secção CONSULTAR CURSOS E PREÇOS (v2.0) */
(function(){
  var SD=window.CURSOS_DADOS, ENG=window.SPI_PROMO;
  var filtro='todos', busca='';
  function carregar(){
    fetch('https://spi-francitec.onrender.com/api/public/cursos',{cache:'no-store'})
      .then(function(r){return r.json();})
      .then(function(j){
        if(j&&j.dados){
          var srv=j.dados, sd=window.CURSOS_DADOS;
          var tem=(srv.cursos&&srv.cursos.length)||(srv.galeria&&srv.galeria.length);
          if(tem){
            sd.galeria=(srv.galeria&&srv.galeria.length)?srv.galeria:(sd.galeria||[]);
            if(srv.cursos&&srv.cursos.length){sd.cursos=srv.cursos;sd.promocoes=srv.promocoes||[];}
            sd.historico=srv.historico&&srv.historico.length?srv.historico:(sd.historico||[]);
            if(srv.contactos&&srv.contactos.whatsapp)sd.contactos=srv.contactos;
            try{document.dispatchEvent(new Event('cursos-dados-carregados'));}catch(e){}
            render();
          }
        }
      })
      .catch(function(){ render(); });
  }
  function passamFiltro(){
    return (window.CURSOS_DADOS.cursos||[]).filter(function(c){
      if(!c.disponivel&&filtro!=='todos')return false;
      var st=null, pr=ENG.paraCurso(window.CURSOS_DADOS,c.id);
      st=pr?ENG.estado(pr):null;
      if(busca&&(c.nome+' '+c.categoria+' '+c.descricao).toLowerCase().indexOf(busca)<0)return false;
      if(filtro==='todos')return true;
      if(filtro==='promocao')return st==='ACTIVA';
      if(filtro==='normal')return st!=='ACTIVA';
      if(filtro==='futuras')return st==='AGENDADA';
      if(filtro==='terminadas')return st==='TERMINADA';
      return true;
    });
  }
  function ficha(c){
    var info=ENG.preco(window.CURSOS_DADOS,c.id);
    var h='<div class="cz-card" data-id="'+c.id+'">'
      +(c.imagem?'<img class="cz-img" src="'+c.imagem+'" alt="'+c.nome+'" style="width:100%;height:120px;object-fit:cover;border-radius:10px;margin-bottom:10px">':'')
      +'<div class="cz-nome">'+c.nome+'</div>'
      +'<div class="cz-meta">'+(c.categoria||'')+' · '+c.duracao+' · '+c.modalidade+'</div>';
    if(info.estado==='PROMOCAO'){
      h+='<div class="cz-precos"><span class="cz-normal-riscado">'+ENG.fmt(info.normalMensalidade)+'</span>'
        +'<span class="cz-promo">'+ENG.fmt(info.mensalidade)+'/mês</span></div>'
        +'<div class="cz-poupanca">Poupa '+ENG.fmt(info.poupanca)+' · válido até '+ENG.dataBR(info.fim)+'</div>'
        +'<span class="cz-badge cz-ativa">PROMOÇÃO ACTIVA</span>';
    }else{
      h+='<div class="cz-precos"><span class="cz-promo">'+ENG.fmt(info.mensalidade)+'/mês</span></div>';
      var prF=(window.CURSOS_DADOS.promocoes||[]).filter(function(p){return (p.cursoId===c.id||p.cursoId==='*')&&ENG.estado(p)!=='ACTIVA';});
      if(prF.length)h+='<span class="cz-badge">'+ENG.estado(prF[0])+(prF[0].inicio&&ENG.estado(prF[0])==='AGENDADA'?' desde '+ENG.dataBR(prF[0].inicio):'')+'</span>';
    }
    h+='<div class="cz-insc">Inscrição: '+ENG.fmt(info.inscricao)+(c.taxaCertificado?' · Certificado: '+ENG.fmt(c.taxaCertificado):'')+'</div>';
    if(c.horarios)h+='<div class="cz-cond">🕒 '+c.horarios+'</div>';
    if(c.descricao)h+='<div class="cz-desc">'+c.descricao+'</div>';
    if(c.condicoes)h+='<div class="cz-cond">'+c.condicoes+'</div>';
    if((c.variantes||[]).length)h+='<div class="cz-cond">Sábados: '+c.variantes.map(function(v){return v.modalidade+' — '+ENG.fmt(v.inscricao)+' inscrição · '+ENG.fmt(v.mensalidade)+'/mês';}).join(' · ')+'</div>';
    h+='<a class="cz-btn" target="_blank" rel="noopener" href="'+ENG.whatsapp(c,info)+'">Enviar inscrição via WhatsApp</a>'
      +'<div class="cz-nota">A abertura do WhatsApp não reserva a vaga — a inscrição é confirmada pela secretaria.</div></div>';
    return h;
  }
  function tabelaNormais(){
    var box=document.getElementById('cz-tabela-normais');if(!box)return;
    var linhas=(window.CURSOS_DADOS.cursos||[]).filter(function(c){return c.disponivel!==false;}).map(function(c){
      var info=ENG.preco(window.CURSOS_DADOS,c.id);
      var est=info.estado==='PROMOCAO'?'<span class="cz-badge cz-ativa">PROMOÇÃO '+ENG.dataBR(info.fim)+'</span>':'<span class="cz-badge">Preço normal</span>';
      return '<tr><td class="cz-tnome">'+c.nome+'</td><td>'+c.duracao+'</td><td>'+c.modalidade+'</td>'
        +'<td class="cz-tnum">'+ENG.fmt(info.normalMensalidade)+'</td>'
        +'<td class="cz-tnum">'+ENG.fmt(info.normalInscricao)+'</td>'
        +'<td class="cz-tnum">'+(c.taxaCertificado?ENG.fmt(c.taxaCertificado):'—')+'</td>'
        +'<td>'+(info.estado==='PROMOCAO'?'<b style="color:#1a7a3f">'+ENG.fmt(info.mensalidade)+'</b>':'<b>'+ENG.fmt(info.mensalidade)+'</b>')+'</td>'
        +'<td>'+est+'</td></tr>';
    }).join('');
    box.innerHTML='<div class="cz-twrap"><table><tr><th>Curso</th><th>Duração</th><th>Modalidade</th><th>Mensalidade normal</th><th>Inscrição normal</th><th>Certificado</th><th>Agora</th><th>Estado</th></tr>'+linhas+'</table></div>'
      +'<p class="cz-nota">Tabela completa de preços normais. Durante a campanha, a coluna «Agora» mostra o valor promocional — terminada a promoção, o normal volta a valer automaticamente.</p>';
  }
  function render(){
    tabelaNormais();
    var box=document.getElementById('cz-resultados');if(!box)return;
    var lista=passamFiltro();
    box.innerHTML=lista.length?lista.map(ficha).join(''):'<p class="cz-vazio">Nenhum curso encontrado. Tente outro termo ou filtro.</p>';
    var cont=document.getElementById('cz-contagem');
    if(cont)cont.textContent=lista.length+' curso(s) · dados actualizados automaticamente';
  }
  document.addEventListener('input',function(e){
    if(e.target&&e.target.id==='cz-busca'){busca=e.target.value.toLowerCase().trim();render();}
  });
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-cz-filtro]');if(!b)return;
    filtro=b.dataset.czFiltro;
    document.querySelectorAll('[data-cz-filtro]').forEach(function(x){x.style.background=x===b?'var(--azul, #1a2c5b)':'';x.style.color=x===b?'#fff':'';});
    render();
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',carregar);else carregar();
})();
