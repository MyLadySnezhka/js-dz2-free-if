
const foodlink = document.querySelector('select[name="food"]');
const refrlink = document.querySelector('.content-block2');

foodlink.addEventListener('click', (ev) => {

    let fooditem = foodlink.value;

    if (fooditem === 'jirafe') {
    refrlink.innerHTML = 'НЕТ МЕСТА! Вынь слона!!!'
    }

console.log(fooditem);

})



