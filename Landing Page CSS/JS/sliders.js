(function(){
    // Selecciona todos los elementos con la clase 'testimony-body' y los almacena en un array.
    const sliders = [...document.querySelectorAll('.testimony-body')];
    
    // Selecciona el elemento con el ID 'next' y lo almacena en la variable buttonNext.
    const buttonNext = document.querySelector('#next');
    
    // Selecciona el elemento con el ID 'before' y lo almacena en la variable buttonBefore.
    const buttonBefore = document.querySelector('#before');

    // Declaración de la variable 'value'.
    let value;

    // Agrega un event listener al botón 'Next' que llama a la función changePosition con el argumento 1.
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    // Agrega un event listener al botón 'Before' que llama a la función changePosition con el argumento -1.
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    // Definición de la función changePosition que toma un argumento 'add'.
    const changePosition = (add)=>{
        // Obtiene el elemento con la clase 'testimony-body--show', accede al atributo 'data-id' y lo almacena en currentTestimony.
        const currentTestimony = document.querySelector('.testimony-body--show').dataset.id;
        
        // Convierte currentTestimony a un número y lo almacena en la variable 'value'.
        value = Number(currentTestimony);
        
        // Añade 'add' al valor actual de 'value'.
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony-body--show');

        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony-body--show');

       
    }
    
})();
