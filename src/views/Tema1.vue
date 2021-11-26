<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Transporte en cadena de frio

    .row.align-items-center.mb-5
      .col-lg-4
        p Para llevar un adecuado proceso en el transporte de los alimentos, se requiere cumplir con las normas y procedimientos que se instauran para la conservación de los alimentos y procesos de conservación, para lo que se hace necesario reconocer su manejo en el momento de recibirlo, transportarlo y entregarlo en su destino. 
        figure(data-aos='fade-right')
          img(src='@/assets/curso/t1/f1.png' alt='Imagen relacionada')
      .col-lg-8.order-lg-last.order-first
        figure(data-aos='fade-left')
          img(src='@/assets/curso/t1/f2.png' alt='Imagen relacionada')

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Cadena de frío

    p.mb-5 Es una serie de procesos logísticos tales como producción, almacenaje, distribución, embalaje, transporte, carga, descarga, comercialización de los productos y hasta llegar al consumidor final.

    .col-lg-10.mx-auto.mb-5
      img(src='@/assets/curso/t1/f3.svg' alt='Imagen relacionada' data-aos='fade-down').mb-4
      p.text-center En esta etapa, los productos deben permanecer bajo una temperatura definida, la cual debe ser controlada, debido a que:
      .cajon.color-secundario.p-4
        p.mb-0 El traslado de los productos bajo las condiciones de temperatura tiene como objetivo conservarlo y evitar o minimizar el riesgo de proliferación de bacterias que afectan la salud de los consumidores.

    TabsA.color-acento-contenido.mb-5 
      .tarjeta.tarjeta--azul.p-4(titulo='Manejo de mercancías en cadena de frío')
        .row.align-items-center
          .col-lg-8.mb-4
            h3 Manejo de mercancías en cadena de frío
            p El transporte de perecederos requiere de la implementación y estricto cumplimiento de temperaturas controladas en los vehículos que se utilizan, de esta manera se puede garantizar la inocuidad de los productos. La resolución 2505 de 2004 del Ministerio de Transporte reglamenta las condiciones que deben cumplir los vehículos que transportan alimentos perecederos.
          .col-lg-4.mb-4
            figure(data-aos='fade-left')
              img(src='@/assets/curso/t1/f4.svg' alt='Persona cargando caja al lado de un camión de transportes')
          .col-lg-5.mb-4(data-aos='fade-right')
            a.anexo.mb-4.mb-lg-0(href="https://web.mintransporte.gov.co/jspui/bitstream/001/3868/1/Resolucion_2505_2004.pdf" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p 
                  b Resolución 
                  | No. 002505 DE 2004
          .col-12
            p Para transportar carga refrigerada o congelada por vía terrestre, se deben tener en cuenta las siguientes recomendaciones:
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .tarjeta.tarjeta--azul.p-4(titulo='Alimento congelado y alimento refrigerado')
        h3 Alimento congelado y alimento refrigerado
        p A continuación se pueden reconocer las diferencias que existen entre un alimento congelado y uno refrigerado.
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/t1/f5.png', alt='')
            h3.text-center Alimento congelado
            p Un alimento congelado es cuando se expone a temperaturas bajas (enfriamiento) y sufre la acción de congelar, es decir, se solidifica al alcanzar una temperatura de -18°C o menos, según el alimento; a esta temperatura el alimento realiza cambios, se inactivan las enzimas y los microorganismos, se reduce la actividad del agua que posee porque se convierte en hielo y el alimento se conserva por más tiempo.
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/t1/f6.png', alt='')
            h3.text-center.cst Alimento refrigerado
            p.cst Un alimento refrigerado es el que se lleva a enfriamiento hasta una temperatura adecuada entre 4°C y +/- 2°C, para el almacenamiento, evitando llegar al punto de congelación.
      .tarjeta.tarjeta--azul.p-4(titulo='Temperaturas exigidas en el transporte')
        h3 Temperaturas exigidas en el transporte
        p Los transportadores de alimentos deben operar bajo condiciones de temperaturas reguladas, las cuales están dadas por la normatividad, para el caso, en la resolución 002505 de 2004 se estipulan las temperaturas mínimas y máximas según el tipo de alimento que se transporte, ver figura 1. 
        .col-lg-8.mx-auto
          .titulo-sexto.color-acento.contenido
            span 
              b Figura 1 
              | Lista de productos y temperaturas en transporte
          img(src='@/assets/curso/t1/f7.svg', alt='Lista de productos y temperaturas en transporte')
      .tarjeta.tarjeta--azul.p-4(titulo='Unidad de transporte, vehículo isotérmico y vehículo refrigerado')
        h3 Unidad de transporte, vehículo isotérmico y vehículo refrigerado
        p Se entiende como unidad de transporte el espacio de un vehículo destinado a la carga, para vehículos rígidos la unidad de transporte es la carrocería, para vehículos articulados es el semirremolque o el remolque. 
        p.text-center A continuación se presenta la diferencia entre un vehículo isotérmico y uno refrigerado.
        .row.justify-content-around
          .col-lg-5
            figure
              img(src='@/assets/curso/t1/f8.svg', alt='El vehículo isotérmico es la construcción que tiene la unidad de transporte, en paredes, techos, pisos y puertas que aísla y limita posibles intercambios de calor entre el exterior y el interior de la unidad de transporte.')
          .col-lg-5
            figure
              img(src='@/assets/curso/t1/f9.svg', alt='El vehículo refrigerado es aquel, al que es posible reducirle la temperatura al interior de la unidad de transporte, la temperatura puede llegar hasta -20°C, y esta se puede mantener incluso si la temperatura ambiente exterior es en promedio de 30°C.')
    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Requisitos de la unidad de transporte y controles
    
    .row.align-items-center.justify-content-around.mb-4
      .col-lg-7
        p Los requisitos registrados en la resolución 2505 de 2004, van dirigidos a las unidades de transporte de vehículos que realizan movilización de alimentos. Se invita a descargar la resolución para conocerlos.
        .col-lg-5.mb-4(data-aos='fade-right')
          a.anexo.mb-4.mb-lg-0(href="https://web.mintransporte.gov.co/jspui/bitstream/001/3868/1/Resolucion_2505_2004.pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p 
                b Resolución No. 
                | 002505 DE 2004 Art. Cuarto 
      .col-lg-3.order-first.order-lg-last
        figure(data-aos='fade-left')
          img(src='@/assets/curso/t1/f10.svg', alt='')
    
    p El control para que los transportadores de alimentos lo hagan bajo el cumplimiento de la normatividad estipulada por el Ministerio de Transporte, lo realizan las autoridades de tránsito y transporte, y estos pueden disponer del apoyo de las autoridades sanitarias cuando se considere necesario.
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
