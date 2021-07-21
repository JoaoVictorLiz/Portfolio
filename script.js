const overlay = document.querySelector('.overlay');

window.addEventListener('load', function(){
    overlay.style.display = 'none';
})

let text = document.getElementById('text')
let txtc = document.getElementById('txtc')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.marginRight = value * 0 + 'px';
    txtc.style.marginRight = value * 30 + 'px';

})



