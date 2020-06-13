// styling a button in JS.
var get = document.getElementById('btn');
get.style.padding = '16px 30px';
get.style.borderRadius = '6px';
get.style.background = 'crimson';
get.style.cursor = 'pointer';
get.style.marginRight = '40px';
get.style.fontSize = '29px';
// when you click on the button it remmoves and send msg .
function clickme(){
    get.style.display = 'none';
    var cc = document.getElementById('text');
    cc.textContent = 'Button removed.';
    cc.style.color = 'red';
    cc.style.fontSize = '29px';
}
// Action click function ! 
function fn(){
    var click = document.getElementById('click');
    click.style.display = 'none';
    var hi = document.getElementById('hi');
    hi.textContent = 'Everything removed.';
    hi.style.color = 'red';
    hi.style.fontSize = '29px';
    hi.style.marginLeft = '20px';
}
