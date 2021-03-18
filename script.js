var click = document.getElementById('box');
var count = document.getElementById('click');
var c = 0;


click.addEventListener('click' , function() {
    c++;
    count.innerText = c + " ";

    
});