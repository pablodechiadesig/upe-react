<>
<header>
  <div className='barras'> 
    <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'>

    </button>
  </div>

  <nav id='menu' className='desplegable'>
    <ul>
      <li><a href={vacio}>Inicio</a></li>
      <li><a href={vacio}>Cursos</a></li>
      <li><a href={vacio}>Quiénes somos</a></li>
      <li><a href={vacio}>Login</a></li>
    </ul>
  </nav>
</header>

<main>
<section class="container about">
    <h2 class="subtitle"> ¿Qué Aprenderás con esta Plataforma?</h2>
    <p class="about_paragraph" > Todo lo necesario y obligatorio de acuerdo al curso
     en que estés </p>

     <div class="about_main">
     <article class="about_icons">
        {/*<img src={nivela2} className="about_icon" alt='Incono_nivel'> */}
        <h3 class="about_title">Curso de Nivelación</h3>
        <p class="about_paragraph">Este curso te ayudará a reforzar tus 
            conocimientos en física, trigonometría y álgebra, materias 
            fundamentales para la Ingeniería. Esto te permitirá arrancar con 
            el pie derecho y aprovechar al máximo todas las oportunidades
             que te ofrece la Ingeniería Electromecánica</p>
    </article>
     </div>
</section>


</main>

</>