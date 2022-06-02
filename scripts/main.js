
const foodlink = document.querySelector('select[name="food"]');
const refrlink = document.querySelector('.content-block2');
const messlink = document.querySelector('.content-block3');

let count = 0;
let fullrefr = 0;

foodlink.addEventListener('click', (ev) => {

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
        refrlink.insertAdjacentHTML = ('afterend', fooditem);
        refrlink.innerHTML = fooditem;
        count = count + 1;
    }

    console.log(count);

})



