window.addEventListener('load', main);

function main() {
    circle1Position();
    circle2Position();
    circle3Position();
}

function circle1Position() { 
    // let diven = document.getElementById('contactArea');
    // let x = innerWidth / 2; 
    // let y = 0; 
    let circle1 = document.getElementById('circle1'); 
    circle1.style.position = "relative"; 
    circle1.style.left = 300 + 'px'; 
    circle1.style.top = 0 + 'px';     
};
function circle2Position() { 
    let circle2 = document.getElementById('circle2'); 
    circle2.style.position = "relative"; 
    circle2.style.left = -100 + 'px'; 
    circle2.style.top = 0 + 'px'; 
};
function circle3Position() { 
    let circle3 = document.getElementById('circle3'); 
    circle3.style.position = "relative"; 
    circle3.style.left = 0 + 'px'; 
    circle3.style.top = 150 + 'px'; 
};