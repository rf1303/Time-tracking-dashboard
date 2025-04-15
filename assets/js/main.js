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

document.addEventListener('DOMContentLoaded', function () {
    
    
    let datos = {};
    /* const buttonTimeframes = document.querySelectorAll('.timeframes__item'); */
    const buttonTimeframes = document.querySelectorAll('.user__timeframes')[0];
    const timeFramesItem = document.querySelectorAll('.timeframes__item');

    buttonTimeframes.addEventListener('click', (e) => {

        console.log(buttonTimeframes); // boton padre

        if (e.target.tagName === "BUTTON") {
            timeFramesItem.forEach(b => b.classList.remove('timeframes__item--high'));
            e.target.classList.add('timeframes__item--high');
        }
        
        const timeFramesName = e.target.dataset.action;

        async function cargarDatos() {
            try {
            const response = await fetch('../../data.json');
            datos = await response.json();
            console.log("DATOS con await:", datos);

            const arrays = datos.filter(frames =>  {
                return  frames.timeframes[timeFramesName];
            });

             datos.forEach(frames => {
                const tf = frames.timeframes[timeFramesName]; // ejemplo: "weekly"
                 console.log(`${tf.title}: ${tf.current}hrs (Prev: ${tf.previous}hrs)`);
            });
            console.log('nombre a cambiar : ', timeFramesName);
            console.log('El cambio es: ', arrays)
            console.log('El cambio es: ',timeObj);

            } catch (error) {
            console.error("Error cargando datos.json:", error);
            }
        }
        cargarDatos();

    });
   

    // function newTimeFrames(timeName) {
    // }

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
