import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'; 

import { useRef } from 'react';
import {Upe} from './componentes/Upe';  
import ima_close from './Imagenes/close.svg';
import ima_menu from './Imagenes/menu.svg';
import ima_nevela2 from './Imagenes/nivela_2.svg';
import ima_matepro from './Imagenes/mate_pro.svg';
import ima_cienciasbas from './Imagenes/ciencias_bas.svg';
import ima_aluestudi from './Imagenes/alu_estudiando.jpg';
import ima_flecha_izq from './Imagenes/flecha_izq.svg';
import ima_claudio2 from './Imagenes/claudio_2.jpg';
import ima_estudiante1  from './Imagenes/estudiante_1.jpg';
import ima_estudiante2 from './Imagenes/estudiante_2.jpg';
import ima_right_arrow from './Imagenes/right_arrow.svg';
import ima_chevron_arrib from './Imagenes/chevron_arrib.svg';
import imag_face_redon from './Imagenes/facebook_redon.svg';
import ima_twiter from './Imagenes/twetter.svg';
import ima_istag from './Imagenes/istagram.svg';
let vacio='';


function App() {


    /*Función para gestionar el clic en el Menu hamburguer 

    
    (function(){
        const openButton = document.querySelector('.nav_menu');
        const menu = document.querySelector('.nav_link');
        const closeMenu =document.querySelector('.nav_close');


        openButton.addEventListener('click', () =>{
           alert('por lo menos un poco mejor mba!');
            menu.classList.add('.nav_link--show');
        });
        
        closeMenu.addEventListener('click', () =>{
            openButton.classList.remove('.nav_link--show');

        });


     
     })();
   
Fin de la funcion para genstionar menu hamburguesa*/
    
    
    
    
      
    useEffect(() => {

        
    /*--Funcion para cambiar Testimonios */
    (function(){
        const sliders=[...document.querySelectorAll('.testimonio_body')];
        const buttonNext =document.querySelector('#next');
        const buttonBefore =document.querySelector('#before');
        //console.log(sliders);
        let value;
        buttonNext.addEventListener('click', ()=>{
          changePosition(1);
      
        });
      
        buttonBefore.addEventListener('click', ()=>{
          changePosition(-1);
      
        });
      
        const changePosition = (add)=>{
          const currentTestimony = document.querySelector('.testimonio_body--show').dataset.id; 
          value =Number(currentTestimony);
          value+=add;
          //console.log(value);
          sliders[Number(currentTestimony)-1].classList.remove('testimonio_body--show');
          if(value===sliders.length+1|| value===0){
              value = value ===0 ? sliders.length : 1;
      
          } 
         sliders[value-1].classList.add('testimonio_body--show');
        }
       /* fin de la funcion de testimonios */


        /* Inicio del codigo preguntas frecuentes */
        const titleCuestions =[...document.querySelectorAll('.cuestions_title')];
       
         titleCuestions.forEach(cuestions =>{
            cuestions.addEventListener('click', ()=>{
                let height =0;
                let answer = cuestions.nextElementSibling;                
                let addPadding = cuestions.parentElement.parentElement;
                addPadding.classList.toggle('cuestions_padding--add');
                cuestions.children[0].classList.toggle('cuestions_arrow--rotate');
        
                if(answer.clientHeight === 0){
                    height = answer.scrollHeight;
        
                }
        
                answer.style.height = `${height}px`;
        
            }) 
        
        
         });

        /* fin del codigo preguntas frecuentes */



        /*Inicio del Codigo para menu hamburguesa */
        const openButton = document.querySelector('.nav_menu');
        const menu = document.querySelector('.nav_link');
        const closeMenu =document.querySelector('.nav_close');


        openButton.addEventListener('click', () =>{
           menu.classList.add('nav_link--show');
        });
        
        closeMenu.addEventListener('click', () =>{
          menu.classList.remove('nav_link--show');

        });

        /*Fin del codigo para menu hamburguesa */





     })();
     

      
}, []); 








      /*--Fin de la Funcion para cambiar Testimonios */


      /*Función para Preguntas Frecuentes

      (function(){
        const titleCuestions =[...document.querySelectorAll('.cuestions_title')];
       // console.log(titleCuestions);
        titleCuestions.forEach(cuestions =>{
           cuestions.addEventListener('click', ()=>{
               let height =0;
               let answer = cuestions.nextElementSibling;
               //console.log(cuestions.children[2]);
               let addPadding = cuestions.parentElement.parentElement;
               addPadding.classList.toggle('cuestions_padding--add');
               cuestions.children[0].classList.toggle('cuestions_arrow--rotate');
       
               if(answer.clientHeight === 0){
                   height = answer.scrollHeight;
       
               }
       
               answer.style.height = `${height}px`;
       
           }) 
           //me quedé en 1:29:18 rotar la flecha
       
        });
       })(); 


      Fin Función Preguntas Frecuentes*/




      
  /*const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');

  }*/
  return (
    
     <>
       
       <header className='hero'>

       <nav className='nav_container'>
            <div className='nav_logo'>
              <h1 className='nav_title'>
                UPE Aprende
              </h1>

            </div>

            <ul className="nav_link nav_link--menu">
                <li className="nav_items">
                    <a href="#" className="nav_links">Inicio</a>
                </li>              
                <li className="nav_items">
                    <a href="#" className="nav_links">Acerca de</a>
                </li>
                <li className="nav_items">
                    <a href="#" className="nav_links">Contacto</a>
                </li>
                <li className="nav_items">
                    <a href="#" className="nav_links">Blog</a>
                   <img src={ima_close} alt="" className="nav_close"/>
                </li>
                
           </ul>

           <div className="nav_menu">
                <img src={ima_menu} className="nav_img" alt="Menú"/>
               
             </div>
          </nav>
         
          <section className="hero_container container">
            <h1 class="hero_title">Domina la Ingeniería Electromecánica</h1>
            <p class="hero_paragraph">¡Descubre una nueva forma de aprender! Nuestra plataforma te ofrece un espacio 
            personalizado donde podrás profundizar en cada tema a tu propio ritmo. Con videos 
            explicativos, ejercicios interactivos y seguimientos personalizados, tendrás todas 
            las herramientas para alcanzar tus metas académicas. ¡Domina cada concepto y conviértete
            en un experto en Ingeniería Electromecánica!</p>
            <a href="#" class="cta">Comienza Ahora </a>
        </section>


       </header>

       <main>
       <section class="container about">
        <h2 class="subtitle"> ¿Qué Aprenderás con esta Plataforma?</h2>
        <p class="about_paragraph" > Todo lo necesario y obligatorio de acuerdo al curso
             en que estés </p>
        <div class="about_main">
            <article class="about_icons">
                <img src={ima_nevela2} class="about_icon"/>
                <h3 class="about_title">Curso de Nivelación</h3>
                <p class="about_paragraph_1">Este curso te ayudará a reforzar tus 
                    conocimientos en física, trigonometría y álgebra, materias 
                    fundamentales para la Ingeniería. Esto te permitirá arrancar con 
                    el pie derecho y aprovechar al máximo todas las oportunidades
                     que te ofrece la Ingeniería Electromecánica</p>
            </article>
            <article class="about_icons">
                <img src={ima_matepro} class="about_icon"/>
                <h3 class="about_title">Ciencias Básicas</h3>
                <p class="about_paragraph">Las asignaturas básicas (matemáticas, física,
                     química) son el cimiento de tu formación como Ingeniero Electromecánico.
                     Estas te proporcionarán las herramientas teóricas fundamentales.</p>
            </article>
            <article class="about_icons">
                <img src={ima_cienciasbas} class="about_icon"/>
                <h3 class="about_title">Materias Profesionales</h3>
                <p class="about_paragraph">Las asignaturas profesionales (electrónica, mecánica,
                     automatización), te permitirán aplicar tus conocimientos en proyectos reales.
                     Con ellas podrás desarrollar las habilidades necesarias para diseñar y 
                     construir sistemas electromecánicos innovadores</p>
            </article>
        </div>
     </section>


         {/* sección de Knowlege */}
     <section class="knowledge">
        <div class="knowledge_container container">
           <div class="knowledge_texts">
              <h2 class="subtitle">Tu plataforma Upe Aprende. </h2>
              <h3 class="subtitle_2">Conecta, comparte,
                crece</h3>
              <p class="knowledge_paragraph">Con UPE Aprende, tendrás acceso a una 
                herramienta poderosa que te permitirá aprender de manera más efectiva
                 y eficiente. Podrás acceder a recursos de calidad, interactuar con 
                 tus compañeros y profesores, y realizar un seguimiento de tu
                  progreso académico. ¡Es el futuro de la educación en Ingeniería 
                  Electromecánica!</p>
             <a href="#" class="cta">Entra al Curso</a>
           </div>
           <figure class="knowledge_picture">
            <img src={ima_aluestudi} class="knowledge_img"/>
           </figure>
        </div>

     </section>

     <section class="cuestion_offer">
        <div class="cuestion_container container">
            <div class="cuestion_texts">
                <h2 class="subtitle">¿Estás listo para aprender?</h2>
                <p class="cuestion_paragraph">¡Estás a un clic de un mundo de conocimiento!
                    Nuestra plataforma te brinda las herramientas para que construyas tu 
                     propio aprendizaje. Explora, experimenta y descubre todo lo que la 
                    ciencia y la tecnología tienen para ofrecerte. ¿Listo para embarcarte en
                     esta aventura?</p>
                <a href="" class="cta_2">Empezar</a>
            </div>
        </div>
        
  
     </section>

     <section class="testimonio">
        <div class="testimonio_container container">
            
            <img src={ima_flecha_izq} class="testimonio_awr" id="before"/>
            <section class="testimonio_body testimonio_body--show" data-id="1">
                <div class="testimonio_text">
                    <h1 class="testimonio_Titulo"> Testimonio de Nuestros Estudiantes</h1>
                    <h2 class="subtitle">Mi nombre es Claudio, <span class="testimonio_course">Estudiante del Curso Nivelatorio</span> </h2>
                    <p class="testimonio_review">Antes de iniciar la carrera de Ingeniería Electromecánica, tenía algunas dudas sobre si mis conocimientos matemáticos y físicos serían suficientes. Sin embargo, el curso de nivelación me brindó las herramientas necesarias para sentirme seguro y preparado. Los profesores explicaron los conceptos de manera clara y concisa, y los ejercicios prácticos me permitieron afianzar los conocimientos. Gracias a este curso, inicio esta nueva etapa con mucha ilusión y optimismo. ¡Recomiendo ampliamente el curso de nivelación a todos los futuros ingenieros electromecánicos! </p>
                </div>
                <figure class="testimonio_picture">
                    <img src={ima_claudio2} class="testimonio_img"/>
                </figure>
            </section>

            <section class="testimonio_body"  data-id="2">
                <div class="testimonio_text">
                    <h1 class="testimonio_Titulo"> Testimonio de Nuestros Estudiantes</h1>
                    <h2 class="subtitle">Mi nombre es Alejandra, <span class="testimonio_course">Estudiante del Tercer año</span> </h2>
                    <p class="testimonio_review"> Estoy encantada con mi elección de estudiar Ingeniería Electromecánica. Desde que ingresé a la facultad, me he sentido muy respaldada por el equipo docente. Las clases son dinámicas y los profesores siempre están dispuestos a resolver nuestras dudas. Lo que más me gusta es la combinación de teoría y práctica, ya que nos permite aplicar los conocimientos adquiridos en proyectos reales. Además, el ambiente de estudio es muy colaborativo, lo que fomenta el aprendizaje entre compañeros. ¡Sin duda, estoy construyendo una sólida base para mi futuro profesional!"</p>
                </div>
                <figure class="testimonio_picture">
                    <img src={ima_estudiante1} class="testimonio_img"/>
                </figure>
            </section>

            <section class="testimonio_body"  data-id="3">
                <div class="testimonio_text">
                    <h1 class="testimonio_Titulo"> Testimonio de Nuestros Estudiantes</h1>
                    <h2 class="subtitle">Mi nombre es Alex, <span class="testimonio_course">Egresado de la Carrera</span> </h2>
                    <p class="testimonio_review">Elegir la carrera de Ingeniería Electromecánica fue una de las mejores decisiones de mi vida. La formación que recibí en la facultad me proporcionó una base sólida en conocimientos teóricos y prácticos que me han sido de gran utilidad en mi desarrollo profesional. Los proyectos que realizamos durante la carrera me permitieron aplicar los conceptos aprendidos en situaciones reales y desarrollar habilidades como el trabajo en equipo y la resolución de problemas.
                        Los conocimientos adquiridos en la facultad me han permitido adaptarme rápidamente a los desafíos de mi trabajo y aportar soluciones innovadoras. Estoy muy satisfecho con mi carrera y recomiendo a todos los jóvenes que estén interesados en la ingeniería a que se animen a estudiar esta apasionante disciplina. La formación en ingeniería no solo te abre puertas en el mundo laboral, sino que también te brinda las herramientas necesarias para enfrentar los retos del futuro y contribuir al desarrollo de nuestra sociedad.
                         </p>
                </div>
                <figure class="testimonio_picture">
                    <img src={ima_estudiante2} class="testimonio_img"/>
                </figure>
            </section>

            <img src={ima_right_arrow} class="testimonio_awr" id="next"/>

          </div>
        </section>

        {/*--Sección de Preguntas Frecuecuentes */}

        <section class="cuestions container">
        <h2 class="subtitle">Preguntas frecuentes</h2>
        <p class="cuestions_paragraph"n>Aquí respondemos a algunas de tus posibles inquietudes</p>
        <section class="cuestions_container">
            <article  className="cuestions_padding">
                <div  className="cuestions_answer">

                    <h3 class="cuestions_title">
                        1. ¿Cuáles son las principales salidas laborales de un Ingeniero Electromecánico?
                        <span class="cuestions_arrow">
                            <img src={ima_chevron_arrib} class="cuestions_img"/>
                        </span>
                    </h3>
                    <p className="cuestions_show">La Ingeniería Electromecánica ofrece un amplio abanico de oportunidades laborales. Nuestros egresados se desempeñan en diversos sectores, como:<span><br /></span>

                    •	<strong>Industria:</strong> En la fabricación, mantenimiento y optimización de maquinaria y equipos industriales.<span><br /></span>
                        •	<strong>Energías renovables: </strong>En el diseño e implementación de sistemas de generación y distribución de energía limpia.<span><br /></span>
                        •	<strong>Automatización:</strong> En la programación y control de procesos industriales.<span><br /></span>
                        •	<strong>Automoción:</strong> En el desarrollo de vehículos eléctricos y sistemas de control vehicular.<span><br /></span>
                        •	<strong>Consultoría:</strong> Brindando asesoramiento técnico en proyectos de ingeniería.
                        

                    </p>

                </div>

            </article>

            <article class="cuestions_padding">
                <div class="cuestions_answer">
                    <h3 class="cuestions_title">
                       2. ¿Qué habilidades desarrollaré estudiando Ingeniería Electromecánica?
                        <span class="cuestions_arrow">
                            <img src={ima_chevron_arrib} class="cuestions_img"/>
                        </span>
                    </h3>
                    <p class="cuestions_show">Además de los conocimientos técnicos en electricidad, mecánica y electrónica, nuestra carrera te permitirá desarrollar habilidades clave para el éxito profesional, como:<span><br /></span>
                        •	<strong>Resolución de problemas:</strong> Aprenderás a analizar situaciones complejas y encontrar soluciones eficientes.<span><br /></span>
                        •	<strong>Trabajo en equipo: </strong>Desarrollarás la capacidad de colaborar con otros profesionales en proyectos multidisciplinarios.<span><br /></span>
                        •	<strong>Pensamiento crítico:</strong>  Adquirirás la habilidad de evaluar información y tomar decisiones fundamentadas.<span><br /></span>
                        •	<strong>Creatividad:</strong>Fomentarás tu capacidad de innovar y diseñar nuevas soluciones.
                        
                        </p>
                </div>
            </article>

            <article class="cuestions_padding">
                <div class="cuestions_answer">
                    <h3 class="cuestions_title">
                        3. ¿Qué requisitos debo cumplir para ingresar a la carrera de Ingeniería Electromecánica?
                        <span class="cuestions_arrow">
                            <img src={ima_chevron_arrib} class="cuestions_img"/>
                        </span>
                    </h3>
                    <p class="cuestions_show">Para ingresar a nuestra carrera, generalmente se requiere:<span><br /></span>
                       <strong>•	Haber completado la educación secundaria.</strong> <span><br /></span>
                       <strong>•	Aprobar un examen de admisión.</strong>  <span><br /></span>
                       <strong>•	Cumplir con los requisitos específicos de la institución.</strong> <span><br /></span>
                        Te recomendamos que te pongas en contacto con nuestra oficina de admisiones para obtener información detallada sobre el proceso de inscripción y los requisitos particulares de este año.<span><br /></span>
                       <strong>• Contacto:</strong>  Sr. Hugo Villalba, Secretario Académico (0993)277681
                        
                        </p>
                </div>
            </article>
           
        </section>
     </section>

       </main>


      {/*------Comienzo del Footer Ultima Sección*/ }

       <footer className="footer">
     <section className="footer_container container">
        <nav className="nav nav_footer">
            <h2 className="footer_title">UPE Aprende, tu camino al conocimiento</h2>
             {/*<!-- <h3 class="footer_title_2">Tu camino al conocimiento </h3> -->*/}
            <ul className="nav_link nav_link--footer">
                <li className="nav_items"><a href="#" class="nav_links">Inicio</a>
                </li>              
                <li className="nav_items">
                    <a href="#" class="nav_links">Acerca de</a>
                </li>
                <li className="nav_items">
                    <a href="#" class="nav_links">Contacto</a>
                </li>
                <li className="nav_items">
                    <a href="#" class="nav_links">Blog</a>
                    
                </li>
            </ul>

        </nav>

        <form className="footer_form">
        <div className="footter_inputs">
           <input type="email" placeholder="email" className="footer_input"/>
           <input type="submit" value="Regístrate" className="footer_submit"/>

        </div>

        </form>
   </section>

   <section className="footer_copy container">
        <div className="footer_social">
            <a href="#" className="footer_icons">
                <img src={imag_face_redon} className="footer_img" />
                </a>
            <a href="#" className="footer_icons">
                <img src={ima_twiter} className="footer_img" />
                </a>
            <a href="#" className="footer_icons">
                <img src={ima_istag} className="footer_img" />
                </a>
        </div>
        <h3 className="footer_copyright">UPE Franco &copy; Sabiduría es Libertad! </h3>
     </section>
   </footer>

       
     </>


  );
}

export default App;
