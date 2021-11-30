export default {
  global: {
    componenteFormativo: 'Manipulación y distribución segura de carga',
    descripcionCurso:
      'En este componente el aprendiz reconocerá la importancia de aplicar los procesos de manipulación de alimentos con rigurosidad y desde su quehacer aportar de manera positiva en la economía del país y  al bienestar de la población, entregando productos que cumplen con los estándares de calidad para la producción, el procesamiento de alimentos y el consumo de estos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Transporte en cadena de frio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cadena de frio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Requisitos de la unidad de transporte y controles',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Buenas prácticas de manipulación',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Resolución 2505 de 2004. [Ministerio de Transporte]. Por la cual se reglamentan las condiciones que deben cumplir los vehículos para transportar carne, pescado o alimentos fácilmente corruptibles. 6 septiembre de 2004. ',
      link:
        'https://web.mintransporte.gov.co/jspui/bitstream/001/3868/1/Resolucion_2505_2004.pdf',
    },
    {
      referencia:
        'Procolombia. (2014). Logística de Perecederos y Cadena de Frio en Colombia. Procolombia.',
    },
    {
      referencia:
        'Resolución 2674 de 2013. [Ministerio de protección social]. Por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones.  22 de julio de 2013). ',
      link:
        'https://www.invima.gov.co/documents/20143/441790/2674.pdf/8b63e134-a442-bae3-4abf-9f3270451c67',
    },
    {
      referencia:
        'Subdirección de Salud Nutricional, Alimentos y Bebidas. (2017). Guía de inocuidad de alimentos y bebidas para la actividad del transporte. Minsalud.',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'Producto que después de ingerido, aporta al cuerpo nutrientes necesarios para la realización procesos biológicos.',
    },
    {
      termino: 'Autoridad Sanitaria',
      significado:
        'Entidad habilitada legalmente para controlar actividades de producción de productos aptos para el consumo humano.',
    },
    {
      termino: 'Buenas prácticas de higiene',
      significado:
        'Condiciones que garantizan la salubridad e inocuidad de los alimentos durante la cadena de producción.',
    },
    {
      termino: 'Congelación',
      significado:
        'Exponer un alimento a temperaturas inferiores a -0°C y solidificar el agua que contiene y conservarlo en buenas condiciones por más tiempo.',
    },
    {
      termino: 'Control',
      significado:
        'Validación de que se cumple las instrucciones, orientaciones, disposiciones o normas.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso químico aplicado a superficies limpias con el objeto de eliminar microorganismos.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Elementos que se usan para proteger el envase primarios de un producto.',
    },
    {
      termino: 'Inocuidad de los Alimentos',
      significado:
        'Es la garantía de que los alimentos que se consumen no van a causar daño alguno.',
    },
    {
      termino: 'Invima',
      significado:
        'Instituto Nacional de Vigilancia de Alimentos y Medicamentos.',
    },
    {
      termino: 'Materia Prima',
      significado:
        'Insumos empleados para la producción de un elemento o alimento apto para consumo humano.',
    },
    {
      termino: 'Medio de transporte',
      significado:
        'Es el vehículo que se usa para trasladar mercancías de un lugar de origen a un destino determinado, para el caso transporte de alimentos.',
    },
    {
      termino: 'Perecedero',
      significado:
        'Productos que expuestos a sufrir el crecimiento de microorganismos que lo contaminan y no es apto para el consumo.',
    },
    {
      termino: 'Temperatura exigida de transporte',
      significado:
        'Según las reglamentaciones sanitarias es la temperatura que se debe disponer para trasladar un alimento o producto.',
    },
  ],
  complementario: [
    {
      texto:
        'Procolombia. (2014). Logística de perecederos y cadena de frío en Colombia.',
      tipo: 'PDF',
      link:
        'https://procolombia.co/sites/all/modules/custom/mccann/mccann_ruta_exportadora/files/06-cartilla-cadena-frio.pdf',
    },
    {
      texto:
        'Resolución 2674 del 2013. [Ministerio de Salud y Protección Social]. Por la cual se reglamenta el artículo 126 del Decreto-ley 019 de 2012 y se dictan otras disposiciones. 22 de julio de 2013.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/documents/418537/604808/1962.pdf/abe38fb4-e74d-4dcc-b812-52776a9787f6',
    },
    {
      texto:
        'Subdirección de Salud Nutricional, Alimentos y Bebidas. (2017). Guía de inocuidad de alimentos y bebidas para la actividad de transporte.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-transporte.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gloria Liliana García Marín',
        cargo: 'Experta temática',
        centro: 'Centro de la Industrial y los servicios - Regional Santander',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Márquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
