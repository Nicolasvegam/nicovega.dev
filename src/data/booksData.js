import book1 from '@/images/books/book-1-shoe-dog.webp'
import book2 from '@/images/books/book-2-steve-jobs.webp'
import book3 from '@/images/books/book-3-sacred-seven.jpg'
import book4 from '@/images/books/book-4-zero-to-one.jpg'
import book5 from '@/images/books/book-5-psychology-of-money.jpg'
import book6 from '@/images/books/book-6-el-hombre-mas-rico.jpg'
import book7 from '@/images/books/book-7-no-rules.jpg'
import book8 from '@/images/books/book-8-el-monje-que-vendio-su-ferrari.webp'
import book9 from '@/images/books/book-9-the-hard-thing-about-hard-things.webp'
import book10 from '@/images/books/book-10-the-almanack.webp'
import book11 from '@/images/books/book-11-steal-like-an-artist.webp'
import book12 from '@/images/books/book-12-joyland.webp'
import book13 from '@/images/books/book-13-measure-what-matters.webp'
import book14 from '@/images/books/book-14-breve-historia-del-mundo.jpg'
import book15 from '@/images/books/book-15-creativity-inc.webp'
import book16 from '@/images/books/book-16-como-ganar-amigos.jpeg'

// Placeholder images for books that need to be added
const placeholderImage = book2

