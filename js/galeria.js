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
    if(!g.length){box.innerHTML='<p class="lead">Fotografias em actualização — voltem em breve.</p>';return;}
    box.innerHTML=g.map(function(x){
      return '<div class="gallery-item"><img src="'+x.img+'" alt="'+(x.alt||'Francitec')+'">'
        +(x.tag?'<div class="tag-photo">'+x.tag+'</div>':'')
        +(x.titulo||x.legenda?'<div class="cap-photo">'+(x.titulo?'<b>'+x.titulo+'</b>':'')+(x.legenda||'')+'</div>':'')
        +'</div>';
    }).join('');
  }
  if(window.CURSOS_DADOS&&window.CURSOS_DADOS.galeria)render();
  window.addEventListener('cursos-dados-carregados',render);
  document.addEventListener('DOMContentLoaded',function(){
    // quando consulta.js carrega do servidor, notificar
    var t=setInterval(function(){if(window.CURSOS_DADOS.galeria){render();clearInterval(t);}},400);
    setTimeout(function(){clearInterval(t);},8000);
  });
})();
