
const foodlink = document.querySelector('select[name="food"]');
const refrlink = document.querySelector('.content-block2');
const messlink = document.querySelector('.content-block3');

let count = 0;
let fullrefr = 0;

foodlink.addEventListener('change', (ev) => {

    let fooditem = foodlink.value;

    if(count > 5) {
        messlink.innerHTML = "Холодильник переполнен!"
        return;
    }

    if(fooditem === 'elefant') {
        fullrefr = 1;
    }

    if(fooditem === 'jirafe' && fullrefr == 1) {
        messlink.innerHTML = 'НЕТ МЕСТА! Вынь слона!!!'
        return;
    }

    else {
        let food = ' ' + fooditem;
        refrlink.insertAdjacentHTML('beforeend', food);
        refrlink.insertAdjacentHTML('beforeend', '<br>');
        count = count + 1;
    }

    

})



