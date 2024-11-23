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
      <input type="email" placeholder="email" class="footer_input"/>
      <input type="submit" value="Regístrate" class="footer_submit"/>

   </div>

   </form>
</section>

<section className="footer_copy container">
   <div class="footer_social">
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
   <h3 class="footer_copyright">UPE Franco &copy; Sabiduría es Libertad! </h3>
</section>
</footer>
