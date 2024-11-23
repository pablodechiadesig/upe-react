import React from 'react'




 export function Upe() {
  return (
    <div>
        <>
       <header className='hero'>
          
          <nav className='nav_container'>
            <div className='nav_logo'>
              <h2 className='nav_title'>
                UPE Aprende
              </h2>

            </div>

            <ul className="nav_link nav_link--menu">
                <li className="nav_items"><a href="#" className="nav_links">Inicio</a>
                </li>              
                <li className="nav_items">
                    <a href="#" class="nav_links">Acerca de</a>
                </li>
                <li className="nav_items">
                    <a href="#" class="nav_links">Contacto</a>
                </li>
                <li className="nav_items">
                    <a href="#" class="nav_links">Blog</a>
                   {/*  <img src={menuImage2} alt="" className="nav_close"/>*/}
                </li>
                
           </ul>

           <div className="nav_menu">
               {/* <img src={menuImage} className="nav_img" alt="Menú"/>*/}
               
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
      
     
     
     </>

        







    </div>
  )
};


