function App() {


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
      
      
      })();

      /*--Fin de la Funcion para cambiar Testimonios */


      /*Función para Preguntas Frecuentes*/

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


      /*Fin Función Preguntas Frecuentes*/
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
   

  }
  

}


/*Solución Propuesta por Gemini

function App() {
  const slidersRef = useRef(null); // Ref para almacenar los sliders

  useEffect(() => {
    const sliders = slidersRef.current.querySelectorAll('.testimonio_body');
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');   


    const changePosition = (add) => {
      const currentTestimony = document.querySelector('.testimonio_body--show').dataset.id;
      let value = Number(currentTestimony);
      value += add;

      if (value === sliders.length + 1 || value === 0) {
        value = value === 0 ? sliders.length : 1;
      }

      sliders[Number(currentTestimony) - 1].classList.remove('testimonio_body--show');   

      sliders[value - 1].classList.add('testimonio_body--show');
    };

    buttonNext.addEventListener('click', () => changePosition(1));
    buttonBefore.addEventListener('click', () => changePosition(-1));

    // Limpiar event listeners al desmontar el componente
    return () => {
      buttonNext.removeEventListener('click', () => changePosition(1));
      buttonBefore.removeEventListener('click', () => changePosition(-1));
    };
  }, [slidersRef]);  // Dependencia del ref






*/





