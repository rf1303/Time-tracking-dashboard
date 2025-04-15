let datos = {};
async function cargarDatos() {
    try {
    const response = await fetch('../../data.json');
    let datos = await response.json();
    console.log("DATOS con await:", datos);
    } catch (error) {
    console.error("Error cargando datos.json:", error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    
    cargarDatos();
    console.log('Datos des DOM : ', datos);
    // const fetch = fetch("../../data.json",);
    // fetch('../../data.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         datos = data;
    //         console.log(data);
    //         console.log(datos);
    //     })
    //     .catch(error => console.error("Error cargando datos.json:", error));
    // console.log("DATOS : ", datos);

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


//
// console.log(fetchPromise);
//
// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");
//
// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });



    // daily = yesterday 
    // week = last week
    // monthly = last mounth
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
