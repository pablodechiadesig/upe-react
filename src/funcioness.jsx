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
      
        /* Código para Preguntas Frecuentes

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
         Fin Preguntas Frecuentes*/





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

