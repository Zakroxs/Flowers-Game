(() => {
  'use strict';

  /* =====================================================================
     2. BANCO DE PREGUNTAS  ←←← AQUÍ AGREGAS PREGUNTAS NUEVAS
     ---------------------------------------------------------------------
     CÓMO AGREGAR UNA PREGUNTA (paso a paso):

       1. Busca la lista de la categoría donde la quieres (por ejemplo
          "romance:" o "dilemas:").
       2. Ve al final de esa lista, justo antes del cierre "]".
       3. Agrega una coma "," al final de la última pregunta.
       4. Escribe tu pregunta entre comillas simples '...'  y NADA MÁS.
          Ejemplo:
              '¿Cuál fue el mejor regalo que has recibido?',

     REGLAS IMPORTANTES:
       • Cada pregunta va entre comillas simples '...' y termina con coma.
       • Si tu pregunta lleva un apóstrofo ('), escríbelo con barra: \'
       • No hace falta numerarlas ni ponerles ID: el juego lo hace solo.
       • Puedes agregarlas al principio, en medio o al final de la lista.
       • Las partidas guardadas NO se dañan al agregar preguntas nuevas.
       • Si CAMBIAS el texto de una pregunta existente, el juego la
         tratará como una pregunta nueva (aunque ya hubiera salido).
       • Escríbelas pensando en que las lee UNA persona y responde LA OTRA:
         "¿Qué te hace…?" funciona mejor que "¿Qué nos hace…?".
       • Modo ONLINE: si los dos usan el mismo archivo, todo coincide. Si
         agregaste preguntas solo en un teléfono, esas solo salen si ese
         teléfono es quien creó la sala.

     CÓMO CREAR UNA CATEGORÍA NUEVA (por ejemplo "Familia"):
       1. En la sección 3 (CATEGORÍAS) agrega una línea igual a las demás:
              familia: { label: 'Familia', emoji: '👨‍👩‍👧', color: '#22c55e' },
       2. Aquí abajo agrega una lista con el mismo nombre:
              familia: [
                '¿Qué tradición familiar te gustaría conservar?',
              ],
       Listo: aparecerá sola como botón de filtro.

     El pie de página muestra el total de preguntas, así compruebas que
     se sumaron bien.
     ===================================================================== */
  const RAW = {

    /* ---------- 🧊 ROMPEHIELOS: risas, curiosidades y anécdotas ---------- */
    rompehielos: [
      '¿Cuál es la teoría conspirativa más absurda que en el fondo te causa gracia?',
      'Si tuvieras que vivir dentro de una película o serie durante un año, ¿cuál elegirías?',
      '¿Cuál ha sido la compra más inútil pero divertida que has hecho en tu vida?',
      'Si pudieras dominar una habilidad de la noche a la mañana sin esfuerzo, ¿cuál sería?',
      '¿Qué comida podrías comer todos los días del año sin cansarte jamás?',
      '¿Cuál es tu placer culpable en la música, el cine o la televisión?',
      '¿Qué es lo más vergonzoso pero divertido que te ha pasado en público?',
      '¿Cuál es el apodo más raro que te han puesto y de dónde salió?',
      'Si tu vida tuviera banda sonora, ¿qué canción sonaría cuando entras a una habitación?',
      'Si abrieras un negocio absurdo pero exitoso, ¿de qué sería?',
      '¿Qué es lo más raro que has comido y volverías a probar?',
      '¿Cuál fue la mejor travesura de tu infancia?',
      'Si fueras un supervillano cómico, ¿cuál sería tu poder inofensivo?',
      '¿Qué app de tu móvil usas más de lo que te gustaría admitir?',
      '¿Qué moda o peinado del pasado te dio vergüenza pero en el fondo no te arrepientes?',
      '¿Qué cosa creíste durante años hasta que alguien te sacó del error?',
      '¿Qué serie o juego terminaste en un fin de semana sin salir de casa?',
      'Si pudieras tener un superpoder que solo funcionara en situaciones cotidianas, ¿cuál elegirías?',
      '¿Qué animal serías por la mañana, por la tarde y por la noche?',
      '¿Qué objeto de tu casa tiene la historia más curiosa?',
      '¿Cuál es el consejo más raro que te han dado y qué tal te fue al seguirlo?',
      '¿Qué talento inútil tienes que casi nadie conoce?',
      '¿Cuál es tu excusa favorita para llegar tarde o cancelar planes?',
      '¿Cuál es el meme o video que más veces has visto sin cansarte?',
      '¿Qué harías con un día entero en el que nadie pudiera juzgarte?',
      '¿Cuál es el plan más loco que aceptaste sin pensarlo demasiado?',
      'Si pudieras cambiarte el nombre por un día, ¿cuál elegirías?',
      '¿Qué canción cantas a todo pulmón cuando nadie te escucha?',
      '¿Cuál es la peor película que te encantó?',
      'Si tuvieras una mascota exótica, ¿cuál sería y cómo la llamarías?'
    ],

    /* ---------- 💖 CHISPA Y ROMANCE: química, coqueteo y detalles ---------- */
    romance: [
      '¿Qué fue lo primero que notaste de mí cuando nos conocimos?',
      '¿Cómo sería una cita ideal según tu estilo personal, sin caer en clichés?',
      '¿Qué detalle pequeño o gesto te conecta de inmediato con alguien?',
      '¿Qué te parece increíblemente atractivo en una persona y casi nadie lo nota?',
      'Si hiciéramos una escapada improvisada este fin de semana, ¿a dónde iríamos?',
      '¿Qué canción te transmite una vibra romántica de inmediato?',
      '¿Qué halago sincero que te hicieron jamás vas a olvidar?',
      '¿Cuál es tu lenguaje del amor: palabras, tiempo juntos, regalos, ayuda o contacto físico?',
      '¿Qué te gustaría que hiciéramos juntos al menos una vez en la vida?',
      '¿Cuál sería tu plan perfecto para un domingo de lluvia juntos?',
      '¿Cuál es el detalle romántico más lindo que han tenido contigo?',
      'Si tuvieras que regalarme algo sin gastar dinero, ¿qué sería?',
      '¿Cómo describes la química entre dos personas en solo tres palabras?',
      '¿Prefieres que te sorprendan con un plan improvisado o que lo organicen con tiempo?',
      '¿Cuál es la mejor primera cita que recuerdes, real o de película?',
      '¿Qué pequeña costumbre de pareja te parece adorable?',
      '¿Qué aroma, lugar o sonido te hace sentir enamorado?',
      '¿Qué es lo que más disfrutas de una conversación larga de madrugada?',
      'Cuando extrañas a alguien, ¿prefieres mensajes largos, notas de voz o llamadas?',
      '¿Qué película o serie verías con alguien una y otra vez sin aburrirte?',
      '¿Qué te hace sentir más cómodo en una primera cita: caminar, comer o algo activo?',
      '¿Qué es lo más romántico que alguien ha hecho por ti, grande o pequeño?',
      '¿Qué detalle en la forma de hablar de alguien te resulta irresistible?',
      '¿Cuál es tu idea de una noche perfecta en casa?',
      '¿Qué canción elegirías como banda sonora de una noche especial?',
      '¿Cómo te gusta que te muestren interés sin agobiarte?',
      '¿Qué te da mariposas en el estómago: una mirada, una risa o un mensaje inesperado?',
      '¿Cuál es el lugar más romántico que has visitado o sueñas con visitar?',
      '¿Qué sueles hacer cuando alguien te gusta y no sabes cómo decírselo?',
      '¿Cuándo te parece el momento adecuado para decir “te quiero”?'
    ],

    /* ---------- 🧠 CONEXIÓN PROFUNDA: sueños, valores y reflexiones ---------- */
    profundas: [
      '¿Qué lección de vida aprendiste de la manera difícil y hoy agradeces tener?',
      '¿Qué pequeño detalle te hace sentir de verdad valorado y querido?',
      '¿Cuál es un sueño o meta personal que aún no le has contado a casi nadie?',
      '¿Qué cualidad valoras más en una persona con la que compartes tu tiempo?',
      '¿Qué logro o parte de ti te llena de orgullo?',
      '¿Cómo sueles reaccionar y qué necesitas cuando atraviesas un día difícil?',
      '¿Qué significa para ti tener un “día perfecto”?',
      '¿Qué miedo te gustaría dejar de sentir?',
      '¿Qué valor no negociarías nunca en una relación?',
      '¿Qué te gustaría que la gente entendiera mejor de ti?',
      '¿Cómo te imaginas tu vida dentro de cinco años?',
      '¿Qué tradición familiar te gustaría conservar o crear?',
      'Si pudieras cenar y conversar con cualquier persona de la historia, ¿a quién elegirías?',
      'Cuando compartes algo vulnerable, ¿qué necesitas de la otra persona: escucha, consejo o un abrazo?',
      '¿Qué momento de tu infancia sigue influyendo en quién eres hoy?',
      '¿Cuándo sentiste que habías cambiado de verdad como persona?',
      '¿Qué te da paz cuando todo se siente demasiado?',
      '¿Qué decisión difícil tomaste y hoy sabes que fue la correcta?',
      '¿Quién te enseñó más sobre cómo querer y dejarte querer?',
      '¿Cuál es lo más valiente que has hecho?',
      '¿Qué te gustaría haber sabido a los 18 años?',
      '¿Qué error te enseñó más de lo que esperabas?',
      '¿Qué significa para ti sentirte en casa?',
      '¿Qué papel juega la familia en tu vida hoy?',
      '¿Qué haces cuando necesitas espacio y cómo te gustaría que lo respeten?',
      '¿Qué es lo que más valoras de tus amistades?',
      '¿Qué cambiarías de tu forma de ver el mundo si pudieras?',
      '¿Qué te gustaría que dijeran de ti las personas que más te quieren?',
      '¿Cuál es la conversación pendiente que más te gustaría tener?',
      '¿Cómo defines el éxito para ti, más allá del dinero?'
    ],

    /* ---------- ⚖️ DILEMAS: debates divertidos "¿qué preferirías?" ---------- */
    dilemas: [
      '¿Preferirías viajar 100 años al pasado o 100 años al futuro juntos?',
      '¿Preferirías no usar el móvil un mes o no ver películas ni series durante 6 meses?',
      '¿Preferirías unas vacaciones en una cabaña en la montaña o en una playa paradisíaca?',
      '¿Preferirías no volver a madrugar nunca o no volver a cocinar nunca?',
      '¿Preferirías una cena elegante o una noche de pizza y manta?',
      '¿Preferirías mucho dinero y poco tiempo libre, o poco dinero y todo el tiempo del mundo?',
      '¿Preferirías un viaje sorpresa sin saber el destino o uno planeado al detalle?',
      '¿Preferirías vivir en una ciudad enorme y vibrante o en un pueblo tranquilo?',
      '¿Preferirías poder teletransportarte o poder volar?',
      '¿Preferirías recordar absolutamente todo lo que vives o poder olvidar lo que quieras?',
      '¿Preferirías saber siempre cuándo alguien miente o poder leer la mente una vez al día?',
      '¿Preferirías tener un chef personal a diario o un asistente que limpie todo por ti?',
      '¿Preferirías hablar todos los idiomas del mundo o poder comunicarte con los animales?',
      '¿Preferirías poder pausar el tiempo o rebobinarlo 10 minutos?',
      '¿Preferirías ser la persona más graciosa del grupo o la más sabia?',
      '¿Preferirías la mejor cena de tu vida una sola vez o muy buenas cenas cada semana?',
      '¿Preferirías dormir siempre 10 horas o solo 4 sintiéndote descansado?',
      '¿Preferirías conocer a tu yo de hace 10 años o a tu yo de dentro de 10 años?',
      '¿Preferirías que tu vida fuera una comedia o un drama romántico?',
      '¿Preferirías un año viajando sin parar o un año construyendo un proyecto propio?',
      '¿Preferirías una casa enorme lejos de todo o un piso pequeño en el centro?',
      '¿Preferirías conocer todo tu futuro o dejarlo como una sorpresa?',
      '¿Preferirías desayunar siempre dulce o desayunar siempre salado?',
      '¿Preferirías un mensaje de buenos días o una llamada corta cada noche?',
      '¿Preferirías vivir en un verano eterno o en un otoño eterno?',
      '¿Preferirías una cita en un concierto o una cita en un museo?',
      '¿Preferirías ser muy famoso o pasar totalmente desapercibido?',
      '¿Preferirías un pequeño lujo cada día o un gran lujo una vez al año?',
      '¿Preferirías cantar en público o bailar en público sin previo aviso?',
      '¿Preferirías que siempre te den la razón o aprender algo nuevo cada día?'
    ],

    /* ---------- 🎯 RETOS: mini actividades para hacer juntos ---------- */
    retos: [
      'Reto: mírense a los ojos en silencio durante 30 segundos. Luego cuenten qué sintieron.',
      'Reto: cada uno dice tres cosas que ha notado del otro esta noche.',
      'Reto: elijan una canción y compártanla. ¿Qué recuerdo les trae?',
      'Reto: cuenten una historia de su infancia que el otro no conozca.',
      'Reto: predigan la respuesta del otro a “¿cuál es tu película favorita?” y comprueben quién acertó.',
      'Reto: hagan un brindis por algo pequeño que celebren hoy.',
      'Reto: planeen juntos una cita imaginaria para dentro de un mes en solo tres frases.',
      'Reto: inventen juntos un nombre y un eslogan para su dúo.',
      'Reto: describan al otro con una sola palabra y expliquen por qué.',
      'Reto: háganse un cumplido sincero mirándose a los ojos.',
      'Reto: cada uno describe en un minuto su lugar ideal para vivir, sin decir el nombre del sitio.',
      'Reto: cada uno enseña la foto más divertida de su galería y cuenta el contexto.',
      'Reto: cada uno dice tres cosas por las que está agradecido hoy.',
      'Reto: cada uno imita a un personaje famoso y el otro adivina quién es.',
      'Reto: elijan un lugar del mundo y planeen en dos minutos qué harían allí el primer día.',
      'Reto: cada uno comparte un recuerdo feliz que huela, suene o sepa a algo concreto.',
      'Reto: escriban en una servilleta o nota una meta para este año y léanla en voz alta.',
      'Reto: cuenten un secreto o manía graciosa que pocos sepan de ustedes.',
      'Reto: representen con mímica su comida favorita hasta que el otro la adivine.',
      'Reto: elijan una canción de fondo para acompañar el resto de la cita.',
      'Reto: cada uno cuenta su mejor recuerdo de un verano.',
      'Reto: hagan una lista de tres cosas que quieren probar juntos y elijan una.',
      'Reto: cada uno dice cuál sería su pedido perfecto en un restaurante y por qué.',
      'Reto: inventen una historia de cinco frases; cada uno dice una frase, alternando.',
      'Reto: cada uno enseña un baile ridículo de 10 segundos.',
      'Reto: cada uno dice algo que le da curiosidad del otro y el otro responde.',
      'Reto: hagan un pacto pequeño y divertido para la próxima vez que se vean.',
      'Reto: cada uno cuenta su día de hoy como si fuera el resumen de una película.',
      'Reto: elijan una palabra que describa cómo se sienten ahora mismo y expliquen por qué.',
      'Reto: tómense una foto juntos, si quieren, con la pose más absurda que se les ocurra.'
    ]
  };

  /* =====================================================================
     2b. MOMENTOS ESPECIALES 💌
     ---------------------------------------------------------------------
     Cada 3 preguntas, en lugar de una pregunta sale un "momento
     especial": un mensaje para quien RESPONDE, con dos respuestas para
     elegir. Salen en orden y, al terminar la lista, vuelven a empezar.

     CÓMO AGREGAR UNO: copia una línea y cámbiale los textos.
       t → el mensaje (si hay nombre, se antepone: "Ana, te quiero…")
       a → primera respuesta posible
       b → segunda respuesta posible
     Se puede desactivar desde ⚙️ Ajustes.
     ===================================================================== */
  const SPECIALS = [
    { t: 'te quiero invitar a una cita. ¿Qué dices? 🌹',                          a: '💖 ¡Sí, claro!',       b: '😏 Déjame pensarlo' },
    { t: '¿te parece bien el lunes? Si no, dime qué día te queda mejor. 📅',      a: '📅 El lunes va bien',  b: '🗓️ Mejor otro día' },
    { t: 'yo pongo el plan y tú pones la hora. ¿Trato hecho? 🤝',                 a: '🤝 Trato hecho',       b: '🕐 Negociemos' },
    { t: 'para la cita, ¿qué te apetece más: cena, café o paseo? 🍷',             a: '🍷 Una cena',          b: '☕ Café o paseo' },
    { t: 'prométeme que después de esta cita habrá una segunda. 💫',              a: '💫 Prometido',         b: '😉 Ya veremos' }
  ];

  /* =====================================================================
     3. CATEGORÍAS
     ---------------------------------------------------------------------
     Cada categoría tiene:
       label → el nombre que se ve en el botón
       emoji → el ícono
       color → el color de acento (hex) de la tarjeta y la barra
     La clave (rompehielos, romance…) debe coincidir con la de RAW.
     "all" es la mezcla de todas y NO lleva lista de preguntas.
     ===================================================================== */
  const CATS = {
    all:         { label: 'Todas',             emoji: '✨', color: '#ec4899' },
    rompehielos: { label: 'Rompehielos',       emoji: '🧊', color: '#60a5fa' },
    romance:     { label: 'Chispa y Romance',  emoji: '💖', color: '#ec4899' },
    profundas:   { label: 'Conexión profunda', emoji: '🧠', color: '#8b5cf6' },
    dilemas:     { label: 'Dilemas',           emoji: '⚖️', color: '#f59e0b' },
    retos:       { label: 'Retos',             emoji: '🎯', color: '#2dd4bf' }
  };
  const SP = { label: 'Momento especial', emoji: '💌', color: '#f43f5e' };   // los momentos especiales
  const catOf = k => k === 'especial' ? SP : (CATS[k] || CATS.all);

  /* =====================================================================
     4. PREPARAR LAS PREGUNTAS
     ---------------------------------------------------------------------
     Convierte las listas de arriba en objetos { id, c, t }:
       id → identificador ESTABLE calculado a partir del texto (así las
            partidas guardadas siguen funcionando aunque agregues
            preguntas nuevas en cualquier lugar de la lista).
       c  → categoría
       t  → texto de la pregunta
     No necesitas tocar esta parte.
     ===================================================================== */
  function idFor(cat, text) {
    let hash = 5381;                       // función hash simple (djb2)
    const s = cat + '|' + text;
    for (let i = 0; i < s.length; i++) hash = ((hash << 5) + hash + s.charCodeAt(i)) | 0;
    return 'q' + (hash >>> 0).toString(36);
  }

  const DEFAULTS = [];
  const seenIds = new Set();
  Object.entries(RAW).forEach(([cat, list]) => {
    if (!CATS[cat]) { console.warn(`La categoría "${cat}" está en RAW pero no en CATS. Agrégala en la sección 3.`); return; }
    list.forEach(t => {
      const id = idFor(cat, t);
      if (seenIds.has(id)) { console.warn('Pregunta repetida (se ignora):', t); return; }
      seenIds.add(id);
      DEFAULTS.push({ id, c: cat, t });
    });
  });

  /* =====================================================================
     5. ESTADO Y GUARDADO
     ---------------------------------------------------------------------
     Todo se guarda en el navegador (localStorage) bajo una sola clave.

     S.game → la PARTIDA ACTUAL (esto es lo que se guarda en "Partidas"):
        used     : ids de preguntas que YA SALIERON (se ocultan del mazo)
        current  : id de la pregunta a la vista (o null)
        spinner  : quién gira la ruleta AHORA (0 = Persona A, 1 = Persona B).
                   Esa persona pregunta y anota; la otra responde.
        category : categoría activa
        notes    : respuestas anotadas
        since    : preguntas desde el último momento especial
        spIdx    : cuál momento especial toca después
        special  : índice del momento especial a la vista (o null)
        spDone   : si ya se respondió ese momento especial
        spAnswer : texto de la respuesta elegida
        seq      : contador que sube con cada pregunta nueva (sirve para
                   animar la ruleta y para sincronizar el modo online)

     Común a todas las partidas:
        favs, custom (preguntas propias), names {a,b} (un teléfono),
        myName (online), specials, vibrate, saves (partidas guardadas),
        turn {on, urls[], user, pass} (TURN propio para conectar online)
     ===================================================================== */
  const KEY = 'flowers_game_v2';
  const OLD_KEY = 'flowers_game_v1';    // versión anterior: se lee para no perder tus datos
  const store = {
    get(fallback) {
      try { const v = localStorage.getItem(KEY) || localStorage.getItem(OLD_KEY); return v ? JSON.parse(v) : fallback; }
      catch { return fallback; }
    },
    set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* sin almacenamiento */ } }
  };
  const clone = o => JSON.parse(JSON.stringify(o));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const newGame = (category = 'all') => ({
    used: [], current: null, spinner: 0, category, notes: [],
    since: 0, spIdx: 0, special: null, spDone: false, spAnswer: '', seq: 0
  });

  const saved = store.get({});
  const customSaved = Array.isArray(saved.custom) ? saved.custom : [];
  const S = {
    game: Object.assign(newGame(), saved.game || {}),
    // favoritas: antes eran solo ids; ahora guardan también el texto
    favs: (Array.isArray(saved.favs) ? saved.favs : [])
      .map(f => typeof f === 'string' ? (DEFAULTS.concat(customSaved).find(q => q.id === f) || null) : f)
      .filter(f => f && f.id && f.t),
    custom: customSaved,
    names: Object.assign({ a: '', b: '' }, saved.names || {}),
    myName: saved.myName || '',
    specials: saved.specials !== false,
    vibrate: saved.vibrate !== false,
    saves: Array.isArray(saved.saves) ? saved.saves : [],
    // TURN propio: sin esto no hay conexión entre redes distintas.
    turn: Object.assign({ on: false, urls: [], user: '', pass: '' }, saved.turn || {})
  };
  if (!Array.isArray(S.turn.urls)) S.turn.urls = [];
  if (!CATS[S.game.category]) S.game.category = 'all';
  const save = () => store.set(S);

  /* =====================================================================
     6. UTILIDADES
     ===================================================================== */
  const $ = s => document.querySelector(s);

  // Crea un elemento HTML de forma segura (el texto NUNCA se interpreta como HTML).
  function h(tag, attrs = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') el.className = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    kids.flat().forEach(kid => { if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(kid)); });
    return el;
  }

  const allQs   = () => DEFAULTS.concat(S.custom);                                   // todas las preguntas
  const getQ    = id => allQs().find(q => q.id === id) || null;                      // buscar por id
  const poolOf  = cat => allQs().filter(q => cat === 'all' || q.c === cat);          // preguntas de una categoría
  const remainingOf = cat => poolOf(cat).filter(q => !S.game.used.includes(q.id));   // las que AÚN NO han salido
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = ts => new Date(ts).toLocaleString('es', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  const hasPlay = g => g.current != null || g.special != null;                       // ¿hay pregunta o momento especial a la vista?

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  // Pregunta de confirmación: devuelve una promesa true/false
  function ask(msg, okLabel) {
    return new Promise(res => {
      const d = $('#dlgConfirm');
      $('#confirmMsg').textContent = msg;
      $('#confirmOk').textContent = okLabel || 'Confirmar';
      d.returnValue = '';
      d.addEventListener('close', () => res(d.returnValue === 'ok'), { once: true });
      d.showModal();
    });
  }

  async function copyText(text, okMsg) {
    try { await navigator.clipboard.writeText(text); toast(okMsg || '📋 Copiado'); return; } catch { /* plan B */ }
    const ta = h('textarea', { style: 'position:fixed;opacity:0' }); ta.value = text;
    document.body.append(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch {}
    ta.remove();
    toast(ok ? (okMsg || '📋 Copiado') : 'No se pudo copiar');
  }

  /* =====================================================================
     7. MODO, JUGADORES Y TURNOS
     ---------------------------------------------------------------------
     mode = 'local'  → un solo teléfono (los dos se lo pasan)
            'host'   → online, eres quien CREÓ la sala (Persona A, jugador 0)
            'guest'  → online, te UNISTE a la sala   (Persona B, jugador 1)

     En 'local' y 'host' el juego corre en ESTE teléfono (S.game).
     En 'guest' este teléfono solo muestra lo que envía el anfitrión
     (la variable "remote") y le manda las acciones que hagas.
     ===================================================================== */
  let mode = 'local';
  let connected = false;      // ¿hay conexión online activa?
  let remote = null;          // (guest) último estado recibido del anfitrión
  let peerName = '';          // (host) nombre de la otra persona
  let busy = false;           // true mientras gira la ruleta
  let guestWaiting = false;   // (guest) esperando respuesta del anfitrión

  const me = () => mode === 'host' ? 0 : mode === 'guest' ? 1 : -1;

  // Nombre "crudo" escrito por la persona ('' si no puso ninguno)
  function rawName(i) {
    if (mode === 'guest') return String((remote && remote.names && remote.names[i]) || '').trim();
    if (mode === 'host')  return String(i === 0 ? S.myName : peerName).trim();
    return String(i === 0 ? S.names.a : S.names.b).trim();
  }
  const NAME  = i => rawName(i) || (i === 0 ? 'Persona A' : 'Persona B');
  const LABEL = i => NAME(i) + (me() === i ? ' (tú)' : '');

  // ¿Puedo girar / pasar turno / saltar / cambiar categoría? (solo quien pregunta)
  function myTurn(g) {
    if (mode === 'local') return true;
    if (mode === 'host')  return !connected || g.spinner === 0;
    return connected && g.spinner === 1;
  }
  // ¿Puedo elegir la respuesta de un momento especial? (solo quien responde)
  function canReply(g) {
    if (mode === 'local') return true;
    if (mode === 'host')  return !connected || g.spinner === 1;
    return connected && g.spinner === 0;
  }

  // Texto del momento especial, con el nombre de quien responde si lo hay
  function spText(i, answerer) {
    const n = rawName(answerer), t = SPECIALS[i].t;
    return n ? `${n}, ${t}` : t[0].toUpperCase() + t.slice(1);
  }
  function spInfo(g) {
    if (g.special == null || !SPECIALS[g.special]) return null;
    const s = SPECIALS[g.special];
    return { text: spText(g.special, 1 - g.spinner), a: s.a, b: s.b };
  }

  // Lo que se va a mostrar: en 'guest' viene del anfitrión; si no, de esta partida.
  function view() {
    if (mode === 'guest') {
      const r = remote || { game: newGame(), q: null, sp: null, counts: {}, totals: {} };
      return { g: r.game, q: r.q, sp: r.sp, counts: r.counts || {}, totals: r.totals || {} };
    }
    const g = S.game, counts = {}, totals = {};
    Object.keys(CATS).forEach(k => { counts[k] = remainingOf(k).length; totals[k] = poolOf(k).length; });
    return { g, q: getQ(g.current), sp: spInfo(g), counts, totals };
  }

  /* =====================================================================
     8. PINTAR LA PANTALLA
     ---------------------------------------------------------------------
     render() actualiza todo lo visible según el estado actual. Se llama
     después de cualquier cambio.
     ===================================================================== */
  function render() {
    const { g, q, sp, counts, totals } = view();
    const mine = myTurn(g);
    const spinner = g.spinner, answerer = 1 - spinner;
    const c0 = CATS[g.category] ? g.category : 'all';
    const has = !!q || !!sp;
    const cat = q ? catOf(q.c) : sp ? SP : CATS[c0];
    const total = totals[c0] || 0, left = counts[c0] || 0;

    document.documentElement.style.setProperty('--c', cat.color);
    $('#count').textContent = `Restantes: ${left}/${total}`;
    $('#barFill').style.width = total ? ((total - left) / total * 100) + '%' : '0%';
    $('#footer').textContent = `Flowers 🌸 · ${allQs().length} preguntas listas`;
    $('#savedCount').textContent = g.notes.length;
    $('#who').hidden = mode !== 'local';
    renderFilters(counts, mine);
    renderPill();

    // --- qué partes se ven ---
    $('#notes').hidden       = !(q && mine);                       // solo quien pregunta anota
    $('#cardActions').hidden = !q;
    $('#btnSkip').hidden     = !mine;
    $('#spReply').hidden     = !(sp && !g.spDone && canReply(g));  // solo quien responde elige
    $('#spResult').hidden    = !(sp && g.spDone);
    $('#waRow').hidden       = !(has && mine);
    $('#turn').hidden        = !has;
    $('#roleHint').hidden    = !has;

    // --- contenido de la tarjeta ---
    if (sp && !q) {
      $('#badge').textContent = `${SP.emoji} ${SP.label}`;
      $('#question').textContent = sp.text;
      $('#btnYes').textContent = sp.a;
      $('#btnMaybe').textContent = sp.b;
      $('#spResult').textContent = `${NAME(answerer)} respondió: ${g.spAnswer}`;
      $('#turn').textContent = `💌 Responde: ${LABEL(answerer)}`;
      $('#roleHint').textContent = g.spDone
        ? (mine ? 'Listo. Pasen el turno cuando quieran.' : 'Respuesta enviada 💌')
        : (canReply(g) ? (mode === 'local' ? `Elige la respuesta de ${NAME(answerer)}.` : 'Elige tu respuesta.') : `Esperando la respuesta de ${NAME(answerer)}…`);
    } else if (q) {
      $('#badge').textContent = `${cat.emoji} ${cat.label}`;
      $('#question').textContent = q.t;
      $('#turn').textContent = `🎤 ${LABEL(spinner)} pregunta · ${LABEL(answerer)} responde`;
      $('#roleHint').textContent = mine
        ? `Léele la pregunta a ${NAME(answerer)} y anota lo que responda.`
        : `Te toca responder. ${NAME(spinner)} anotará lo que quieras recordar.`;
      $('#labelA').textContent = q.c === 'retos' ? '📝 Cómo les fue (opcional)' : `📝 Lo que respondió ${NAME(answerer)}`;
      const fav = S.favs.some(f => f.id === q.id);
      $('#btnFav').textContent = fav ? '★ Favorita' : '☆ Favorita';
      $('#btnFav').classList.toggle('on', fav);
    } else if (total && !left) {
      $('#badge').textContent = '🎉 Mazo completado';
      $('#question').textContent = 'Han respondido todas las preguntas de esta categoría. Pulsen “Reiniciar mazo” o cambien de categoría.';
    } else {
      $('#badge').textContent = `${CATS[c0].emoji} ${CATS[c0].label}`;
      $('#question').textContent = mine
        ? (mode === 'local'
            ? `Turno de ${NAME(spinner)}: gira la ruleta y hazle la pregunta a ${NAME(answerer)}.`
            : 'Es tu turno: gira la ruleta y hazle la pregunta a tu pareja.')
        : `Turno de ${NAME(spinner)}. Esperen a que gire la ruleta…`;
    }

    // --- botón principal ---
    const btn = $('#btnSpin');
    if (guestWaiting)      { btn.textContent = '⏳ Enviando…';                                   btn.disabled = true; }
    else if (has && mine)  { btn.textContent = `✅ Listo · pasar el turno a ${NAME(answerer)}`;  btn.disabled = false; }
    else if (has)          { btn.textContent = '💬 Te toca responder';                            btn.disabled = true; }
    else if (mine)         { btn.textContent = '🎰 Girar ruleta';                                 btn.disabled = !(total && left); }
    else                   { btn.textContent = `⏳ Turno de ${NAME(spinner)}`;                    btn.disabled = true; }
    if (busy) btn.disabled = true;
  }

  // Botones de categoría, con cuántas preguntas quedan en cada una
  function renderFilters(counts, mine) {
    const g = view().g;
    $('#filters').replaceChildren(...Object.entries(CATS).map(([key, c]) => {
      const b = h('button', {
        class: 'chip' + (g.category === key ? ' active' : '') + (mine ? '' : ' dim'),
        type: 'button',
        onclick: () => act('cat', key)
      }, `${c.emoji} ${c.label}`, h('small', {}, counts[key] ?? 0));
      b.style.setProperty('--c', c.color);
      return b;
    }));
  }

  function renderPill() {
    const p = $('#modePill');
    p.className = 'pill';
    if (mode === 'local') p.textContent = '📱 Un solo teléfono · toca para jugar online';
    else if (connected) { p.textContent = `🌐 Online con ${NAME(1 - me())}`; p.classList.add('on'); }
    else { p.textContent = '⚠️ Sin conexión · toca para reconectar'; p.classList.add('warn'); }
  }

  /* ---------- Animación de la ruleta ---------- */
  function land() {
    const el = $('#question');
    el.classList.remove('land'); void el.offsetWidth; el.classList.add('land');
  }

  // Se llama después de cualquier cambio de estado (propio o recibido).
  // prevSeq = el "seq" que había antes: si cambió, hay pregunta nueva → animar.
  function present(prevSeq) {
    if (busy) return;                       // la animación en curso mostrará lo último
    const { g } = view();
    const has = hasPlay(g);
    if (!has) $('#noteA').value = '';
    if (has && g.seq !== prevSeq) {
      $('#noteA').value = '';
      if (g.current == null) {              // momento especial: sin ruleta, solo aterriza
        render(); land();
        if (S.vibrate && navigator.vibrate) navigator.vibrate([30, 40, 30]);
      } else roll();
    } else render();
  }

  function roll() {
    busy = true;
    const qEl = $('#question');
    qEl.classList.remove('land');
    qEl.classList.add('rolling');
    $('#badge').textContent = '🎰 Girando…';
    ['#notes', '#cardActions', '#spReply', '#waRow', '#turn', '#roleHint', '#spResult'].forEach(s => { $(s).hidden = true; });
    $('#btnSpin').disabled = true;
    const pool = poolOf(view().g.category);
    const ticker = reduced || !pool.length ? null : setInterval(() => {
      qEl.textContent = pool[Math.floor(Math.random() * pool.length)].t;   // textos que pasan rápido
    }, 85);
    setTimeout(() => {
      clearInterval(ticker);
      busy = false;
      qEl.classList.remove('rolling');
      render(); land();
      if (S.vibrate && navigator.vibrate) navigator.vibrate(18);
    }, reduced ? 120 : 900);
  }

  /* =====================================================================
     9. MECÁNICA DEL JUEGO (el "motor")
     ---------------------------------------------------------------------
     Estas funciones solo se ejecutan en 'local' y 'host'. Cuando eres
     'guest', tus acciones viajan al anfitrión y él las ejecuta.
     Acciones posibles (a):
       'spin'  → girar: saca una pregunta (o un momento especial)
       'skip'  → "otra pregunta": la actual vuelve al mazo y sale otra
       'pass'  → listo: guarda la nota y el turno pasa a la otra persona
       'cat'   → cambiar de categoría (v = clave de categoría)
       'reply' → elegir respuesta del momento especial (v = 'a' o 'b')
     ===================================================================== */
  function commitNote(text) {
    const g = S.game, q = getQ(g.current);
    if (!q || !text) return;
    g.notes.unshift({ id: uid(), qid: q.id, q: q.t, c: q.c, a: text, an: NAME(1 - g.spinner), ts: Date.now() });
  }

  function pickQuestion(excludeId) {
    const g = S.game;
    let rem = remainingOf(g.category).filter(q => q.id !== excludeId);
    if (!rem.length && excludeId && remainingOf(g.category).some(q => q.id === excludeId)) rem = remainingOf(g.category);
    if (!rem.length) { g.current = null; return; }
    const pick = rem[Math.floor(Math.random() * rem.length)];   // ← elección al azar
    g.used.push(pick.id);                                        // ← "ya salió": desaparece del mazo
    g.current = pick.id;
    g.since++;
    g.seq++;
  }

  function engSpin(excludeId) {
    const g = S.game;
    if (S.specials && g.since >= 3 && excludeId == null) {       // toca un momento especial
      g.special = g.spIdx % SPECIALS.length;
      g.spIdx++; g.since = 0; g.current = null; g.spDone = false; g.spAnswer = ''; g.seq++;
      return;
    }
    g.special = null;
    pickQuestion(excludeId);
  }

  function eng(a, v, note) {
    const g = S.game;
    if (a === 'spin') {
      if (hasPlay(g)) return;
      engSpin(null);
    } else if (a === 'skip') {
      if (!g.current) return;
      commitNote(note);
      const id = g.current;
      g.used = g.used.filter(x => x !== id);   // vuelve al mazo para más tarde
      g.since = Math.max(0, g.since - 1);
      g.current = null;
      engSpin(id);
    } else if (a === 'pass') {
      if (!hasPlay(g)) return;
      commitNote(note);
      g.current = null; g.special = null; g.spDone = false; g.spAnswer = '';
      g.spinner = 1 - g.spinner;               // ← los papeles se intercambian
    } else if (a === 'cat') {
      if (!CATS[v]) return;
      commitNote(note);
      g.category = v; g.current = null; g.special = null; g.spDone = false;
    } else if (a === 'reply') {
      if (g.special == null || g.spDone || (v !== 'a' && v !== 'b')) return;
      const s = SPECIALS[g.special], answerer = 1 - g.spinner;
      g.notes.unshift({ id: uid(), q: spText(g.special, answerer), c: 'especial', a: s[v], an: NAME(answerer), ts: Date.now() });
      g.spDone = true; g.spAnswer = s[v];
    }
  }

  function readNote() { return $('#notes').hidden ? '' : $('#noteA').value.trim().slice(0, 500); }

  function afterChange(prev) { save(); if (mode === 'host') pushState(); present(prev); }

  // Punto de entrada de TODAS las acciones del jugador (botones de la pantalla)
  function act(a, v) {
    if (busy) return;
    const { g } = view();
    const allowed = a === 'reply' ? canReply(g) : myTurn(g);
    if (!allowed) return toast(mode !== 'local' && !connected ? 'Sin conexión' : 'No es tu turno');
    const note = (a === 'spin' || a === 'reply') ? '' : readNote();

    if (mode === 'guest') {                      // el anfitrión ejecuta y nos devuelve el estado
      send({ k: 'act', a, v, note });
      guestWaiting = true; render();
      setTimeout(() => { if (guestWaiting) { guestWaiting = false; render(); } }, 5000);
      return;
    }
    const prev = S.game.seq;
    eng(a, v, note);
    afterChange(prev);
  }

  function resetDeck() {
    if (mode === 'guest') return toast('Solo quien creó la sala puede reiniciar el mazo');
    if (busy) return;
    const g = S.game, ids = new Set(poolOf(g.category).map(q => q.id));
    g.used = g.used.filter(id => !ids.has(id));
    g.current = null; g.special = null; g.since = 0; g.spDone = false;
    afterChange(g.seq);
    toast('Mazo reiniciado');
  }

  function toggleFav() {
    const q = view().q; if (!q) return;
    S.favs = S.favs.some(f => f.id === q.id) ? S.favs.filter(f => f.id !== q.id) : S.favs.concat({ id: q.id, c: q.c, t: q.t });
    save(); render();
  }

  /* =====================================================================
     10. VENTANA DE RECUERDOS (Respuestas / Favoritas / Vistas)
     ===================================================================== */
  let tab = 'notes';

  function renderHistory() {
    const list = $('#histList');
    const { g } = view();
    const canEdit = mode !== 'guest';
    ['notes', 'favs', 'seen'].forEach(t => $('#tab' + t[0].toUpperCase() + t.slice(1)).classList.toggle('active', tab === t));
    $('#histFoot').hidden = tab !== 'notes';
    $('#btnClear').hidden = !canEdit;

    if (tab === 'notes') {
      if (!g.notes.length) return list.replaceChildren(h('p', { class: 'empty' }, 'Aún no hay respuestas guardadas. Cuando quien pregunta anote algo y pase el turno, aparecerá aquí.'));
      list.replaceChildren(...g.notes.map(n => {
        const c = catOf(n.c);
        const el = h('div', { class: 'entry' },
          h('div', { class: 'entry-top' },
            h('span', {}, `${c.emoji} ${c.label}`), h('span', { class: 'sp' }), h('span', {}, fmt(n.ts)),
            canEdit ? h('button', { class: 'x', type: 'button', 'aria-label': 'Eliminar nota', onclick: () => delNote(n.id) }, '✕') : null),
          h('p', { class: 'entry-q' }, n.q),
          n.a ? h('p', { class: 'entry-a' }, h('b', {}, (n.an || 'Respuesta') + ': '), n.a) : null,
          n.b ? h('p', { class: 'entry-a' }, h('b', {}, (n.bn || 'Respuesta') + ': '), n.b) : null);   // (notas de la versión anterior)
        el.style.setProperty('--c', c.color);
        return el;
      }));
    } else if (tab === 'favs') {
      if (!S.favs.length) return list.replaceChildren(h('p', { class: 'empty' }, 'Marquen con ☆ las preguntas que quieran repetir en otra cita.'));
      list.replaceChildren(...S.favs.map(q => {
        const c = catOf(q.c);
        const el = h('div', { class: 'entry' },
          h('div', { class: 'entry-top' }, h('span', {}, `${c.emoji} ${c.label}`), h('span', { class: 'sp' }),
            h('button', { class: 'x', type: 'button', title: 'Enviar por WhatsApp', onclick: () => sendWA(qMsg(q)) }, '📲'),
            h('button', { class: 'x', type: 'button', 'aria-label': 'Quitar de favoritas', onclick: () => { S.favs = S.favs.filter(f => f.id !== q.id); save(); render(); renderHistory(); } }, '✕')),
          h('p', { class: 'entry-q' }, q.t));
        el.style.setProperty('--c', c.color);
        return el;
      }));
    } else {
      // Preguntas que ya salieron en esta partida (la más reciente arriba)
      const seen = g.used.slice().reverse().map(id => (getQ(id) || (view().q && view().q.id === id ? view().q : null))).filter(Boolean);
      if (!seen.length) return list.replaceChildren(h('p', { class: 'empty' }, 'Todavía no ha salido ninguna pregunta en esta partida.'));
      list.replaceChildren(h('p', { class: 'empty', style: 'padding:0 0 4px' }, `${g.used.length} preguntas ya salieron y no se repetirán.`),
        ...seen.map(q => {
          const c = catOf(q.c);
          const el = h('div', { class: 'entry' }, h('div', { class: 'entry-top' }, h('span', {}, `${c.emoji} ${c.label}`)), h('p', { class: 'entry-q' }, q.t));
          el.style.setProperty('--c', c.color);
          return el;
        }));
    }
  }

  function delNote(id) {
    S.game.notes = S.game.notes.filter(n => n.id !== id);
    save(); if (mode === 'host') pushState(); render(); renderHistory();
  }

  async function clearNotes() {
    if (mode === 'guest' || !S.game.notes.length) return;
    if (await ask('¿Borrar todas las respuestas anotadas de esta partida? No se puede deshacer.', 'Borrar notas')) {
      S.game.notes = []; save(); if (mode === 'host') pushState(); render(); renderHistory();
      toast('Notas borradas');
    }
  }

  const notesText = () => {
    const { g } = view();
    return `Flowers 🌸 · ${new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })}\n` +
      g.notes.slice().reverse().map(n =>
        `\n[${catOf(n.c).label}] ${n.q}` + (n.a ? `\n  ${n.an || 'Respuesta'}: ${n.a}` : '') + (n.b ? `\n  ${n.bn || 'Respuesta'}: ${n.b}` : '')
      ).join('\n');
  };
  const copyNotes = () => view().g.notes.length ? copyText(notesText(), '📋 Notas copiadas') : toast('No hay notas para copiar');

  /* ---------- WhatsApp ---------- */
  // Abre wa.me con el texto listo; si el navegador bloquea la ventana, copia el texto para pegarlo.
  function sendWA(text) {
    let w = null;
    try { w = window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank'); if (w) w.opener = null; } catch {}
    if (!w) copyText(text, 'Texto copiado 📋 Pégalo en WhatsApp');
  }
  const qMsg = q => {
    const g = view().g, n = rawName(1 - g.spinner), c = catOf(q.c);
    return `${n ? `Hola ${n} 🌸` : '🌸 Flowers'}\n\n*${c.emoji} ${c.label}*\n${q.t}\n\n¿Me respondes? 😊`;
  };
  function shareCurrent() {
    const { q, sp } = view();
    if (q) sendWA(qMsg(q)); else if (sp) sendWA(`💌 ${sp.text}`);
  }
  const shareNotes = () => view().g.notes.length ? sendWA(notesText()) : toast('No hay notas para enviar');

  /* =====================================================================
     11. PARTIDAS GUARDADAS
     ---------------------------------------------------------------------
     Una "partida" es una copia (foto) de S.game: preguntas vistas,
     categoría, notas y turno. Se puede guardar con un nombre, actualizar,
     cargar más tarde o borrar. Además, la partida actual SIEMPRE se
     guarda sola: si cierras la página y vuelves, sigues donde lo dejaste.
     (En modo online solo quien creó la sala maneja las partidas.)
     ===================================================================== */
  const defaultGameName = () => 'Cita ' + new Date().toLocaleDateString('es', { day: 'numeric', month: 'short' });

  function openGames() {
    if (mode === 'guest') return toast('Las partidas las maneja quien creó la sala');
    $('#gameName').value = defaultGameName();
    renderGames();
    $('#dlgGames').showModal();
  }

  function renderGames() {
    const box = $('#gamesList');
    if (!S.saves.length) return box.replaceChildren(h('p', { class: 'empty', style: 'padding:8px 0' }, 'Aún no hay partidas guardadas.'));
    box.replaceChildren(...S.saves.map(s => h('div', { class: 'entry', style: '--c:#8b5cf6' },
      h('div', { class: 'entry-top' }, h('span', {}, fmt(s.ts)), h('span', { class: 'sp' }),
        h('button', { class: 'x', type: 'button', 'aria-label': 'Borrar partida', onclick: () => deleteGame(s.id) }, '✕')),
      h('p', { class: 'entry-q' }, s.name),
      h('p', { class: 'entry-a' }, `${s.game.used.length} preguntas vistas · ${s.game.notes.length} notas`),
      h('div', { class: 'entry-actions' },
        h('button', { class: 'btn-sub', type: 'button', onclick: () => loadGame(s.id) }, '▶ Cargar'),
        h('button', { class: 'btn-sub', type: 'button', onclick: () => updateGame(s.id) }, '🔄 Actualizar')))));
  }

  function saveGame() {
    S.saves.unshift({ id: uid(), name: $('#gameName').value.trim() || defaultGameName(), ts: Date.now(), game: clone(S.game) });
    save(); renderGames(); toast('💾 Partida guardada');
  }

  async function updateGame(id) {
    const s = S.saves.find(x => x.id === id); if (!s) return;
    if (!await ask(`¿Reemplazar “${s.name}” con la partida actual?`, 'Reemplazar')) return;
    s.game = clone(S.game); s.ts = Date.now();
    save(); renderGames(); toast('Partida actualizada');
  }

  async function loadGame(id) {
    const s = S.saves.find(x => x.id === id); if (!s) return;
    if (!await ask(`Cargar “${s.name}” reemplazará la partida actual. Si quieres conservarla, guárdala antes.`, 'Cargar')) return;
    S.game = Object.assign(newGame(), clone(s.game));
    if (!CATS[S.game.category]) S.game.category = 'all';
    S.game.seq = (S.game.seq || 0) + 1;
    $('#noteA').value = '';
    save(); if (mode === 'host') pushState(); render();
    $('#dlgGames').close(); toast('Partida cargada');
  }

  async function deleteGame(id) {
    const s = S.saves.find(x => x.id === id); if (!s) return;
    if (!await ask(`¿Borrar la partida “${s.name}”?`, 'Borrar')) return;
    S.saves = S.saves.filter(x => x.id !== id);
    save(); renderGames();
  }

  async function startNewGame() {
    if (!await ask('Se borrarán las preguntas vistas y las notas de la partida actual (las partidas ya guardadas no se tocan). ¿Empezar de cero?', 'Empezar de cero')) return;
    S.game = newGame(S.game.category);
    S.game.seq = 1000 + Math.floor(Math.random() * 1000);
    $('#noteA').value = '';
    save(); if (mode === 'host') pushState(); render();
    $('#dlgGames').close(); toast('Partida nueva');
  }

  /* =====================================================================
     12. AJUSTES Y PREGUNTAS PROPIAS
     ===================================================================== */
  function openSettings() {
    $('#optSpecial').checked = S.specials; $('#optVibrate').checked = S.vibrate;
    $('#turnOn').checked = !!S.turn.on;
    $('#turnUrls').value = (S.turn.urls || []).join('\n');
    $('#turnUser').value = S.turn.user || '';
    $('#turnPass').value = S.turn.pass || '';
    $('#netServers').textContent = iceLabel();
    $('#customCat').replaceChildren(...Object.entries(CATS).filter(([k]) => k !== 'all')
      .map(([k, c]) => h('option', { value: k }, `${c.emoji} ${c.label}`)));
    renderCustom();
    $('#dlgSettings').showModal();
  }

  // Guarda las credenciales de TURN propio a medida que se escriben, y
  // avisa si quedan a medio completar (por ejemplo, URLs sin usuario).
  function readTurn() {
    S.turn.on = $('#turnOn').checked;
    S.turn.urls = $('#turnUrls').value.split('\n').map(s => s.trim()).filter(Boolean);
    S.turn.user = $('#turnUser').value.trim();
    S.turn.pass = $('#turnPass').value;
    save();
    $('#netServers').textContent = iceLabel();
    const n = S.turn.urls.length;
    $('#netServers').style.color = (S.turn.on && !n) ? '#f87171' : '';
  }

  function renderCustom() {
    $('#customList').replaceChildren(...S.custom.map(q => {
      const c = catOf(q.c);
      return h('div', { class: 'entry', style: `--c:${c.color}` },
        h('div', { class: 'entry-top' }, h('span', {}, `${c.emoji} ${c.label}`), h('span', { class: 'sp' }),
          h('button', { class: 'x', type: 'button', 'aria-label': 'Eliminar pregunta', onclick: () => delCustom(q.id) }, '✕')),
        h('p', { class: 'entry-q' }, q.t));
    }));
  }

  function addCustom() {
    const t = $('#customText').value.trim();
    if (t.length < 5) return toast('Escribe una pregunta un poco más larga');
    S.custom.push({ id: 'u' + uid(), c: $('#customCat').value, t });
    $('#customText').value = '';
    save(); if (mode === 'host') pushState(); render(); renderCustom();
    toast('Pregunta añadida al mazo');
  }

  function delCustom(id) {
    S.custom = S.custom.filter(q => q.id !== id);
    S.game.used = S.game.used.filter(x => x !== id);
    S.favs = S.favs.filter(f => f.id !== id);
    if (S.game.current === id) S.game.current = null;
    save(); if (mode === 'host') pushState(); render(); renderCustom();
  }

  /* =====================================================================
     13. MODO ONLINE (2 personas, cada una en su teléfono)
     ---------------------------------------------------------------------
     Cómo funciona, en simple:
       • Usa WebRTC: los dos teléfonos se conectan DIRECTAMENTE entre sí.
         No hay servidor propio, ni cuentas, ni base de datos. Lo que
         escriben viaja solo entre los dos.
       • Para conectarse hay que intercambiar dos códigos (uno de ida y
         otro de vuelta) por WhatsApp, SMS, etc. Solo se hace una vez por
         sesión.
       • Quien CREA la sala (host) lleva la partida y manda el estado a la
         otra persona (guest). El guest envía sus acciones al host.
       • Se usan servidores públicos de Google/Cloudflare (STUN) para que
         los teléfonos se "encuentren", y de respaldo unos servidores TURN
         públicos y gratuitos (OpenRelay) por si la conexión directa no es
         posible (esto es lo más frecuente: la mayoría de redes móviles
         usan NAT compartido entre muchos clientes —"CGNAT"— y ahí STUN
         solo no alcanza; el TURN sirve de intermediario para el tráfico,
         SIN poder leerlo, porque va cifrado de punta a punta).
       • Al ser un TURN público y gratuito, puede ser algo más lento o
         fallar si está saturado. Si la conexión no se logra tras un
         minuto, prueben otra vez (a veces basta con reintentar) o
         cambien de red (datos móviles ↔ WiFi).
       • Esto también significa que GitHub Pages NO es el problema: es
         una página estática y WebRTC funciona igual ahí que en cualquier
         otro sitio con HTTPS. Lo que suele fallar es la red de alguno de
         los dos teléfonos, no dónde está alojado el archivo.

     Mensajes que viajan por el canal (JSON):
       { k:'hello', name }              → "hola, me llamo…"
       { k:'state', s:{…} }             → (host → guest) estado completo
       { k:'act', a, v, note }          → (guest → host) una acción
      ===================================================================== */

     /* =====================================================================
        SERVIDORES ICE (STUN y TURN)  ←←← AQUÍ SE CONFIGURAN
     ---------------------------------------------------------------------
     POR QUÉ ESTO IMPORTA MÁS DE LO QUE PARECE
     Cuando los dos están en el MISMO wifi, los navegadores se encuentran
     solos y ni siquiera hace falta STUN. Por eso el juego "funcionaba
     bien" en las pruebas de a una persona. Pero si cada uno está en una
     red distinta (datos móviles en ciudades diferentes), los dos están
     detrás de un NAT compartido (CGNAT) y NO existe ruta directa: hace
     falta un TURN que reenvíe el tráfico. Sin un TURN que funcione, la
     conexión entre redes distintas es imposible, por más código que
     tenga el juego.

     CÓMO PROBAR SI TU RED ESTÁ LISTA
     En ⚙️ Ajustes → "🔍 Probar conexión" (o en la ventana 🌐). Se ve si
     aparece un candidato de tipo "relay" (= hay TURN y todo bien) o solo
     "host/srflx" (= tu red necesita TURN y no encontró uno).

     SI NO APARECE "relay": PEGÁ TUS PROPIAS CREDENCIALES
     Un TURN propio es la única forma de garantizarlo. Se pega en
     ⚙️ Ajustes → "Servidor TURN propio" (queda guardado en el navegador
     y tiene prioridad sobre todo lo de abajo). Se consigue gratis con:
       • Un VPS propio: docker run -d --network=host coturn/coturn ...
         (es la opción más fiable; ver README)
       • Una cuenta gratuita en un proveedor de TURN, que te da una URL,
         un usuario y una contraseña.
     Las URLs se escriben una por línea, por ejemplo:
         turn:mi.turn.com:3478
         turn:mi.turn.com:3478?transport=tcp
         turns:mi.turn.com:5349

     NOTA SOBRE LOS PÚBLICOS DE ABAJO
     No hay ningún TURN público que sea confiable: se caen, se saturan y
     varios ya no acceptan las credenciales fijas. OpenRelay fue el
     clásico y hoy figura como no funcional en varios reportes, por eso
     queda al final y comentado como "por si acaso". No confíes en él:
     si el autodiagnóstico no muestra "relay", usa el tuyo.
     ===================================================================== */
  const STUN_PUBLICOS = [
    'stun:stun.l.google.com:19302',
    'stun:stun1.l.google.com:19302',
    'stun:stun.cloudflare.com:3478'
  ];
  const TURN_PUBLICOS = [
    // Última instancia, no debería hacer falta si pegaste uno propio.
    { urls: ['turn:openrelay.metered.ca:80', 'turn:openrelay.metered.ca:443', 'turn:openrelay.metered.ca:443?transport=tcp'],
      username: 'openrelayproject', credential: 'openrelayproject' }
  ];

  // Arma la lista de servidores. Las credenciales propias van PRIMERO:
  // si el usuario pegó un TURN, es el que va a responder y el resto es
  // solo de apoyo para cuando las dos redes son permisivas.
  function iceServers() {
    const list = [];
    const own = S.turn || {};
    const urls = (own.urls || []).map(s => String(s).trim()).filter(Boolean);
    if (own.on && urls.length) {
      list.push({ urls, username: (own.user || '').trim() || undefined, credential: (own.pass || '') || undefined });
    }
    STUN_PUBLICOS.forEach(u => list.push({ urls: u }));
    TURN_PUBLICOS.forEach(t => list.push(t));
    return list;
  }
  // Texto corto para la lista de servidores (sirve para diagnóstico).
  const iceLabel = () => {
    const own = (S.turn || {}), n = (own.urls || []).filter(s => String(s).trim()).length;
    return (own.on && n) ? `TURN propio (${n} URL)` : 'solo servidores públicos';
  };
  const ICE = () => ({ iceServers: iceServers() });

  let pc = null, dc = null, pairRole = null, pairView = 'none';   // pairView: 'none' | 'host' | 'join'
  let watchdog = null;                                             // avisa si la conexión tarda demasiado
  let lastConnectError = '';                                       // se muestra en la ventana aunque el aviso ya se haya desvanecido
  let pendingFail = false;        // (guest) falló el enlace esperando la respuesta: NO se destruye
  const ACTIONS = ['spin', 'skip', 'pass', 'cat', 'reply'];

  /* ---------- Códigos de conexión (texto corto para copiar y pegar) ---------- */
  const toB64u = bytes => { let s = ''; bytes.forEach(b => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const fromB64u = str => { const b = atob(str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4)); return Uint8Array.from(b, c => c.charCodeAt(0)); };
  async function pipeBytes(bytes, stream) { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer()); }

  // La descripción de conexión (SDP) se comprime para que el código sea más corto.
  async function encodeDesc(d) {
    const bytes = new TextEncoder().encode(JSON.stringify({ t: d.type, s: d.sdp }));
    if ('CompressionStream' in window) return 'CC1z' + toB64u(await pipeBytes(bytes, new CompressionStream('deflate-raw')));
    return 'CC1p' + toB64u(bytes);
  }
  async function decodeDesc(raw) {
    // Se quitan los espacios y saltos de línea ANTES de buscar el código:
    // si el chat (WhatsApp sobre todo) parte el texto en varios renglones,
    // el patrón no entraba y el error era "Ese no parece un código".
    const clean = String(raw || '').replace(/\s+/g, '');
    const m = clean.match(/CC1[zp][A-Za-z0-9_-]+/);   // tolera texto extra alrededor del código
    if (!m) throw new Error('Ese no parece un código de Flowers');
    const mode = m[0][3], bytes = fromB64u(m[0].slice(4));
    let out = bytes;
    if (mode === 'z') {
      if (!('DecompressionStream' in window)) throw new Error('Tu navegador no puede leer este código');
      out = await pipeBytes(bytes, new DecompressionStream('deflate-raw'));
    }
    const o = JSON.parse(new TextDecoder().decode(out));
    if (!o || !o.s || !/a=candidate:/.test(o.s)) {
      // Un SDP sin candidatos no sirve para nada: es mejor avisar que
      // mandar un código que el otro no va a poder usar.
      throw new Error('El código llegó sin datos de conexión. Genera uno nuevo.');
    }
    return { type: o.t, sdp: o.s };
  }

  /* ---------- Conexión ---------- */
  function closePeer() {
    if (dc) { dc.onclose = null; dc.onmessage = null; try { dc.close(); } catch {} }
    if (pc) {
      pc.onconnectionstatechange = null; pc.oniceconnectionstatechange = null;
      pc.onicecandidate = null;
      try { pc.close(); } catch {}
    }
    dc = pc = null;
  }

  // Traduce una línea de candidato ICE a su tipo (host/srflx/prflx/relay).
  // El navegador lo dice de dos formas según el motor: "typ relay" o
  // "relay raddr…", así que se buscan las dos.
  const candType = line => {
    const m = /\styp(e)?\s+(host|srflx|prflx|relay)\b/i.exec(line || '')
         || /\b(host|srflx|prflx|relay)\s+(raddr|rport)/i.exec(line || '');
    return m ? (m[2] || m[1]).toLowerCase() : null;
  };

  // Traduce una lista de candidatos a algo legible, para saber si esta red
  // tiene arreglo sin TURN o si de verdad necesita el relay.
  const candText = info => {
    const t = [];
    if (info.host) t.push('red local');
    if (info.srflx) t.push('pública/STUN');
    if (info.relay) t.push('relay/TURN ✅');
    return t.length ? t.join(' · ') : 'ninguna';
  };
  // Si estamos en una red que necesita TURN y no lo encontró, el error
  // honesto es "no hay relay", no "revisa la VPN".
  const noRelayMsg = () => 'No se encontró ningún relay (TURN). Esta red lo necesita para hablar con la otra: agrega un TURN propio en ⚙️ Ajustes.';

  // Vuelca los candidatos a la consola, para poder revisar un fallo sin
  // depender de lo que se vea en pantalla.
  function logCands(who, info) {
    console.log(`[Flowers] ${who} · rutas: ${candText(info)} · ${info.n} candidato(s) · completo=${!!info.full} · ${iceLabel()}`);
  }

  function newPeer() {
    closePeer();
    pc = new RTCPeerConnection(ICE());
    pc.onconnectionstatechange = () => {
      const st = pc && pc.connectionState;
      if (st === 'connected') clearWatchdog();
      if (st === 'failed') onConnectFailed();
      else if (st === 'closed') onDisconnected();
      else if (st === 'disconnected') { renderPill(); }
    };
    // Traduce el estado técnico de la conexión a un mensaje que SIEMPRE
    // se ve en pantalla (no solo un aviso que desaparece a los segundos),
    // para que nunca parezca que "no pasa nada" mientras conecta o falla.
    // Se usa iceConnectionState (no solo connectionState) porque es el
    // que más navegadores reportan de forma confiable.
    pc.oniceconnectionstatechange = () => {
      const s = pc && pc.iceConnectionState;
      const t = { checking: '🔎 Buscando la mejor ruta de conexión…', connected: '✅ ¡Conectado!', completed: '✅ ¡Conectado!',
                  disconnected: '⚠️ Conexión inestable…',
                  failed: '❌ Error de enlace: no se pudo conectar entre estas dos redes' }[s];
      if (t) setPairStatus(t);
      if (s === 'failed') onConnectFailed();
    };
    return pc;
  }

  // Escribe en la línea de estado visible del paso que esté abierto ahora
  // (no depende de un "toast" temporal, así que no se puede pasar por alto).
  function setPairStatus(msg) {
    const id = !$('#pairHost').hidden ? '#pairHostStatus' : (!$('#pairJoin').hidden ? '#pairJoinStatus' : null);
    if (id) $(id).textContent = msg;
  }

  // Vigila que el emparejamiento SIEMPRE termine en algo visible, pero SOLO
  // mientras se está conectando de verdad (después de pegar la respuesta).
  // Antes de eso se está esperando que una persona mande un código por
  // chat, y eso puede tardar minutos: si se destruía la sala a los 45 s,
  // el otro nunca alcanzaba a pegar su respuesta.
  //  · a los 40s, un aviso de que está tardando
  //  · a los 75s, se da por perdido y se ofrece reintentar
  function armWatchdog() {
    clearWatchdog();
    watchdog = setTimeout(() => {
      if (connected) return;
      const m = '⏳ Sigue buscando una ruta entre las dos redes. Si hace mucho, revisen que los dos tengan internet y sin VPN.';
      toast(m); setPairStatus(m);
      watchdog = setTimeout(() => { if (!connected) onConnectFailed(); }, 35000);
    }, 40000);
  }
  function clearWatchdog() { if (watchdog) { clearTimeout(watchdog); watchdog = null; } }

  // La conexión se perdió o nunca se logró. Ahora es RECUPERABLE: no borra
  // lo que la persona ya escribió ni la devuelve al inicio, solo avisa y
  // deja el botón de reintentar. Antes cualquier fallo (incluso un simple
  // saldo de WhatsApp lento) borraba los cuatro campos y obligaba a
  // empezar de cero, que es la forma más rápida de que alguien se rinda.
  function onConnectFailed() {
    // Caso especial: el invitado ya generó su respuesta y está esperando
    // que el anfitrión pegue el código. Si ICE falla mientras espera, NO se
    // destruye nada: cuando el anfitrión aplique la respuesta se relanzan
    // las comprobaciones y suele recuperarse solo.
    if (pairRole === 'guest' && pairView === 'join' && !connected) {
      if (pendingFail) return;
      pendingFail = true;
      setPairStatus('⏳ Tu red no encontró ruta todavía. Cuando tu pareja pegue su código se reintenta solo; si no funciona, generen códigos nuevos.');
      return;
    }
    clearWatchdog();
    const wasConnected = connected;
    closePeer();
    connected = false; remote = null; guestWaiting = false; pendingFail = false;
    const msg = wasConnected
      ? '⚠️ Se perdió la conexión. Usen “Reintentar” para volver a enlazar.'
      : '❌ No se logró conectar entre estas dos redes. Usen “Reintentar” para probar de nuevo.';
    toast(msg);
    lastConnectError = msg;
    if (!wasConnected) { mode = 'local'; pairRole = null; }   // el paso sigue abierto para reintentar
    syncNetUI(); render();
  }

  // Reintentar el paso donde se quedó, sin perder nada de lo escrito.
  // En el caso del anfitrión hay que generar un código nuevo: el otro
  // teléfono ya respondió al código anterior, así que ese no sirve más.
  function retryPair() {
    if (pairView === 'host') {
      hostCreate().then(() => {
        if ($('#offerOut').value) $('#pairHostStatus').textContent = '🔁 Código nuevo generado. Mándaselo otra vez a tu pareja y pega su respuesta nueva.';
      });
      return;
    }
    if (pairView === 'join') { pendingFail = false; $('#btnMakeAnswer').disabled = false; return guestAnswer(); }
  }

  // Los dos paneles (crear sala / unirse) tienen su propio botón de reintento.
  const setRetryVisible = v => { $('#btnRetry').hidden = !v; $('#btnRetry2').hidden = !v; };

  function attachChannel(ch) {
    dc = ch;
    const open = () => { if (ch._opened) return; ch._opened = true; onChannelOpen(); };
    ch.onopen = open;
    ch.onclose = () => onDisconnected();
    ch.onmessage = e => onMessage(e.data);
    if (ch.readyState === 'open') open();          // algunos navegadores lo entregan ya abierto
  }

  /* ---------- Reunir los candidatos (el paso que más fallaba) ----------
     Se cambió por completo la forma de esperar. Antes se cortaba a los 7 s
     fijos y se mandaba el SDP como estaba, aunque le faltara el candidato
     de TURN: en redes distintas ese candidato es el ÚNICO que sirve, así
     que el otro teléfono se quedaba sin datos para conectar.

     Ahora:
       · se escucha 'icecandidate' y se termina con candidate === null
         (que es el fin real de la recolección, y a veces 'complete'
          directamente no se dispara);
       · si aparece un candidato 'relay' se resuelve EN EL ACTO, sin
         esperar al resto: con un relay ya es posible conectar y seguir
         esperando solo hace perder segundos;
       · el límite es de 20 s (con TURN de por medio puede tardar bastante)
         y al cumplirse se avisa, en vez de cortar en silencio.
     Devuelve qué tipos de candidato se reunieron, para poder mostrarlos. */
  function waitIce(peer, ms = 20000) {
    const info = { host: false, srflx: false, prflx: false, relay: false, n: 0, full: false };
    return new Promise(res => {
      if (peer.iceGatheringState === 'complete') { info.full = true; return res(info); }
      let t = null, slowT = null;
      const cleanup = () => {
        clearTimeout(t); clearTimeout(slowT);
        peer.removeEventListener('icecandidate', onCand);
        peer.removeEventListener('icegatheringstatechange', onState);
      };
      const done = full => { cleanup(); info.full = !!full; res(info); };
      const onCand = e => {
        if (!e.candidate) return done(true);            // fin de la recolección
        info.n++;
        const ty = candType(e.candidate.candidate);
        if (ty && ty in info) info[ty] = true;
        if (info.relay) done(false);                    // ya hay relay: no hace falta esperar
      };
      const onState = () => { if (peer.iceGatheringState === 'complete') done(true); };
      peer.addEventListener('icecandidate', onCand);
      peer.addEventListener('icegatheringstatechange', onState);
      // A los 12 s todavía no terminó, se avisa que sigue buscando.
      slowT = setTimeout(() => {
        if (!info.full) setPairStatus('⏳ Todavía buscando rutas… si tu red pide TURN puede tardar. Si no aparece "relay", hace falta un TURN propio (⚙️ Ajustes).');
      }, 12000);
      t = setTimeout(() => done(false), ms);
    });
  }

  const rtcOk = () => { if (!window.RTCPeerConnection) { toast('Este navegador no soporta el modo online'); return false; } return true; };

  /* ---------- Autodiagnóstico: ¿esta red puede conectarse? ----------
     Sirve para probar el modo online SOLO, sin esperar a la otra persona.
     Reúne candidatos y los muestra:
       · "relay" presente  → hay TURN, debería conectar entre redes.
       · solo host/srflx   → en la misma red va, entre redes distintas no.
     Es la forma rápida de saber si el problema es el juego o la red. */
  async function testConnection(box) {
    if (!window.RTCPeerConnection) { box.textContent = '❌ Este navegador no soporta WebRTC.'; return; }
    const testPc = new RTCPeerConnection(ICE());
    box.textContent = `⏳ Buscando rutas (${iceLabel()})…`;
    const info = { host: false, srflx: false, prflx: false, relay: false, n: 0, full: false };
    const seen = [];
    testPc.onicecandidate = e => {
      if (!e.candidate) return;
      const ty = candType(e.candidate.candidate) || '?';
      seen.push(ty);
      info.n++;
      if (ty in info) info[ty] = true;
      box.textContent = `⏳ Buscando rutas… ${info.n} candidata(s), sin relay todavía`;
    };
    try {
      // La recolección de candidatos arranca al aplicar una descripción
      // local, así que hay que crear un canal y aplicar un offer de verdad.
      testPc.createDataChannel('test');
      await testPc.setLocalDescription(await testPc.createOffer());
    } catch (e) {
      try { testPc.close(); } catch {}
      box.textContent = '❌ No se pudo probar: ' + (e.message || e);
      return;
    }
    const res = await waitIce(testPc, 15000);
    Object.assign(info, res);
    try { testPc.close(); } catch {}
    logCands('test', info);
    const relay = info.relay;
    box.innerHTML = '';
    box.append(
      h('b', {}, relay ? '✅ Esta red puede conectarse' : '⚠️ Esta red NO puede conectarse a otra red distinta'),
      h('br'),
      h('span', {}, `Rutas encontradas: ${candText(info)} (${info.n} candidatas). Servidores: ${iceLabel()}.`)
    );
    if (relay) {
      box.append(h('br'), h('span', {}, 'Tienes relay de TURN, así que el modo online debería funcionar entre redes diferentes.'));
    } else {
      box.append(h('br'), h('span', {}, noRelayMsg() + ' Mientras tanto, el modo de un solo teléfono funciona igual.'));
    }
    seen.forEach((t, i) => console.log(`[Flowers] test · candidato ${i + 1}: ${t}`));
  }

  // Texto de estado al terminar de reunir candidatos: dice si se consiguió
  // un relay, que es LA diferencia entre "va a funcionar" y "no va a".
  function gatheredMsg(info, nextStep) {
    const got = candText(info);
    const relay = info.relay
      ? 'Rutas: ' + got + ' ✅'
      : 'Rutas: ' + got + ' ⚠️ sin relay';
    return relay + ' · ' + nextStep;
  }

  // PASO A (quien crea la sala): generar el código de invitación
  async function hostCreate() {
    if (!rtcOk()) return;
    lastConnectError = '';
    S.myName = $('#myName').value.trim(); save();
    pairView = 'host'; pairRole = 'host'; pendingFail = false; syncNetUI();
    $('#offerOut').value = ''; $('#answerIn').value = '';
    setRetryVisible(false);
    $('#pairHostStatus').textContent = '⏳ Generando tu código…';
    try {
      const peer = newPeer();
      attachChannel(peer.createDataChannel('flowers'));
      await peer.setLocalDescription(await peer.createOffer());
      const info = await waitIce(peer);
      logCands('host', info);
      $('#offerOut').value = await encodeDesc(peer.localDescription);
      // NO se arma el watchdog acá: a partir de este punto se espera a que
      // una persona mande un código por chat, y eso puede tardar lo que sea.
      $('#pairHostStatus').textContent = gatheredMsg(info, 'envía el código de arriba a tu pareja');
    } catch (e) { toast('No se pudo crear la sala: ' + (e.message || e)); $('#pairHostStatus').textContent = '❌ ' + (e.message || e); }
  }

  // PASO B (quien se une): pegar la invitación y generar el código de respuesta
  async function guestAnswer() {
    if (!rtcOk()) return;
    lastConnectError = '';
    S.myName = $('#myName').value.trim(); save();
    const btn = $('#btnMakeAnswer'); btn.disabled = true;
    $('#pairJoinStatus').textContent = '⏳ Generando tu respuesta…';
    try {
      const desc = await decodeDesc($('#offerIn').value);
      if (desc.type !== 'offer') throw new Error('Ese es un código de respuesta; aquí va el de invitación');
      pairRole = 'guest'; pendingFail = false;
      const peer = newPeer();
      peer.ondatachannel = e => attachChannel(e.channel);
      await peer.setRemoteDescription(desc);
      await peer.setLocalDescription(await peer.createAnswer());
      const info = await waitIce(peer);
      logCands('guest', info);
      $('#answerOut').value = await encodeDesc(peer.localDescription);
      // Igual que en el paso A: acá se espera a una persona, no al reloj.
      $('#pairJoinStatus').textContent = gatheredMsg(info, 'envía el código de arriba y espera a que se enlacen');
      toast('✅ Listo: envía tu código de respuesta');
    } catch (e) { toast(e.message || 'Código no válido'); $('#pairJoinStatus').textContent = '❌ ' + (e.message || 'Código no válido'); }
    btn.disabled = false;
  }

  // PASO C (quien creó la sala): pegar el código de respuesta y conectar
  async function hostConnect() {
    const btn = $('#btnConnect'); btn.disabled = true;
    setRetryVisible(false);
    $('#pairHostStatus').textContent = '🔄 Conectando…';
    try {
      if (!pc || pairRole !== 'host') throw new Error('Primero genera el código de invitación (vuelve a tocar “Crear sala”)');
      if (!$('#answerIn').value.trim()) throw new Error('Pega primero el código de respuesta que te enviaron');
      const desc = await decodeDesc($('#answerIn').value);
      if (desc.type !== 'answer') throw new Error('Ese es un código de invitación; aquí va el de respuesta');
      await pc.setRemoteDescription(desc);
      // Acá sí: desde este punto depende de la red, no de que alguien
      // mande un mensaje. El watchdog va con la ventana larga.
      armWatchdog();
      toast('Conectando…');
    } catch (e) { toast(e.message || 'Código no válido'); $('#pairHostStatus').textContent = '❌ ' + (e.message || 'Código no válido'); }
    btn.disabled = false;
  }

  function onChannelOpen() {
    clearWatchdog();
    connected = true; mode = pairRole; remote = null; guestWaiting = false; pairView = 'none'; lastConnectError = ''; pendingFail = false;
    setRetryVisible(false);
    send({ k: 'hello', name: S.myName });
    if (mode === 'host') pushState();
    if ($('#dlgMode').open) $('#dlgMode').close();
    toast('✅ ¡Conectados!');
    syncNetUI(); render();
  }

  function onDisconnected() {
    clearWatchdog();
    if (!connected) return;
    connected = false; guestWaiting = false;
    toast('⚠️ Se perdió la conexión');
    syncNetUI(); render();
  }

  function leaveOnline() {
    clearWatchdog();
    closePeer();
    mode = 'local'; connected = false; remote = null; peerName = ''; pairRole = null; pairView = 'none'; guestWaiting = false; lastConnectError = ''; pendingFail = false;
    ['#offerOut', '#answerIn', '#offerIn', '#answerOut'].forEach(s => { $(s).value = ''; });
    ['#pairHostStatus', '#pairJoinStatus'].forEach(s => { $(s).textContent = ''; });
    setRetryVisible(false);
    syncNetUI(); render();
  }

  /* ---------- Mensajes ---------- */
  function send(o) { try { if (dc && dc.readyState === 'open') dc.send(JSON.stringify(o)); } catch { /* se ignora */ } }

  // (host) Foto del estado para la otra persona
  function snapshot() {
    const { g, q, sp, counts, totals } = view();
    return {
      game: { used: g.used, current: g.current, spinner: g.spinner, category: g.category, notes: g.notes,
              since: g.since, special: g.special, spDone: g.spDone, spAnswer: g.spAnswer, seq: g.seq },
      q: q ? { id: q.id, c: q.c, t: q.t } : null,
      sp, counts, totals,
      names: [rawName(0), rawName(1)]
    };
  }
  function pushState() { if (mode === 'host' && connected) send({ k: 'state', s: snapshot() }); }

  function onMessage(raw) {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m !== 'object') return;

    if (m.k === 'hello') {
      peerName = String(m.name || '').slice(0, 20);
      if (mode === 'host') pushState();
      render();
    } else if (m.k === 'state' && mode === 'guest') {
      if (!m.s || !m.s.game || !Array.isArray(m.s.game.notes) || !Array.isArray(m.s.game.used)) return;
      const prev = remote && remote.game ? remote.game.seq : undefined;
      remote = m.s; guestWaiting = false;
      present(prev);
    } else if (m.k === 'act' && mode === 'host') {
      if (!ACTIONS.includes(m.a)) return;
      const g = S.game;
      const ok = m.a === 'reply' ? g.spinner === 0 : g.spinner === 1;   // ¿le correspondía hacerlo?
      if (!ok) { pushState(); return; }
      const prev = g.seq;
      eng(m.a, m.v, String(m.note || '').slice(0, 500));
      afterChange(prev);
    }
  }

  /* ---------- Ventana de modo ---------- */
  function openMode() {
    $('#myName').value = S.myName;
    syncNetUI();
    $('#dlgMode').showModal();
  }

  function syncNetUI() {
    const st = $('#netStatus');
    if (mode !== 'local' && connected) st.textContent = `✅ Conectado con ${NAME(1 - me())}. ${mode === 'host' ? 'Tú creaste la sala.' : 'Te uniste a la sala.'}`;
    else if (mode !== 'local') st.textContent = '⚠️ Sin conexión. Crea o únete a una sala para reconectar, o vuelve a un solo teléfono.';
    else if (pairView !== 'none') st.textContent = '⏳ Conectando… completa los pasos de abajo.';
    else if (lastConnectError) st.textContent = lastConnectError;
    else st.textContent = '📱 Ahora: un solo teléfono.';
    $('#pairHost').hidden = !(pairView === 'host' && !connected);
    $('#pairJoin').hidden = !(pairView === 'join' && !connected);
    $('#onlineChoices').hidden = connected;
    $('#btnModeLocal').textContent = (mode !== 'local' || pairView !== 'none') ? '📱 Volver a un solo teléfono' : '📱 Usar un solo teléfono';
    $('#btnShareOffer').hidden = $('#btnShareAnswer').hidden = !navigator.share;
    // El reintento solo tiene sentido con un paso abierto y sin conexión.
    setRetryVisible(!connected && pairView !== 'none');
    $('#netServers').textContent = iceLabel();
    renderPill();
  }

  async function shareCode(text) {
    const msg = '🌸 Flowers · código para jugar online:\n' + text;
    try { await navigator.share({ text: msg }); } catch { /* cancelado */ }
  }

  /* =====================================================================
     14. CONEXIÓN DE BOTONES (eventos)
     ===================================================================== */
  $('#btnSpin').addEventListener('click', () => { const { g } = view(); act(hasPlay(g) ? 'pass' : 'spin'); });
  $('#btnSkip').addEventListener('click', () => act('skip'));
  $('#btnYes').addEventListener('click', () => act('reply', 'a'));
  $('#btnMaybe').addEventListener('click', () => act('reply', 'b'));
  $('#btnFav').addEventListener('click', toggleFav);
  $('#btnReset').addEventListener('click', resetDeck);
  $('#btnWA').addEventListener('click', shareCurrent);
  $('#btnHistory').addEventListener('click', () => { renderHistory(); $('#dlgHistory').showModal(); });
  $('#btnGames').addEventListener('click', openGames);
  $('#btnSettings').addEventListener('click', openSettings);
  $('#btnMode').addEventListener('click', openMode);
  $('#modePill').addEventListener('click', openMode);
  $('#btnCopy').addEventListener('click', copyNotes);
  $('#btnWAnotes').addEventListener('click', shareNotes);
  $('#btnClear').addEventListener('click', clearNotes);
  $('#btnSaveGame').addEventListener('click', saveGame);
  $('#btnNewGame').addEventListener('click', startNewGame);
  $('#btnAddCustom').addEventListener('click', addCustom);
  $('#customText').addEventListener('keydown', e => { if (e.key === 'Enter') addCustom(); });
  $('#tabNotes').addEventListener('click', () => { tab = 'notes'; renderHistory(); });
  $('#tabFavs').addEventListener('click', () => { tab = 'favs'; renderHistory(); });
  $('#tabSeen').addEventListener('click', () => { tab = 'seen'; renderHistory(); });

  // Modo de juego / online
  $('#btnModeLocal').addEventListener('click', () => { leaveOnline(); toast('📱 Modo un solo teléfono'); $('#dlgMode').close(); });
  $('#btnHost').addEventListener('click', hostCreate);
  $('#btnJoin').addEventListener('click', () => { S.myName = $('#myName').value.trim(); save(); pairView = 'join'; lastConnectError = ''; $('#pairJoinStatus').textContent = ''; syncNetUI(); });
  $('#btnConnect').addEventListener('click', hostConnect);
  $('#btnMakeAnswer').addEventListener('click', guestAnswer);
  $('#btnRetry').addEventListener('click', retryPair);
  $('#btnRetry2').addEventListener('click', retryPair);
  $('#btnTest').addEventListener('click', () => testConnection($('#testResult')));
  $('#btnCopyOffer').addEventListener('click', () => $('#offerOut').value ? copyText($('#offerOut').value, '📋 Código copiado') : toast('Aún se está generando el código'));
  $('#btnCopyAnswer').addEventListener('click', () => $('#answerOut').value ? copyText($('#answerOut').value, '📋 Código copiado') : toast('Primero genera tu respuesta'));
  $('#btnShareOffer').addEventListener('click', () => $('#offerOut').value && shareCode($('#offerOut').value));
  $('#btnShareAnswer').addEventListener('click', () => $('#answerOut').value && shareCode($('#answerOut').value));
  ['#offerOut', '#answerOut'].forEach(s => $(s).addEventListener('focus', e => e.target.select()));
  $('#myName').addEventListener('input', e => {
    S.myName = e.target.value; save();
    if (connected) { send({ k: 'hello', name: S.myName }); if (mode === 'host') pushState(); }
    render();
  });

  // Nombres (un solo teléfono)
  $('#quickA').addEventListener('input', e => { S.names.a = e.target.value; save(); render(); });
  $('#quickB').addEventListener('input', e => { S.names.b = e.target.value; save(); render(); });

  // Opciones
  $('#optSpecial').addEventListener('change', e => { S.specials = e.target.checked; save(); });
  $('#optVibrate').addEventListener('change', e => { S.vibrate = e.target.checked; save(); });
  ['#turnOn', '#turnUrls', '#turnUser', '#turnPass'].forEach(s =>
    $(s).addEventListener('input', readTurn));

  // Cerrar las ventanas con ✕ o tocando fuera de ellas
  document.querySelectorAll('dialog').forEach(d => {
    d.addEventListener('click', e => { if (e.target === d) d.close(); });
    d.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => d.close()));
  });

  /* =====================================================================
     15. INICIO
     ===================================================================== */
  $('#quickA').value = S.names.a;
  $('#quickB').value = S.names.b;
  syncNetUI();
  render();
  console.log(`Flowers 🌸: ${DEFAULTS.length} preguntas cargadas.`);
})();
