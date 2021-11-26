<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Buenas prácticas de manipulación

    .row.align-items-center.mb-5
      .col-lg-5.order-last.order-lg-first
        p Son todos los procedimientos que se deben llevar a cabo para tener bajo control los procesos con alimentos y de esta manera lograr alimentos inocuos en pro de la salud de los consumidores. Para lograrlo, las buenas prácticas de manipulación agrupan las normas que direccionan el alcanzar alimentos seguros, refiere a los operarios y a los procesos de fabricación o elaboración de alimentos. 
        p Las buenas prácticas de fabricación y manipulación de alimentos establecen las siguientes condiciones para los manipuladores, ver figura 2:

        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/t2/f1.svg' alt='a')
          .col
            p.mb-0 Buena higiene personal.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/t2/f2.svg' alt='b')
          .col
            p.mb-0 Buen estado de salud.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/t2/f3.svg' alt='c')
          .col
            p.mb-0 Lavado de manos de manera frecuente.
        hr
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          span 
            b Figura 2. 
            | Manipulación de alimentos

        figure
          img(src='@/assets/curso/t2/f4.png' alt='imagen relacionada')

    .col-lg-10.mx-auto.fcp20.p-5.mb-5
      h3 Vigilancia y control del transporte refrigerado
      p La resolución 2674 de 2013 establece que:
      .row.mb-4
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f5.svg' alt='1.	Corresponde a las autoridades sanitarias realizar actividades de inspección, vigilancia y control sobre el procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización, de los alimentos destinados al consumo humano, así como a las materias primas. ')
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f6.svg' alt='2.	Se definen como autoridades sanitarias el Instituto Nacional de Vigilancia de Medicamentos y Alimentos, las entidades territoriales de Salud.')
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f7.svg' alt='3.	Se define también que los vehículos que prestan servicio de transporte de alimentos, así como de materias primas, deben cumplir los requisitos sanitarios que garanticen la conservación y protección de estos, la autoridad sanitaria ejerce las acciones de inspección, vigilancia y control en garantía del cumplimiento de la normatividad.')
      .col-lg-9.mx-auto.mb-5
        .cajon.color-primario.p-4
          .row.align-items-center
            .col-lg-6
              p.mb-0 Para ampliar la información, se invita a descargar la resolución.
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://www.funcionpublica.gov.co/documents/418537/604808/1962.pdf/abe38fb4-e74d-4dcc-b812-52776a9787f6" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p 
                    b Resolución 
                    | 2674 de 2013
      h3 Requisitos de personal que manipulan los alimentos en cadena de frio
      p La resolución 2674 de 2013, refiere en el capítulo III art 11, art 12 y art 13 y art 14 del personal manipulador de alimentos lo siguiente:
      SlyderA(tipo="b")
        .row.align-items-center
          .col-lg-6
            p Disponer de certificación médica que haga constar la aptitud para la manipulación de alimentos, este certificado debe obtenerse de forma anual.
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f8.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p Si se presenta una ausencia del trabajo generada por infecciones y que esta pueda dejar secuelas que provoquen contaminación en los alimentos, se obtener otra certificación médica, si es necesario de deben aplicar pruebas de laboratorio, con el objeto de minimizar riesgos de contaminación.
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f9.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p Se debe garantizar por parte de la empresa el cumplimiento del tratamiento médico, los controles y la expedición de un nuevo certificado.
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f10.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p Es responsabilidad de la empresa adoptar medidas direccionadas a garantizar la no contaminación directa e indirecta de los alimentos por alguno de los colaboradores que padezca enfermedad que pueda ser transmitida por manipulación de estos, además trabajadores que presenten heridas infectadas, irritaciones de piel infectadas o diarreas, deben informar a la empresa de forma oportuna.
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f11.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p Educación sanitaria, principios de buenas prácticas de manufactura, prácticas higiénicas en manipulación de alimentos son capacitaciones que se les debe impartir a los manipuladores de alimentos, estas capacitaciones permiten que puedan tomar medidas de preventivas para evitar contaminación y deterioro de los alimentos. 
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f12.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p Los planes de capacitación para los manipuladores de alimentos deben de estar muy bien estructurados y la empresa debe garantizar que todos los manipuladores de alimentos reciban las capacitaciones, de tal manera evidencie a través del desempeño de los colaboradores y del cumplimiento de las condiciones sanitarias la efectividad del proceso de capacitación realizado. 
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f13.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p Los manipuladores de alimentos deben procurar las buenas prácticas y medidas de protección como estricta limpieza e higiene personal, que su vestido de trabajo cumpla con requisitos establecidos los cuales son color claro, con cierres o broches, no botones u accesorios que puedan caer a los alimentos, los delantales deben de ir atados al cuerpo de esta manera se evita contaminación y accidentes de trabajo, el vestuario es responsabilidad de la empresa. 
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f14.png' alt='imagen relacionada')
        .row.align-items-center
          .col-lg-6
            p No se puede salir del lugar de trabajo con el vestuario designado para trabajar, se debe lavas las manos con suficiente agua, jabón y desinfectante antes de comenzar su trabajo o después de salir y regresar al puesto de trabajo, o al manipular materiales diferentes, el cabello debe estar recogido y cubierto por una malla o gorra, no se puede usar maquillaje y para quienes lleven barba, bigote o patillas estas deben estar cubiertas, las uñas deben permanecer limpias, cortas y sin maquillaje, el calzado debe ser de material resistente, de tacón bajo y de material resistente. 
          .col-lg-6
            figure
              img(src='@/assets/curso/t2/f15.png' alt='imagen relacionada')

    .col-lg-10.mx-auto.fcp20.p-5.mb-5
      h3 Envasado y embalado
      p El capítulo IV de la resolución 2674 de 2013, establece los requisitos higiénicos de fabricación, y el artículo 16 refiere al proceso de recepción de mercancías con disposiciones como: 
      p Las materias primas y los insumos para la fabricación, preparación, procesamiento, envase y almacenamiento de alimentos deben tener los siguientes requisitos: 

      .bg1.p-4
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/t2/f16.svg' alt='1')
          .col
            p La recepción de insumos o materias primas debe llevarse a cabo en condiciones que eviten la contaminación, alteración y daños físicos, se deben identificar según la normatividad:
        .row.align-items-center.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/t2/f17.svg' alt='imagen relacionada').mb-4
            figure
              img(src='@/assets/curso/t2/f18.svg' alt='imagen relacionada')
          .col-lg-8
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Todos los insumos o materias primas deben tener ficha técnica, la cual se debe disponer en caso de ser requerida a la autoridad sanitaria.
              li 
                i.lista-ul__vineta
                | Se debe inspeccionar previo al uso todas las materias primas o los insumos y de ser necesario aplicar análisis de laboratorios para determinar la calidad.
              li 
                i.lista-ul__vineta
                | Para la limpieza de los insumos o materias primas se debe usar agua potable u otro medio adecuado de ser necesario.
              li 
                i.lista-ul__vineta
                | El descongelamiento de las materias primas e insumos debe de hacerse de manera controlada para evitar el desarrollo de microorganismos, no se pueden recongelar.
              li 
                i.lista-ul__vineta
                | Se debe evitar la contaminación o alteración de los insumos o materias primas que se deban almacenar antes de su uso, para ello el almacenamiento se debe hacer de lugares adecuados.
              li 
                i.lista-ul__vineta
                | Los productos terminados deben almacenarse en espacios independientes, excepto aquellos que la autoridad sanitaria determine que no presentan riesgos de contaminación.
              li 
                i.lista-ul__vineta
                | Se debe separar las zonas de recepción de materias primas e insumos de las zonas de producción y envasado. 

      .bg1.p-4
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/t2/f19.svg' alt='2')
          .col
            p Reunir los requisitos descritos a continuación para el proceso de envasado y embalaje:
        
        .row.align-items-center.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/t2/f20.svg' alt='imagen relacionada').mb-4
          .col-lg-7
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Los materiales con que son fabricados los envases y embalajes deben garantizar la inocuidad del alimento.
              li 
                i.lista-ul__vineta
                | Debe permitir protección adecuada contra la contaminación del alimento.
              li 
                i.lista-ul__vineta
                | No pueden haber sido utilizados antes con fines diferentes que puedan generar contaminación del alimento a envasar.
              li 
                i.lista-ul__vineta
                | Los envases que estén en contacto con los alimentos deben permanecer en buen estado y limpios, y deben estar desinfectados.
              li 
                i.lista-ul__vineta
                | Los envase y embalajes se deben acopiar en un lugar determinado para ello, bajo condiciones de limpieza y protegidos.

      .border12.fblanco.bcp.p-4
        .row.align-items-center
          .col-lg-7
            p Para finalizar, se conocerán cuáles son las condiciones para el transporte. El capítulo 7 de la ley 2674 de 2013 establece las orientaciones para el transporte de alimentos, así como de las materias primas e insumos. Es así como el transporte debe cumplir las siguientes condiciones:
          .col-lg-5.order-first.order-lg-last
            figure
              img(src='@/assets/curso/t2/f21.svg' alt='imagen relacionada')
      .border34.fcp.bcp
        SlyderA
          .text-white
            p Debe tener condiciones que impidan contaminación o proliferación de microorganismos, así como evitar alteraciones en los productos, daños en el envase o embalaje.
          .text-white
            p Los insumos o materias primas que por su naturaleza requieran mantenerse refrigerados o en su defecto congelados, se debe usar las condiciones que garanticen dichas condiciones, desde su origen hasta el destino.
          .text-white
            p Los sistemas de refrigeración o congelación de los medios de transporte utilizados deben garantizar el adecuado funcionamiento de los equipos.
          .text-white
            p Se deben garantizar las adecuadas condiciones sanitarias de los medios de transporte, así como su limpieza y desinfección.
          .text-white
            p Es permitido transportar de manera conjunta alimentos con diferentes riesgos, siempre que estén adecuadamente envasados y protegidos y se disminuya el riesgo de contaminación cruzada.
          .text-white
            p No se puede almacenar alimentos directamente en el piso de los vehículos, se deben usar canastillas, o elementos que aíslen de las posibilidades de contaminación.
          .text-white
            p Se tiene absoluta prohibición de trasladar alimentos y sustancias peligrosas u otras sustancias que presenten riesgo de contaminación en un mismo vehículo.
          .text-white
            p Se debe garantizar que los vehículos que transportan alimentos cumplan con todos los requisitos sanitarios establecidos en la normatividad colombiana.


</template>

<script>
export default {
  name: 'Tema2',
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
