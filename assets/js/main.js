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
    /* const buttonTimeframes = document.querySelectorAll('.timeframes__item'); */
    const cardsGrid = document.querySelectorAll('.card__grids');
    const buttonTimeframes = document.querySelectorAll('.user__timeframes')[0];
    const timeFramesItem = document.querySelectorAll('.timeframes__item');
    let datos = {};

    async function cargarDatos() {
        try {
        const response = await fetch('../../data.json');
        datos = await response.json();
        
        } catch (error) {
        console.error("Error cargando datos.json:", error);
        }
    }
    cargarDatos();

    buttonTimeframes.addEventListener('click', async (e) => {

        console.log(buttonTimeframes); // boton padre

        if (e.target.tagName === "BUTTON") {
            timeFramesItem.forEach(b => b.classList.remove('timeframes__item--high'));
            e.target.classList.add('timeframes__item--high');
        }
        
        const framesName = e.target.dataset.action;

        datos.forEach((frames, titles) => {
            const framestitle = cardsGrid[titles];
            const framesNumber = frames.timeframes[framesName];
            const numberCurrent = framestitle.querySelector('.numbers__current');
            const numberPrevious = framestitle.querySelector('.previous__number');
            const previousTitle = framestitle.querySelector('.previous__title');

            switch (framesName) {
                case "daily":
                   previousTitle.textContent = `Yesterday` 
                    break;
                case "weekly":
                   previousTitle.textContent = `Last Week` 
                    break;
                case "monthly":
                   previousTitle.textContent = `Last Mounth` 
                    break;
                default:
                    break;
            }

            numberCurrent.textContent= `${framesNumber.current}hrs`
            numberPrevious.textContent= `${framesNumber.previous}hrs`

            console.log(`${framestitle}: `,  framesName,`: ${framesNumber.current}hrs (Prev: ${framesNumber.previous}hrs)`, `  `, titles);

        });

    // daily = yesterday 
    // week = last week
    // monthly = last mounth

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
