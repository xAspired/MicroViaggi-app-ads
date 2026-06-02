/* ─────────────────────────────────────────
   Micro Viaggi del Tempo — main.js
   ───────────────────────────────────────── */

// ─── TRANSLATIONS ───
const i18n = {
  it: {
    navBtn:       'Scarica gratis',
    heroTitle1:   'Viaggia',
    heroTitle2:   'nel tempo.',
    heroTitle3:   'Scopri il mondo.',
    heroSub:      'Piccoli viaggi. Grandi scoperte.',
    ctaBtn:       'Scarica su App Store',
    ctaNote:      'Gratis · Solo iOS · Italiano',
    scrollHint:   'Scopri di più',
    stat1:        'Viaggi storici',
    stat2:        'Per viaggio',
    stat3:        'Cose da scoprire',
    featuresLabel:'Come funziona',
    feat1Title:   "Scegli un'epoca",
    feat1Desc:    "Dalle piramidi egizie alla guerra fredda: scegli un'era e parti. Ogni viaggio è breve, denso e costruito attorno a un evento reale.",
    feat2Title:   'Esplora luoghi straordinari',
    feat2Desc:    "Storie interattive che ti portano dentro i momenti chiave della storia. Niente muri di testo: solo narrazione densa e dettagli inaspettati.",
    feat3Title:   'Colleziona medaglie',
    feat3Desc:    "Quiz, obiettivi e medaglie da sbloccare. Tieni traccia dei tuoi progressi e scopri quanto hai imparato con ogni viaggio completato.",
    echoesTag:    'Modalità Echoes',
    echoesTitle1: 'Non leggere',
    echoesTitle2: 'la storia.',
    echoesTitle3: 'Vivila.',
    echoesDesc:   "Attiva Echoes Mode e l'interfaccia si trasforma: le storie passano in prima persona, come se fossi davvero lì. Senti l'odore della sabbia del Sahara. Senti il rumore della folla al Colosseo. Un modo completamente diverso di esplorare il passato.",
    echo1:        "«Il sole è già alto quando arriviamo alle porte di Uruk. Il profumo di argilla umida e bitume aleggia nell'aria...»",
    echo2:        "«La folla urla. Sento le vibrazioni sotto i piedi mentre i gladiatori entrano nell'arena...»",
    echo3:        "«La neve cade in silenzio su Maratona. Sento ancora il peso del messaggio da portare ad Atene...»",
    pricingLabel: 'Accesso',
    pricingTitle: 'Esplora gratis,<br>senza limiti se vuoi.',
    pricingSub:   'Puoi esplorare gratuitamente guardando brevi annunci, oppure rimuoverli per sempre con un unico acquisto. Nessun abbonamento.',
    freeLabel:    'Gratuito',
    freeNote:     'per sempre',
    free1:        '3 viaggi disponibili',
    free2:        'Quiz e medaglie',
    free3:        'Brevi annunci',
    premiumNote:  'acquisto unico',
    prem1:        'Tutti i viaggi sbloccati',
    prem2:        'Modalità Echoes',
    prem3:        'Nessuna pubblicità',
    prem4:        'Progressi nel cloud',
    footerCta:    'Scaricala su App Store',
    flag:         '🇮🇹',
    code:         'IT',
    trips: [
      { year: '3200 a.C.', name: "L'Invenzione della Scrittura" },
      { year: '2560 a.C.', name: 'La Costruzione delle Piramidi' },
      { year: '490 a.C.',  name: 'La Battaglia di Maratona' },
      { year: '44 a.C.',   name: 'La Caduta di Giulio Cesare' },
      { year: '1066',      name: 'La Conquista Normanna' },
      { year: '1347',      name: 'La Peste Nera' },
      { year: '1969',      name: 'Lo Sbarco sulla Luna' },
      { year: '1986',      name: 'Chernobyl' },
      { year: '1990',      name: "La Caduta dell'Apartheid" },
      { year: '1991',      name: 'La Nascita di Internet' },
    ],
  },

  en: {
    navBtn:       'Download free',
    heroTitle1:   'Travel',
    heroTitle2:   'through time.',
    heroTitle3:   'Discover the world.',
    heroSub:      'Short journeys. Big discoveries.',
    ctaBtn:       'Download on App Store',
    ctaNote:      'Free · iOS only · Italian',
    scrollHint:   'Learn more',
    stat1:        'Historical trips',
    stat2:        'Per journey',
    stat3:        'Things to discover',
    featuresLabel:'How it works',
    feat1Title:   'Pick an era',
    feat1Desc:    'From Egyptian pyramids to the Cold War: choose an era and go. Every trip is short, dense, and built around a real historical event.',
    feat2Title:   'Explore extraordinary places',
    feat2Desc:    'Interactive stories that take you inside the pivotal moments of history. No walls of text — just rich storytelling and unexpected details.',
    feat3Title:   'Collect medals',
    feat3Desc:    'Quizzes, goals, and medals to unlock. Track your progress and see how much you have learned after each completed journey.',
    echoesTag:    'Echoes Mode',
    echoesTitle1: "Don't read",
    echoesTitle2: 'history.',
    echoesTitle3: 'Live it.',
    echoesDesc:   'Activate Echoes Mode and the whole interface transforms: stories shift to first person, as if you are truly there. Feel the desert sand of the Sahara. Hear the roar of the crowd in the Colosseum. A completely different way to explore the past.',
    echo1:        '«The sun is already high as we approach the gates of Uruk. The scent of wet clay and bitumen hangs in the air...»',
    echo2:        '«The crowd roars. I feel the vibrations through the ground as the gladiators enter the arena...»',
    echo3:        '«Snow falls silently over Marathon. I still feel the weight of the message I must carry to Athens...»',
    pricingLabel: 'Access',
    pricingTitle: 'Explore for free,<br>or go unlimited.',
    pricingSub:   'Explore for free by watching short ads, or remove them forever with a single one-time purchase. No subscription.',
    freeLabel:    'Free',
    freeNote:     'forever',
    free1:        '3 trips available',
    free2:        'Quizzes & medals',
    free3:        'Short ads',
    premiumNote:  'one-time purchase',
    prem1:        'All trips unlocked',
    prem2:        'Echoes Mode',
    prem3:        'No ads',
    prem4:        'Cloud progress sync',
    footerCta:    'Download on App Store',
    flag:         '🇬🇧',
    code:         'EN',
    trips: [
      { year: '3200 BC', name: 'The Invention of Writing' },
      { year: '2560 BC', name: 'The Construction of the Pyramids' },
      { year: '490 BC',  name: 'The Battle of Marathon' },
      { year: '44 BC',   name: 'The Fall of Julius Caesar' },
      { year: '1066',    name: 'The Norman Conquest' },
      { year: '1347',    name: 'The Black Death' },
      { year: '1969',    name: 'The Moon Landing' },
      { year: '1986',    name: 'Chernobyl' },
      { year: '1990',    name: 'The End of Apartheid' },
      { year: '1991',    name: 'The Birth of the Internet' },
    ],
  },

  fr: {
    navBtn:       'Télécharger gratuit',
    heroTitle1:   'Voyagez',
    heroTitle2:   'dans le temps.',
    heroTitle3:   'Découvrez le monde.',
    heroSub:      'Petits voyages. Grandes découvertes.',
    ctaBtn:       'Télécharger sur App Store',
    ctaNote:      'Gratuit · iOS uniquement · Italien',
    scrollHint:   'En savoir plus',
    stat1:        'Voyages historiques',
    stat2:        'Par voyage',
    stat3:        'Choses à découvrir',
    featuresLabel:'Comment ça marche',
    feat1Title:   'Choisissez une époque',
    feat1Desc:    "Des pyramides d'Égypte à la guerre froide : choisissez une ère et partez. Chaque voyage est court, dense et construit autour d'un événement réel.",
    feat2Title:   'Explorez des lieux extraordinaires',
    feat2Desc:    "Des histoires interactives qui vous plongent dans les moments clés de l'histoire. Pas de murs de texte : seulement une narration riche et des détails inattendus.",
    feat3Title:   'Collectionnez des médailles',
    feat3Desc:    "Quiz, objectifs et médailles à débloquer. Suivez vos progrès et voyez combien vous avez appris à chaque voyage complété.",
    echoesTag:    'Mode Echoes',
    echoesTitle1: 'Ne lisez pas',
    echoesTitle2: "l'histoire.",
    echoesTitle3: 'Vivez-la.',
    echoesDesc:   "Activez Echoes Mode et toute l'interface se transforme : les récits passent à la première personne, comme si vous y étiez vraiment. Sentez le sable chaud du Sahara. Entendez la foule rugir au Colisée. Une façon totalement différente d'explorer le passé.",
    echo1:        "«Le soleil est déjà haut quand nous approchons des portes d'Uruk. Le parfum d'argile humide et de bitume flotte dans l'air...»",
    echo2:        "«La foule rugit. Je sens les vibrations sous mes pieds tandis que les gladiateurs entrent dans l'arène...»",
    echo3:        "«La neige tombe en silence sur Marathon. Je sens encore le poids du message que je dois porter à Athènes...»",
    pricingLabel: 'Accès',
    pricingTitle: 'Explorez gratuitement,<br>sans limites si vous voulez.',
    pricingSub:   "Explorez gratuitement en regardant de courtes publicités, ou supprimez-les définitivement avec un achat unique. Pas d'abonnement.",
    freeLabel:    'Gratuit',
    freeNote:     'pour toujours',
    free1:        '3 voyages disponibles',
    free2:        'Quiz et médailles',
    free3:        'Courtes publicités',
    premiumNote:  'achat unique',
    prem1:        'Tous les voyages débloqués',
    prem2:        'Mode Echoes',
    prem3:        'Sans publicité',
    prem4:        'Progression dans le cloud',
    footerCta:    'Télécharger sur App Store',
    flag:         '🇫🇷',
    code:         'FR',
    trips: [
      { year: '3200 av. J.-C.', name: "L'Invention de l'Écriture" },
      { year: '2560 av. J.-C.', name: 'La Construction des Pyramides' },
      { year: '490 av. J.-C.',  name: 'La Bataille de Marathon' },
      { year: '44 av. J.-C.',   name: 'La Chute de Jules César' },
      { year: '1066',           name: 'La Conquête Normande' },
      { year: '1347',           name: 'La Peste Noire' },
      { year: '1969',           name: 'Le Premier Pas sur la Lune' },
      { year: '1986',           name: 'Tchernobyl' },
      { year: '1990',           name: "La Fin de l'Apartheid" },
      { year: '1991',           name: "La Naissance d'Internet" },
    ],
  },

  es: {
    navBtn:       'Descargar gratis',
    heroTitle1:   'Viaja',
    heroTitle2:   'en el tiempo.',
    heroTitle3:   'Descubre el mundo.',
    heroSub:      'Pequeños viajes. Grandes descubrimientos.',
    ctaBtn:       'Descargar en App Store',
    ctaNote:      'Gratis · Solo iOS · Italiano',
    scrollHint:   'Descubre más',
    stat1:        'Viajes históricos',
    stat2:        'Por viaje',
    stat3:        'Cosas por descubrir',
    featuresLabel:'Cómo funciona',
    feat1Title:   'Elige una época',
    feat1Desc:    'Desde las pirámides egipcias hasta la guerra fría: elige una era y parte. Cada viaje es breve, denso y construido en torno a un evento real.',
    feat2Title:   'Explora lugares extraordinarios',
    feat2Desc:    'Historias interactivas que te llevan dentro de los momentos clave de la historia. Sin muros de texto: solo narración rica y detalles inesperados.',
    feat3Title:   'Colecciona medallas',
    feat3Desc:    'Cuestionarios, objetivos y medallas por desbloquear. Sigue tu progreso y descubre cuánto has aprendido en cada viaje completado.',
    echoesTag:    'Modo Echoes',
    echoesTitle1: 'No leas',
    echoesTitle2: 'la historia.',
    echoesTitle3: 'Vívela.',
    echoesDesc:   'Activa Echoes Mode y toda la interfaz se transforma: las historias pasan a primera persona, como si estuvieras realmente allí. Siente la arena caliente del Sahara. Escucha el rugido de la multitud en el Coliseo. Una forma completamente diferente de explorar el pasado.',
    echo1:        '«El sol ya está alto cuando llegamos a las puertas de Uruk. El aroma de arcilla húmeda y betún flota en el aire...»',
    echo2:        '«La multitud ruge. Siento las vibraciones bajo mis pies mientras los gladiadores entran en el arena...»',
    echo3:        '«La nieve cae en silencio sobre Maratón. Aún siento el peso del mensaje que debo llevar a Atenas...»',
    pricingLabel: 'Acceso',
    pricingTitle: 'Explora gratis,<br>sin límites si quieres.',
    pricingSub:   'Puedes explorar gratis viendo breves anuncios, o eliminarlos para siempre con una única compra. Sin suscripción.',
    freeLabel:    'Gratis',
    freeNote:     'para siempre',
    free1:        '3 viajes disponibles',
    free2:        'Cuestionarios y medallas',
    free3:        'Breves anuncios',
    premiumNote:  'compra única',
    prem1:        'Todos los viajes desbloqueados',
    prem2:        'Modo Echoes',
    prem3:        'Sin publicidad',
    prem4:        'Progreso en la nube',
    footerCta:    'Descárgala en App Store',
    flag:         '🇪🇸',
    code:         'ES',
    trips: [
      { year: '3200 a.C.', name: 'La Invención de la Escritura' },
      { year: '2560 a.C.', name: 'La Construcción de las Pirámides' },
      { year: '490 a.C.',  name: 'La Batalla de Maratón' },
      { year: '44 a.C.',   name: 'La Caída de Julio César' },
      { year: '1066',      name: 'La Conquista Normanda' },
      { year: '1347',      name: 'La Peste Negra' },
      { year: '1969',      name: 'El Alunizaje' },
      { year: '1986',      name: 'Chernóbil' },
      { year: '1990',      name: 'El Fin del Apartheid' },
      { year: '1991',      name: 'El Nacimiento de Internet' },
    ],
  },

  nl: {
    navBtn:       'Gratis downloaden',
    heroTitle1:   'Reis',
    heroTitle2:   'door de tijd.',
    heroTitle3:   'Ontdek de wereld.',
    heroSub:      'Kleine reizen. Grote ontdekkingen.',
    ctaBtn:       'Download in App Store',
    ctaNote:      'Gratis · Alleen iOS · Italiaans',
    scrollHint:   'Ontdek meer',
    stat1:        'Historische reizen',
    stat2:        'Per reis',
    stat3:        'Dingen te ontdekken',
    featuresLabel:'Hoe het werkt',
    feat1Title:   'Kies een tijdperk',
    feat1Desc:    'Van de Egyptische piramides tot de Koude Oorlog: kies een tijdperk en vertrek. Elke reis is kort, vol inhoud en gebouwd rond een echt historisch moment.',
    feat2Title:   'Verken buitengewone plaatsen',
    feat2Desc:    'Interactieve verhalen die je meenemen naar de sleutelmomenten van de geschiedenis. Geen tekstmuren: alleen rijke verhalen en onverwachte details.',
    feat3Title:   'Verzamel medailles',
    feat3Desc:    'Quizzen, doelen en medailles om te ontgrendelen. Houd je voortgang bij en zie hoeveel je hebt geleerd na elke voltooide reis.',
    echoesTag:    'Echoes-modus',
    echoesTitle1: 'Lees de geschiedenis niet.',
    echoesTitle2: '',
    echoesTitle3: 'Beleef haar.',
    echoesDesc:   'Activeer Echoes Mode en de hele interface verandert: verhalen gaan over naar de eerste persoon, alsof je er echt bent. Voel het warme zand van de Sahara. Hoor het gebulder van de menigte in het Colosseum. Een totaal andere manier om het verleden te verkennen.',
    echo1:        '«De zon staat al hoog als we de poorten van Uruk naderen. De geur van natte klei en bitumen hangt in de lucht...»',
    echo2:        '«De menigte brult. Ik voel de trillingen onder mijn voeten terwijl de gladiatoren de arena betreden...»',
    echo3:        '«Sneeuw valt zwijgend over Marathon. Ik voel nog steeds het gewicht van de boodschap die ik naar Athene moet brengen...»',
    pricingLabel: 'Toegang',
    pricingTitle: 'Verken gratis,<br>of ga onbeperkt.',
    pricingSub:   'Verken gratis door korte advertenties te bekijken, of verwijder ze voor altijd met één eenmalige aankoop. Geen abonnement.',
    freeLabel:    'Gratis',
    freeNote:     'voor altijd',
    free1:        '3 reizen beschikbaar',
    free2:        'Quizzen & medailles',
    free3:        'Korte advertenties',
    premiumNote:  'eenmalige aankoop',
    prem1:        'Alle reizen ontgrendeld',
    prem2:        'Echoes-modus',
    prem3:        'Geen advertenties',
    prem4:        'Voortgang in de cloud',
    footerCta:    'Download in App Store',
    flag:         '🇳🇱',
    code:         'NL',
    trips: [
      { year: '3200 v.Chr.', name: 'De Uitvinding van het Schrift' },
      { year: '2560 v.Chr.', name: 'De Bouw van de Piramides' },
      { year: '490 v.Chr.',  name: 'De Slag bij Marathon' },
      { year: '44 v.Chr.',   name: 'De Val van Julius Caesar' },
      { year: '1066',        name: 'De Normandische Verovering' },
      { year: '1347',        name: 'De Zwarte Dood' },
      { year: '1969',        name: 'De Maanlanding' },
      { year: '1986',        name: 'Tsjernobyl' },
      { year: '1990',        name: 'Het Einde van de Apartheid' },
      { year: '1991',        name: 'De Geboorte van het Internet' },
    ],
  },
};


