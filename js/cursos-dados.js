/* FRANCITEC — dados de cursos, preços normais e campanhas promocionais (v2.0)
   O PREÇO NORMAL nunca é substituído pela promoção — é sempre preservado.
   Em modo servidor, os dados são carregados de /api/public/cursos; este ficheiro
   serve de semente e de reserva offline. */
window.CURSOS_DADOS={
  versao:'2.0',
  contactos:{whatsapp:'852652545',telefones:'841069443 | 852652545'},
  cursos:[
    {id:'ele-inst',nome:'Eletricidade Instaladora',categoria:'Electricidade',duracao:'6 meses',modalidade:'Segunda a sexta ou Sábado',horarios:'Seg–Sex (turnos) · Sábado 07h–13h',precoNormal:2000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalações elétricas residenciais, comerciais e industriais, quadros, esquemas e segurança.',condicoes:'Requisitos: cópia de BI, 2 fotos tipo passe, certificado da 9.ª ou 10.ª classe.',imagem:'',variantes:[{modalidade:'Sábado (3 meses)',mensalidade:1485,inscricao:800}]},
    {id:'ele-ind',nome:'Eletricidade Industrial',categoria:'Electricidade',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:2500,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Comandos elétricos, manutenção, automação e partida de motores.',condicoes:'',imagem:'',variantes:[]},
    {id:'mec-auto',nome:'Mecânica Auto',categoria:'Mecânica',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:2500,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Diagnóstico, manutenção preventiva e corretiva e prática em veículos.',condicoes:'',imagem:'',variantes:[]},
    {id:'maq-cmd',nome:'Máquinas e Comandos Elétricos',categoria:'Electricidade',duracao:'3 meses',modalidade:'Sábado',horarios:'Sábado 07h–13h',precoNormal:1485,inscricaoNormal:800,taxaCertificado:null,disponivel:true,descricao:'Painéis, comandos e dimensionamento de sistemas elétricos.',condicoes:'Valor de Sábado — inscrição 350 MT e mensalidade 350 MT.',imagem:'',variantes:[]},
    {id:'solar',nome:'Sistema Fotovoltaico',categoria:'Energia',duracao:'3 meses',modalidade:'Sábado',horarios:'Sábado',precoNormal:4000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalação, configuração e dimensionamento de sistemas solares.',condicoes:'Não participa das promoções de Sábado.',imagem:'',variantes:[{modalidade:'Sábado (3 meses)',mensalidade:2670,inscricao:800}]},
    {id:'inf-bas',nome:'Informática Básica',categoria:'Informática',duracao:'2 meses',modalidade:'Segunda a sexta ou Sábado',horarios:'Seg–Sex · Sábado 07h–13h',precoNormal:1000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Computador, internet, Word, Excel e competências digitais essenciais.',condicoes:'',imagem:'',variantes:[{modalidade:'Sábado (3 meses)',mensalidade:800,inscricao:800}]},
    {id:'inf-av',nome:'Informática Avançada',categoria:'Informática',duracao:'2 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:1800,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Excel avançado, manutenção de computadores e ferramentas digitais de trabalho.',condicoes:'',imagem:'',variantes:[]},
    {id:'edu-inf',nome:'Educação de Infância',categoria:'Educação',duracao:'6 meses',modalidade:'Segunda a sexta ou Sábado',horarios:'Seg–Sex · Sábado',precoNormal:2000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Pedagogia, desenvolvimento infantil e prática de sala de aula.',condicoes:'Valor de Sábado — inscrição 800 MT e mensalidade 800 MT.',imagem:'',variantes:[{modalidade:'Sábado',mensalidade:1200,inscricao:800}]},
    {id:'refri',nome:'Refrigeração',categoria:'Técnico',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:2500,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalação, manutenção e reparação de sistemas de frio e climatização.',condicoes:'',imagem:'',variantes:[]},
    {id:'canal',nome:'Canalização',categoria:'Construção',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:2500,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Instalações hidráulicas, redes de água e esgotos, manutenção e reparação.',condicoes:'',imagem:'',variantes:[]},
    {id:'ingles',nome:'Inglês',categoria:'Línguas',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:600,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Inglês geral: compreensão, expressão oral e escrita.',condicoes:'',imagem:'',variantes:[]},
    {id:'hst',nome:'HST — Higiene e Segurança no Trabalho',categoria:'Segurança',duracao:'3 meses',modalidade:'Sábado',horarios:'Sábado 07h–13h',precoNormal:1485,inscricaoNormal:800,taxaCertificado:null,disponivel:true,descricao:'Higiene e segurança no trabalho: normas, prevenção e boas práticas profissionais.',condicoes:'Valor de Sábado — inscrição 800 MT e mensalidade 1.485 MT.',imagem:'',variantes:[]},{id:'secre',nome:'Secretariado Executivo',categoria:'Administração',duracao:'6 meses',modalidade:'Segunda a sexta',horarios:'Seg–Sex (turnos)',precoNormal:2000,inscricaoNormal:500,taxaCertificado:null,disponivel:true,descricao:'Secretariado, atendimento, gestão documental e escritório.',condicoes:'',imagem:'',variantes:[]}
  ],
  galeria:[
    {img:'images/grad-1.jpg',tag:'🎓 Graduação 2026',titulo:'Momento de alegria',legenda:'Formandos celebram a conclusão, erguendo os diplomas.'},
    {img:'images/grad-2.jpg',tag:'🎓 Graduação 2026',titulo:'Entrega de diplomas',legenda:'Cerimónia sob a tenda oficial da FRANCITEC.'},
    {img:'images/grad-3.jpg',tag:'🎓 Graduação 2026',titulo:'Orgulho FRANCITEC',legenda:'Formandos com o estandarte oficial do Centro.'},
    {img:'images/grad-4.jpg',tag:'🎓 Graduação 2026',titulo:'Dia inesquecível',legenda:'Formandos e convidados na 1.ª fase da graduação.'},
    {img:'images/grad-5.jpg',tag:'🎓 Graduação 2026',titulo:'Missão cumprida',legenda:'Diplomas na mão, futuro garantido.'},
    {img:'images/grad-6.jpg',tag:'🎓 Graduação 2026',titulo:'A sua profissão começa aqui',legenda:'Palavras de encorajamento à turma graduada.'},
    {img:'images/grad-7.jpg',tag:'🎓 Graduação 2026',titulo:'Turma 2026',legenda:'Formandos e convidados na cerimónia de graduação.'},
    {img:'images/grad-8.jpg',tag:'🎓 Graduação 2026',titulo:'Turma 2026 — mérito',legenda:'Destaque dos formandos do ano.'},
    {img:'images/6ece3ebc-4157-456a-ab3a-e15cf0c9263d.jpg',tag:'🔧 Mecânica Auto',titulo:'Aula prática',legenda:'Prática em oficina.'},
    {img:'images/8aab920a-8b89-4ce7-90f7-610da4fbb1f9.jpg',tag:'🔧 Mecânica Auto',titulo:'Prática',legenda:'Diagnóstico e desmontagem.'},
    {img:'images/d0a6986e-112a-46dd-97c4-6d66625ba507.jpg',tag:'🔧 Mecânica Auto',titulo:'Formação prática',legenda:'Manutenção automóvel.'},
    {img:'images/d600f0ef-e94d-4bd3-985c-03a70259a2e8.jpg',tag:'🚗 Mecânica',titulo:'Vida na Francitec',legenda:'Aprendizagem com profissionais.'},
    {img:'images/16419288-a4cd-4224-98fa-e6274c43ad17.jpg',tag:'⚡ Electricidade',titulo:'Quadros e instalações',legenda:'Ligações e esquemas na prática.'},
    {img:'images/4705c639-d95b-413e-b00b-f387a0c50aaf.jpg',tag:'⚡ Electricidade',titulo:'Formação técnica',legenda:'Montagem e medida.'},
    {img:'images/7b539427-d43b-4fdb-86c6-46a1c7f15b52.jpg',tag:'💻 Informática',titulo:'Sala de informática',legenda:'Word, Excel e internet.'},
    {img:'images/b6d171bc-f2a7-486a-9654-f31d89960e48.jpg',tag:'☀️ Fotovoltaico',titulo:'Energia solar',legenda:'Painéis e dimensionamento.'},
    {img:'images/ea0cd5a3-c868-4c07-8a55-e3df5b7b184d.jpg',tag:'🎓 Certificação',titulo:'O teu futuro',legenda:'Formação de qualidade, futuro garantido.'},
    {img:'images/ea38d577-b2bd-46a7-8ea6-3fe54c6c8e07.jpg',tag:'❄️ Refrigeração',titulo:'Climatização',legenda:'Instalação e manutenção de frio.'},
    {img:'images/bc2198aa-de13-49b8-93a4-bbfdbd09f727.jpg',tag:'🚰 Canalização',titulo:'Hidráulica',legenda:'Redes de água e esgotos.'},
    {img:'images/2fb61edb-918c-49cb-b33c-ab1bc69307a5.jpg',tag:'🧒 Educação de Infância',titulo:'Pedagogia',legenda:'Prática de sala de aula.'},
    {img:'images/afd18610-3991-4000-aef4-263b4cde978b.jpg',tag:'🖥️ Informática Avançada',titulo:'Excel e manutenção',legenda:'Ferramentas digitais de trabalho.'},
    {img:'images/9e757c97-1203-4d69-b5ee-152e5f558682.jpg',tag:'🇬🇧 Inglês',titulo:'Inglês geral',legenda:'Expressão oral e escrita.'},
    {img:'images/62fef9a6-397a-4d7e-9e8e-fb493fec852b.jpg',tag:'🏢 Secretariado',titulo:'Gestão de escritório',legenda:'Atendimento e documentação.'},
    {img:'images/ab93860e-572c-44d8-817b-6a6d2fa5345f.jpg',tag:'🦺 HST',titulo:'Segurança no trabalho',legenda:'Normas e prevenção.'},
  ],
  promocoes:[
    {id:'p2027-ei-s', cursoId:'ele-inst', variante:'semana',  precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false},
    {id:'p2027-ei-b', cursoId:'ele-inst', variante:'sabado',  precoMensalidadePromo:350,  precoInscricaoPromo:350, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027 — Sábados', suspensa:false},
    {id:'p2027-eind', cursoId:'ele-ind',  precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false},
    {id:'p2027-ma',   cursoId:'mec-auto', precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false},
    {id:'p2027-mq',   cursoId:'maq-cmd',  precoMensalidadePromo:350,  precoInscricaoPromo:350, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027 — Sábados', suspensa:false},
    {id:'p2027-ei2',  cursoId:'edu-inf',  variante:'semana',  precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false},
    {id:'p2027-eib',  cursoId:'edu-inf',  variante:'sabado',  precoMensalidadePromo:800,  precoInscricaoPromo:800, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027 — Sábados', suspensa:false},
    {id:'p2027-ib',   cursoId:'inf-bas',  variante:'sabado',  precoMensalidadePromo:350,  precoInscricaoPromo:350, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027 — Sábados', suspensa:false},
    {id:'p2027-ref',  cursoId:'refri',    precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false},
    {id:'p2027-can',  cursoId:'canal',    precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false},
    {id:'p2027-sec',  cursoId:'secre',    precoMensalidadePromo:1800, precoInscricaoPromo:500, inicio:'2026-11-01T00:00', fim:'2027-01-31T23:59', condicoes:'Campanha Entra 2027', suspensa:false}
  ],
  historico:[{quando:'2026-11-18T20:40:00',curso:'(todos)',campo:'preços normais',de:'(campanhas anteriores)',para:'conforme cartazes oficiais (semana + sábados)',por:'Direcção',motivo:'Alinhamento com cartazes impressos'}]
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
  paraCurso:function(cursosDados,cursoId,variante){
    var lista=(cursosDados.promocoes||[]).filter(function(pr){
      if(pr.cursoId!==cursoId&&pr.cursoId!=='*')return false;
      if(window.SPI_PROMO.estado(pr)!=='ACTIVA'||pr.ativa===false)return false;
      if(pr.variante==='semana'&&variante)return false;
      if(pr.variante==='sabado'&&!variante)return false;
      return true;});
    if(!lista.length)return null;
    lista.sort(function(a,b){return (Number(a.descontoTotal)||0)-(Number(b.descontoTotal)||0);});
    return lista[0];
  },
  preco:function(cursosDados,cursoId,variante){
    var c=(cursosDados.cursos||[]).find(function(x){return x.id===cursoId;});
    if(!c)return null;
    var v=(variante&&c.variantes||[]).find(function(x){return x.modalidade===variante;})||null;
    var base={mensalidade:v?Number(v.mensalidade):Number(c.precoNormal),inscricao:v?Number(v.inscricao):Number(c.inscricaoNormal),normalMensalidade:v?Number(v.mensalidade):Number(c.precoNormal),normalInscricao:v?Number(v.inscricao):Number(c.inscricaoNormal),promocao:null,estado:'NORMAL'};
    var pr=this.paraCurso(cursosDados,cursoId,variante);
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
