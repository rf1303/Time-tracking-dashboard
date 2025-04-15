document.addEventListener('DOMContentLoaded', function () {

    const cardsGrid = document.querySelectorAll('.card__grids');
    const buttonTimeframes = document.querySelectorAll('.user__timeframes')[0];
    const timeFramesItem = document.querySelectorAll('.timeframes__item');
    let datos = {};

    async function loadDatos() {
        try {
        const response = await fetch('../../data.json');
        datos = await response.json();
        
        } catch (error) {
        console.error("Error cargando datos.json:", error);
        }
    }
    loadDatos();

    buttonTimeframes.addEventListener('click', async (e) => {

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

              if (framesNumber.current == 103 && window.innerWidth > 650 && window.innerWidth < 1200) {
                numberCurrent.classList.add('numbers__current--103');
                } else {
                  numberCurrent.classList.remove('numbers__current--103');
                }

            numberCurrent.textContent= `${framesNumber.current}hrs`
            numberPrevious.textContent= `${framesNumber.previous}hrs`

        });
    });
});



