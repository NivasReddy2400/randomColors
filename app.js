const colors = ["red","blue","green","yellow","grey","purple","orange","crimson"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let randomNum = randomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
})

function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}