// ─── TICKER ───
function buildTicker(trips) {
  const ticker = document.getElementById('ticker');
  if (!ticker) return;

  ticker.innerHTML = '';
  const doubled = [...trips, ...trips];
  doubled.forEach(({ year, name }) => {
    const chip = document.createElement('div');
    chip.className = 'trip-chip';
    chip.innerHTML = `<span class="chip-year">${year}</span>${name}`;
    ticker.appendChild(chip);
  });
}


// ─── APPLY LANGUAGE ───
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Rebuild ticker with translated trip names
  buildTicker(t.trips);

  // Update lang picker UI
  document.getElementById('langFlag').textContent = t.flag;
  document.getElementById('langCode').textContent = t.code;
  document.documentElement.lang = lang;

  // Mark active option
  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem('mvdt-lang', lang);
}


// ─── LANGUAGE PICKER ───
(function initLangPicker() {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  dropdown.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    applyLang(opt.dataset.lang);
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  // Auto-detect on load
  const saved    = localStorage.getItem('mvdt-lang');
  const browser  = navigator.language?.slice(0, 2).toLowerCase();
  const detected = saved || (i18n[browser] ? browser : 'it');
  applyLang(detected);
})();


// ─── STARS ───
(function initStars() {
  const container = document.getElementById('stars');
  if (!container) return;

  for (let i = 0; i < 120; i++) {
    const star = document.createElement('span');
    const size = Math.random() * 2 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --d: ${3 + Math.random() * 5}s;
      --delay: ${Math.random() * 6}s;
      --op: ${0.2 + Math.random() * 0.6};
    `;
    container.appendChild(star);
  }
})();


// ─── SCROLL REVEAL ───
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => observer.observe(el));
})();
