const buttons = document.querySelectorAll('.btn');
const zon_text = document.getElementById('nbrs') ;

//permet affiche les buttons clicked dans la zone de text

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            zon_text.textContent += e.target.id ;
        });
    });
 
 //Afficher le resultat du calcule

    equal.addEventListener('click', () => {
        zon_text.textContent = eval(zon_text.textContent);
    });

// Suppression

     sup.addEventListener('click', () => {
       zon_text.textContent = "";
    }); 
