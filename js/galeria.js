/* FRANCITEC — galeria dinâmica (gerida no painel administrativo) */
(function(){
  function render(){
    var g=window.CURSOS_DADOS.galeria||[], box=document.getElementById('galeria-grid');
    if(!box)return;
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
