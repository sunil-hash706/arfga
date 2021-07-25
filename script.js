document.onkeydown = function(e){
    console.log("keycode is ", e.keyCode);
    if(e.keyCode == 39){
        car = document.querySelector('.car');
        car.classList.add('animatedcar');
         setTimeout(() => {
            car.classList.remove('animatedcar');
         }, 1000);
    }
    if(e.keyCode == 37){
        car = document.querySelector('.car');
        car.classList.add('animatedcar1');
        setTimeout(() => {
            car.classList.remove('animatedcar1');
         }, 1000);
    }
}
setInterval(() => {
    car = document.querySelector('.car');
    car1 = document.querySelector('#carfor1');
    car2 = document.querySelector('#carfor2');
    cx = parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));

    c1x = parseInt(window.getComputedStyle(car1,null).getPropertyValue('left'));
    c1y = parseInt(window.getComputedStyle(car1,null).getPropertyValue('bottom'));

    c2x = parseInt(window.getComputedStyle(car2,null).getPropertyValue('left'));
    c2y = parseInt(window.getComputedStyle(car2,null).getPropertyValue('bottom'));

    offsetx1 = Math.abs(cx-c1x);
    offsety1 = Math.abs(cy-c1y);

    offsetx2 = Math.abs(cx-c2x);
    offsety2 = Math.abs(cy-c2y);

    if(offsetx1<100 && offsety1 <100 &&offsetx2<100&&   offsety2<100)
    {
        car.style.visibility = 'hidden';
    }
}, 100);