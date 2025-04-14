document.addEventListener('DOMContentLoaded', function () {
  
    console.log("Inicio");

    /* const buttonTimeframes = document.querySelectorAll('.timeframes__item'); */
    const buttonTimeframes = document.querySelectorAll('.user__timeframes')[0];

    buttonTimeframes.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            console.log(e.target.innerText);
            console.log(e.target.dataset.action);
        }
    });




    // buttonTimeframes.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //         /* let highLight =  e.target.dataset.action; */
    //         if (e.target.tagName === "BUTTON") {
    //             console.log(e.target.innerText);
    //         }
    //     });
    // });


    /* console.log(buttonTimeframes.data); */
});
