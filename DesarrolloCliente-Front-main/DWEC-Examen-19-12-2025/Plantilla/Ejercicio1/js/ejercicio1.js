document.addEventListener("DOMContentLoaded", function () { 


    const activar = document.querySelector("[name='interviewMode']").checked;    

    if (activar){
        let imagenes = document.querySelectorAll(".profile-card"); 

          for (let i = 0; i < imagenes.length; i++) {

                const div=document.createElement("div");
                div.classList.add("bio-info");

                imagen = document.getElementsByTagName("img")
                const texto = imagen[i].getAttribute("data-bio");
                div.textContent = texto;
                imagen[i].append(div)

                imagen[i].addEventListener("mouseenter", cursorDentro(div));
                imagen[i].addEventListener("mouseenter", cursorFuera(div));
            }
        
    }

    function cursorDentro(div){
        div.style.display="flex"
    }
    function cursorFuera(div){
        div.style.display="none"
    }


})