export const booksData = [
  {
    id: 1,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    image: book2,
    rating: 5,
    slug: 'steve-jobs',
    review: {
      summary: 'La narración es espectacular. Si creías que Steve era especial, después de leer este libro sabrás que vivía al borde de la locura, de donde surgían tanto viajes horribles como pasajes mágicos. Pensé que solo hablaría de iPhones y iPads, pero descubrí un mundo mucho más amplio. Me hizo ser más exigente conmigo y con otros para lograr grandes cosas. Su lado espiritual fue una revelación que lo formó profundamente. Es fascinante leer sobre Silicon Valley en esos años dorados y no tanto.',
      liked: 'Muchísimo',
      about: 'La biografía completa de Steve Jobs, desde su juventud hippie hasta convertir Apple en la empresa más valiosa del mundo.',
      whyBought: 'Quería entender la mente detrás de Apple.',
      favoritePart: 'Los relatos sobre los precursores de Silicon Valley y cómo Jobs navegaba entre genialidad y locura.',
      goodFor: 'Emprendedores y amantes de la tecnología.',
      notGoodFor: 'Quienes busquen un retrato idealizado de Jobs.'
    }
  },
  {
    id: 2,
    title: 'Shoe Dog',
    author: 'Phil Knight',
    image: book1,
    rating: 4,
    slug: 'shoe-dog',
    review: {
      summary: 'Una historia de locura protagonizada por un obsesivo del running decidido a mejorar el deporte. Phil Knight armó un equipo especial y apasionado, pasando por momentos que te hacen ver cuántas veces Nike estuvo al borde de la ruina. Celebré a sus primeros atletas como mérito propio. Me encantaron los pasajes donde sale a correr por los bosques de Oregon para despejar la mente.',
      liked: 'Mucho',
      about: 'La historia de cómo Phil Knight creó Nike desde cero, vendiendo zapatos desde el baúl de su auto.',
      whyBought: 'Curiosidad por conocer la historia detrás de la marca.',
      favoritePart: 'Las carreras solitarias por Oregon para pensar y resolver problemas.',
      goodFor: 'Emprendedores y corredores.',
      notGoodFor: 'Quienes esperen un manual de negocios tradicional.'
    }
  },
  {
    id: 3,
    title: 'Steal Like an Artist',
    author: 'Austin Kleon',
    image: book11,
    rating: 4,
    slug: 'steal-like-an-artist',
    review: {
      summary: 'Me aclaró el concepto de creatividad y cómo abordarla. Lo leí dos veces: una volando y otra con calma, anotando lo que podía aplicar a mi día a día. Me gustó especialmente el enfoque sobre construir tu identidad creativa a través de tus héroes, quienes pueden convertirse en mentores si lees todo sobre ellos.',
      liked: 'Sí',
      about: 'Un manifiesto sobre creatividad que propone "robar" ideas de tus influencias para crear algo propio.',
      whyBought: 'Buscaba entender mejor el proceso creativo.',
      favoritePart: 'La idea de que tus héroes pueden ser mentores a través de sus obras.',
      goodFor: 'Creativos y artistas en busca de inspiración.',
      notGoodFor: 'Quienes busquen técnicas muy estructuradas.'
    }
  },
  {
    id: 4,
    title: 'La psicología del dinero',
    author: 'Morgan Housel',
    image: book5,
    rating: 4,
    slug: 'la-psicologia-del-dinero',
    review: {
      summary: 'No busco recetas de éxito financiero en los libros, pero este me tranquilizó sobre mi estrategia de inversión. Me bajó la ansiedad y confirmó que mi enfoque es sensato, aunque me sigue intrigando cómo "ganarle al sistema".',
      liked: 'Sí',
      about: 'Exploraciones sobre cómo pensamos y nos comportamos con el dinero.',
      whyBought: 'Quería validar mi estrategia financiera.',
      favoritePart: 'Los ejemplos que muestran que el éxito financiero depende más del comportamiento que del conocimiento.',
      goodFor: 'Cualquiera interesado en finanzas personales.',
      notGoodFor: 'Quienes busquen fórmulas mágicas de inversión.'
    }
  },
  {
    id: 5,
    title: 'El monje que vendió su Ferrari',
    author: 'Robin Sharma',
    image: book8,
    rating: 4,
    slug: 'el-monje-que-vendio-su-ferrari',
    review: {
      summary: 'Historia atrapante con enseñanzas aplicables que te hacen sentir cerca de la iluminación. Apliqué varios pasajes a mi rutina diaria (aunque ya no lo hago y debería retomarlo). Me intriga especialmente el relato sobre los yoguis y maestros de la aldea oculta, muy cinematográfico.',
      liked: 'Sí',
      about: 'Un exitoso abogado que abandona todo para buscar la sabiduría en el Himalaya.',
      whyBought: 'Buscaba inspiración sobre balance vida-trabajo.',
      favoritePart: 'Las descripciones de la aldea oculta y sus maestros.',
      goodFor: 'Quienes busquen desarrollo personal y espiritualidad.',
      notGoodFor: 'Escépticos del género de autoayuda.'
    }
  },
  {
    id: 6,
    title: 'El hombre más rico de Babilonia',
    author: 'George S. Clason',
    image: book6,
    rating: 4,
    slug: 'el-hombre-mas-rico-de-babilonia',
    review: {
      summary: 'Un clásico ambientado en una época fascinante. Los valores que transmite son atemporales y me dejó claras las estrategias básicas de inversión y ahorro. Es un libro fundamental para aprender finanzas personales.',
      liked: 'Sí',
      about: 'Lecciones financieras a través de parábolas de la antigua Babilonia.',
      whyBought: 'Me lo recomendaron como lectura esencial de finanzas.',
      favoritePart: 'La ambientación histórica que hace digeribles las lecciones financieras.',
      goodFor: 'Principiantes en finanzas personales.',
      notGoodFor: 'Quienes busquen estrategias financieras complejas.'
    }
  },
  {
    id: 7,
    title: 'Joyland',
    author: 'Stephen King',
    image: book12,
    rating: 5,
    slug: 'joyland',
    review: {
      summary: 'Muy entretenido, la historia se desarrolla pausadamente con detalles atrapantes. El final es vertiginoso - en los últimos capítulos todo sucede muy rápido. Perfecto para una lectura ligera pero absorbente.',
      liked: 'Mucho',
      about: 'Un joven trabaja en un parque de diversiones encantado durante un verano que cambiará su vida.',
      whyBought: 'Buscaba algo de Stephen King más ligero.',
      favoritePart: 'El desenlace acelerado de los últimos capítulos.',
      goodFor: 'Fans de King que busquen algo menos terrorífico.',
      notGoodFor: 'Quienes esperen horror puro de Stephen King.'
    }
  },
  {
    id: 8,
    title: 'Measure What Matters',
    author: 'John Doerr',
    image: book13,
    rating: 4,
    slug: 'measure-what-matters',
    review: {
      summary: 'Va directo al grano con la metodología OKR. La mayoría son casos prácticos en empresas de distintos rubros y tamaños. Tiene mucho sentido cuando quieres organizar una empresa con metas claras.',
      liked: 'Sí, muy práctico',
      about: 'Cómo implementar OKRs (Objectives and Key Results) en organizaciones.',
      whyBought: 'Necesitaba entender mejor esta metodología.',
      favoritePart: 'Los casos reales de implementación en diferentes industrias.',
      goodFor: 'Líderes y managers.',
      notGoodFor: 'Quienes prefieran teoría sobre práctica.'
    }
  },
  {
    id: 9,
    title: 'Una breve historia del mundo',
    author: 'E.H. Gombrich',
    image: book14,
    rating: 4,
    slug: 'una-breve-historia-del-mundo',
    review: {
      summary: 'Capítulos que saltan entre diferentes etapas de la humanidad con relatos llamativos de cada época. Me sirvió muchísimo antes de viajar a Europa para repasar civilizaciones, tiempos e influencias.',
      liked: 'Sí',
      about: 'Un recorrido por los momentos clave de la historia humana.',
      whyBought: 'Preparación cultural para mi viaje a Europa.',
      favoritePart: 'Los relatos que conectan diferentes civilizaciones.',
      goodFor: 'Viajeros y curiosos de la historia.',
      notGoodFor: 'Quienes busquen profundidad académica.'
    }
  },
  {
    id: 10,
    title: 'Creativity, Inc.',
    author: 'Ed Catmull',
    image: book15,
    rating: 3,
    slug: 'creativity-inc',
    review: {
      summary: 'El comienzo es fascinante, aunque el final me soltó un poco al llegar a una meseta. Es entretenida la historia de los pioneros que mezclaron arte y computación, siendo los primeros en lanzar películas completamente digitales. La hazaña de Toy Story y la relación con Disney, Jobs y Lucas son destacables.',
      liked: 'Al principio mucho, luego se aplana',
      about: 'La historia de Pixar desde sus inicios hasta convertirse en gigante de la animación.',
      whyBought: 'Fanático de Pixar y curioso sobre su proceso creativo.',
      favoritePart: 'Los primeros años revolucionando la animación por computadora.',
      goodFor: 'Creativos y amantes de la animación.',
      notGoodFor: 'Quienes esperen drama constante hasta el final.'
    }
  },
  {
    id: 11,
    title: 'The Product Book',
    author: 'Product School',
    image: book3,
    rating: 5,
    slug: 'the-product-book',
    review: {
      summary: 'Buenísimo. Lo compré cuando entendía poco del rol de Product Manager. Me resolvió todas las dudas y me preparó para serlo. El PM élite domina siete disciplinas explicadas con detalle, casos prácticos y en lenguaje accesible. Es como un curso escrito pero entretenido.',
      liked: 'Muchísimo',
      about: 'Las siete disciplinas esenciales que debe dominar un Product Manager de élite.',
      whyBought: 'Quería entender y prepararme para ser PM.',
      favoritePart: 'Los casos prácticos que ilustran cada disciplina.',
      goodFor: 'Aspirantes a PM o quienes trabajen en producto.',
      notGoodFor: 'Quienes no estén en el mundo tech.'
    }
  },
  {
    id: 12,
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
    image: book9,
    rating: 3,
    slug: 'the-hard-thing-about-hard-things',
    review: {
      summary: 'Me gustó el sentido de realidad del relato. Lo mal que la pasaron, los casos de contrataciones fallidas y exitosas. Interesante conocer una empresa en la era de la burbuja punto com y sus IPOs. Personalmente no me sentí tan identificado con ese rol.',
      liked: 'Está bien',
      about: 'Las decisiones difíciles que debe tomar un CEO en momentos de crisis.',
      whyBought: 'Recomendado como lectura esencial para emprendedores.',
      favoritePart: 'La honestidad brutal sobre los fracasos y aprendizajes.',
      goodFor: 'CEOs y fundadores de startups.',
      notGoodFor: 'Quienes busquen historias de éxito sin tropiezos.'
    }
  },
  {
    id: 13,
    title: 'No Rules Rules',
    author: 'Reed Hastings & Erin Meyer',
    image: book7,
    rating: 4,
    slug: 'no-rules-rules',
    review: {
      summary: 'Obligatorio sobre cultura en startups. Un caso excéntrico con innovaciones en varios sentidos. Para equipos exigentes puede ser la guía. El ejemplo clásico de retención tiene sentido aunque sea duro, igual que las políticas de gastos y vacaciones. Cultura basada en confianza y alto rendimiento. Los casos sobre diferencias culturales por país son reveladores.',
      liked: 'Mucho',
      about: 'La cultura radical de Netflix basada en libertad y responsabilidad.',
      whyBought: 'Curiosidad sobre la famosa cultura Netflix.',
      favoritePart: 'Los ejemplos de cómo adaptan la cultura según el país.',
      goodFor: 'Líderes que buscan construir culturas de alto rendimiento.',
      notGoodFor: 'Quienes prefieran estructuras tradicionales.'
    }
  },
  {
    id: 14,
    title: 'Zero to One',
    author: 'Peter Thiel',
    image: book4,
    rating: 4,
    slug: 'zero-to-one',
    review: {
      summary: 'Un clásico con ideas fundamentales para empezar una startup. Es una buena guía que leí hace tiempo y merece una segunda lectura rápida.',
      liked: 'Sí',
      about: 'Cómo construir empresas que creen algo nuevo en vez de copiar lo existente.',
      whyBought: 'Lectura obligada en el mundo startup.',
      favoritePart: 'El concepto de crear monopolios a través de la innovación.',
      goodFor: 'Emprendedores e innovadores.',
      notGoodFor: 'Quienes busquen tácticas en lugar de filosofía.'
    }
  },
  {
    id: 15,
    title: 'El Almanaque de Naval Ravikant',
    author: 'Eric Jorgenson',
    image: book10,
    rating: 4,
    slug: 'el-almanaque-de-naval-ravikant',
    review: {
      summary: 'Este tipo es brillante en Twitter. El libro recopila su historia y filosofía. La libertad financiera llega solo con tu propio negocio o participando en otros, no como empleado. Tiene consejos vitales: haz lo que te apasiona - mientras tú juegas, para otros será trabajo, y esa es tu ventaja. Aunque suene trillado, me hace bien releerlo.',
      liked: 'Sí',
      about: 'Recopilación de la sabiduría de Naval sobre riqueza y felicidad.',
      whyBought: 'Fan de sus tweets y filosofía.',
      favoritePart: '"Tu rostro es una marca, para bien o mal. Haz que sea para bien."',
      goodFor: 'Emprendedores y buscadores de libertad financiera.',
      notGoodFor: 'Quienes encuentren repetitivos los consejos de vida.'
    }
  },
  {
    id: 16,
    title: 'Cómo ganar amigos e influir sobre las personas',
    author: 'Dale Carnegie',
    image: book16,
    rating: 4,
    slug: 'como-ganar-amigos-e-influir',
    review: {
      summary: 'Principios básicos que mucha gente aplica intuitivamente. Encontré muchas cosas aplicables para relaciones personales, familiares y laborales. Me llevé accionables muy concretos. Todos dicen "soy malo para los nombres" (yo incluido), pero es solucionable y es clave. Me falta leer la mitad.',
      liked: 'Sí, muy práctico',
      about: 'Principios para mejorar las relaciones interpersonales y la influencia positiva.',
      whyBought: 'Clásico de desarrollo personal recomendado.',
      favoritePart: 'La importancia de recordar nombres y su impacto en las relaciones.',
      goodFor: 'Cualquiera que quiera mejorar sus habilidades sociales.',
      notGoodFor: 'Quienes vean estos principios como manipulación.'
    }
  }
]