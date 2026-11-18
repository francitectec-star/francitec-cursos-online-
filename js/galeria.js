/* FRANCITEC — galeria dinâmica (gerida no painel administrativo) */
(function(){
  function render(){
    var g=window.CURSOS_DADOS.galeria||[], box=document.getElementById('galeria-grid');
    if(!box)return;
    var FIXG=[['Momento de alegria','Formandos celebram a conclusão, erguendo os diplomas.'],['Entrega de diplomas','Cerimónia sob a tenda oficial da FRANCITEC.'],['Orgulho FRANCITEC','Formandos com o estandarte oficial do Centro.'],['Dia inesquecível','Formandos e convidados na 1.ª fase da graduação.'],['Missão cumprida','Diplomas na mão, futuro garantido.'],['Turma 2026','Cerimónia de graduação da FRANCITEC.']];
    var fi=0;
    g=g.map(function(x){ if(/^\d+$/.test(String(x.tag||'').trim())){ var fx=FIXG[fi++%FIXG.length]; x.tag='🎓 Graduação 2026'; x.titulo=x.titulo&&!/^\d+$/.test(String(x.titulo||''))?x.titulo:fx[0]; x.legenda=fx[1]; } return x; });
    var seed=(window.CURSOS_DADOS_SEED&&window.CURSOS_DADOS_SEED.galeria)||[];
    var tem=function(im){return g.some(function(y){return y.img===im;});};
    seed.forEach(function(x){ if(!tem(x.img))g.push(x); });
    var EGrad=/(gradua|conquis)/i;
    var aulas=g.filter(function(x){return !EGrad.test(String(x.tag||''));});
    var grads=g.filter(function(x){return EGrad.test(String(x.tag||''));});
    function cartao(x){
      return '<div class="gallery-item"><img src="'+x.img+'" alt="'+(x.alt||x.tag||'Francitec')+'" data-lb="'+(x.titulo?x.titulo+' — ':'')+(x.tag||'FRANCITEC')+'" onclick="window.__lb&&window.__lb(this)">'
        +(x.tag?'<div class="tag-photo">'+x.tag+'</div>':'')
        +(x.titulo||x.legenda?'<div class="cap-photo">'+(x.titulo?'<b>'+x.titulo+'</b>':'')+(x.legenda||'')+'</div>':'')
        +'</div>';
    }
    window.__lb=function(im){
      var lb=document.getElementById('lb');if(!lb)return;
      document.getElementById('lb-img').src=im.src;
      document.getElementById('lb-cap').textContent=im.getAttribute('data-lb')||'FRANCITEC';
      lb.style.display='block';
    };
    box.innerHTML=aulas.length?aulas.map(cartao).join(''):'<p class="lead">Fotografias em actualização — voltem em breve.</p>';
    var qc=document.getElementById('conquistas-grid');
    if(qc){
      // agrupar por edição (tag sem o 🎓): Graduação 2026 → um grupo
      var grupos={};
      grads.forEach(function(x){
        var ed=(String(x.tag||'Graduação').replace(/🎓/g,'').trim())||'Graduações';
        (grupos[ed]=grupos[ed]||[]).push(x);
      });
      var hg='';
      Object.keys(grupos).sort().reverse().forEach(function(ed){
        hg+='<div style="grid-column:1/-1;margin:14px 0 2px"><span class="badge" style="font-weight:800;color:var(--azul,#1a2c5b);font-size:14px">'+ed+' · '+grupos[ed].length+' fotografia(s)</span></div>';
        hg+=grupos[ed].map(cartao).join('');
      });
      qc.innerHTML=hg||'<p class="lead">As fotos da próxima graduação chegam em breve.</p>';
    }
  }
  if(window.CURSOS_DADOS&&window.CURSOS_DADOS.galeria)render();
  window.addEventListener('cursos-dados-carregados',render);
  document.addEventListener('DOMContentLoaded',function(){
    // quando consulta.js carrega do servidor, notificar
    var t=setInterval(function(){if(window.CURSOS_DADOS.galeria){render();clearInterval(t);}},400);
    setTimeout(function(){clearInterval(t);},8000);
  });
})();
