const fooditem = document.querySelector('[select="food"]');

const run = () => {
    const foodid = fooditem.value;
    console.log(foodid);


    if(foodid === 'жираф') {
    contentblock3.innerHTML = 'Вынь слона!!!';
}

}

run();
fooditem.addEventListener('change', run);




