/* FRANCITEC — dados de cursos, preços normais e campanhas promocionais (v2.0)
   O PREÇO NORMAL nunca é substituído pela promoção — é sempre preservado.
   Em modo servidor, os dados são carregados de /api/public/cursos; este ficheiro
   serve de semente e de reserva offline. */
window.CURSOS_DADOS={
  versao:'2.0',
  contactos:{whatsapp:'852652545',telefones:'841069443 | 852652545'},
  cursos:[
    {id:'ele-inst',nome:'Eletricidade Instaladora',categoria:'Electricidade',duracao:'6 meses',modalidade:'Segunda a sexta ou Sábado',horarios:'Seg–Sex (turnos) · Sábado 07h–13h',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalações elétricas residenciais, comerciais e industriais, quadros, esquemas e segurança.',condicoes:'Requisitos: cópia de BI, 2 fotos tipo passe, certificado da 9.ª ou 10.ª classe.',imagem:'',variantes:[{modalidade:'Sábado (3 meses)',mensalidade:350,inscricao:350}]},
    {id:'ele-ind',nome:'Eletricidade Industrial',categoria:'Electricidade',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Comandos elétricos, manutenção, automação e partida de motores.',condicoes:'',imagem:'',variantes:[]},
    {id:'mec-auto',nome:'Mecânica Auto',categoria:'Mecânica',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Diagnóstico, manutenção preventiva e corretiva e prática em veículos.',condicoes:'',imagem:'',variantes:[]},
    {id:'maq-cmd',nome:'Máquinas e Comandos Elétricos',categoria:'Electricidade',duracao:'3 meses',modalidade:'Sábado',horarios:'Sábado 07h–13h',precoNormal:350,inscricaoNormal:350,taxaCertificado:null,disponivel:true,descricao:'Painéis, comandos e dimensionamento de sistemas elétricos.',condicoes:'Valor de Sábado — inscrição 350 MT e mensalidade 350 MT.',imagem:'',variantes:[]},
    {id:'solar',nome:'Sistema Fotovoltaico',categoria:'Energia',duracao:'3 meses',modalidade:'Sábado',horarios:'Sábado',precoNormal:4000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalação, configuração e dimensionamento de sistemas solares.',condicoes:'Não participa das promoções de Sábado.',imagem:'',variantes:[]},
    {id:'inf-bas',nome:'Informática Básica',categoria:'Informática',duracao:'2 meses',modalidade:'Segunda a sexta ou Sábado',horarios:'Seg–Sex · Sábado 07h–13h',precoNormal:1000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Computador, internet, Word, Excel e competências digitais essenciais.',condicoes:'',imagem:'',variantes:[{modalidade:'Sábado (3 meses)',mensalidade:350,inscricao:350}]},
    {id:'inf-av',nome:'Informática Avançada',categoria:'Informática',duracao:'2 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Excel avançado, manutenção de computadores e ferramentas digitais de trabalho.',condicoes:'',imagem:'',variantes:[]},
    {id:'edu-inf',nome:'Educação de Infância',categoria:'Educação',duracao:'6 meses',modalidade:'Segunda a sexta ou Sábado',horarios:'Seg–Sex · Sábado',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Pedagogia, desenvolvimento infantil e prática de sala de aula.',condicoes:'Valor de Sábado — inscrição 800 MT e mensalidade 800 MT.',imagem:'',variantes:[{modalidade:'Sábado (3 meses)',mensalidade:800,inscricao:800}]},
    {id:'refri',nome:'Refrigeração',categoria:'Técnico',duracao:'3 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalação, manutenção e reparação de sistemas de frio e climatização.',condicoes:'',imagem:'',variantes:[]},
    {id:'canal',nome:'Canalização',categoria:'Construção',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalações hidráulicas, redes de água e esgotos, manutenção e reparação.',condicoes:'',imagem:'',variantes:[]},
    {id:'ingles',nome:'Inglês',categoria:'Línguas',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:600,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Inglês geral: compreensão, expressão oral e escrita.',condicoes:'',imagem:'',variantes:[]},
    {id:'secre',nome:'Secretariado Executivo',categoria:'Administração',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:2000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Secretariado, atendimento, gestão documental e escritório.',condicoes:'',imagem:'',variantes:[]}
  ],
  promocoes:[],
  historico:[]
};
/* ===== MOTOR DE PROMOÇÕES — fuso de Moçambique (Africa/Maputo, UTC+2) ===== */
window.SPI_PROMO={
  agora:function(){var d=new Date();return new Date(d.getTime()+(120+d.getTimezoneOffset())*60000);},
  iso:function(dt){function p(n){return String(n).padStart(2,'0');}return dt.getFullYear()+'-'+p(dt.getMonth()+1)+'-'+p(dt.getDate())+'T'+p(dt.getHours())+':'+p(dt.getMinutes());},
  estado:function(pr,agoraISO){
    if(!pr||pr.suspensa)return 'SUSPENSA';
    var a=agoraISO||this.iso(this.agora());
    if(pr.inicio&&a<pr.inicio)return 'AGENDADA';
    if(pr.fim&&a>pr.fim)return 'TERMINADA';
    return 'ACTIVA';
  },
  /* melhor promoção ACTIVA aplicável ao curso (não acumula: escolhe a de maior poupança) */
  paraCurso:function(cursosDados,cursoId){
    var lista=(cursosDados.promocoes||[]).filter(function(pr){
      return (pr.cursoId===cursoId||pr.cursoId==='*')&&window.SPI_PROMO.estado(pr)==='ACTIVA'&&pr.ativa!==false;});
    if(!lista.length)return null;
    lista.sort(function(a,b){return (Number(a.descontoTotal)||0)-(Number(b.descontoTotal)||0);});
    return lista[0];
  },
  preco:function(cursosDados,cursoId,variante){
    var c=(cursosDados.cursos||[]).find(function(x){return x.id===cursoId;});
    if(!c)return null;
    var v=(variante&&c.variantes||[]).find(function(x){return x.modalidade===variante;})||null;
    var base={mensalidade:v?Number(v.mensalidade):Number(c.precoNormal),inscricao:v?Number(v.inscricao):Number(c.inscricaoNormal),normalMensalidade:v?Number(v.mensalidade):Number(c.precoNormal),normalInscricao:v?Number(v.inscricao):Number(c.inscricaoNormal),promocao:null,estado:'NORMAL'};
    var pr=this.paraCurso(cursosDados,cursoId);
    if(pr){
      var pM=pr.precoMensalidadePromo!=null?Number(pr.precoMensalidadePromo):base.mensalidade;
      var pI=pr.precoInscricaoPromo!=null?Number(pr.precoInscricaoPromo):base.inscricao;
      if(pM<base.mensalidade||pI<base.inscricao){
        base.promocao=pr;base.estado='PROMOCAO';
        base.mensalidade=Math.min(pM,base.mensalidade);base.inscricao=Math.min(pI,base.inscricao);
        base.poupanca=(base.normalMensalidade-base.mensalidade)+(base.normalInscricao-base.inscricao);
        base.fim=pr.fim||'';base.inicio=pr.inicio||'';
      }
    }
    return base;
  },
  fmt:function(v){return (Number(v)||0).toLocaleString('pt-PT',{minimumFractionDigits:0,maximumFractionDigits:2})+' MT';},
  dataBR:function(iso){var p=String(iso||'').split(/[-T]/);return p.length>=3?p[2]+'/'+p[1]+'/'+p[0]:'';},
  whatsapp:function(curso,info,servico){
    var l=[];
    l.push('Olá! Vi o curso *'+curso.nome+'* no site da FRANCITEC.');
    l.push('*Duração:* '+curso.duracao);
    l.push('*Modalidade:* '+(servico||curso.modalidade));
    l.push('*Mensalidade normal:* '+this.fmt(info.normalMensalidade));
    if(info.estado==='PROMOCAO'){l.push('*Preço promocional:* '+this.fmt(info.mensalidade)+' (válido até '+this.dataBR(info.fim)+')');l.push('*Poupança:* '+this.fmt(info.poupanca));}
    l.push('*Inscrição:* '+this.fmt(info.inscricao));
    if(curso.taxaCertificado)l.push('*Certificado:* '+this.fmt(curso.taxaCertificado));
    l.push('Podem indicar-me os procedimentos de inscrição? Sei que a abertura do WhatsApp não reserva a vaga.');
    return 'https://wa.me/258'+String(curso?window.CURSOS_DADOS.contactos.whatsapp:'852652545')+'?text='+encodeURIComponent(l.join('\n'));
  }
};
