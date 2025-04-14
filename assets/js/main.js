document.addEventListener('DOMContentLoaded', function () {
  
    console.log("Inicio");

    /* const buttonTimeframes = document.querySelectorAll('.timeframes__item'); */
    const buttonTimeframes = document.querySelectorAll('.user__timeframes')[0];
    const timeFramesItem = document.querySelectorAll('.timeframes__item');

    buttonTimeframes.addEventListener('click', (e) => {
        console.log(buttonTimeframes);
        if (e.target.tagName === "BUTTON") {
            timeFramesItem.forEach(b => b.classList.remove('timeframes__item--high'));
            e.target.classList.add('timeframes__item--high');
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
