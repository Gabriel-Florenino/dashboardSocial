let click = true
function mudaCor(){
    let but = document.getElementById("toogle");
    let span = document.querySelector("span");
    let header = document.getElementById("headerTop");
    let body = document.querySelector("body");
    let cards = document.querySelectorAll(".box");
    let h1 = document.querySelectorAll("h1");
    let p = document.querySelectorAll("p");

    if (click == true) {
        but.style.justifyContent="flex-end"
        but.style.backgroundColor="hsl(228, 12%, 44%)"
        span.style.backgroundColor=" hsl(225, 100%, 98%)"
        header.style.backgroundColor=" hsl(225, 100%, 98%)"
        body.style.backgroundColor="hsl(0, 0%, 100%)"
        cards.forEach(element => {
            element.style.backgroundColor="hsl(227, 47%, 96%)";
            element.addEventListener('mouseover', function(){
                element.style.backgroundColor="hsl(225, 100%, 98%)";
            })
            element.addEventListener('mouseout', function(){
                element.style.backgroundColor="hsl(227, 47%, 96%)";
            })
        });
        h1.forEach(element => {
            element.style.color="hsl(230, 17%, 14%)";      
        });
        p.forEach(element => {
            element.style.color="hsl(228, 12%, 44%)";      
        });
    } else{
        but.style.justifyContent="flex-start"
        but.style.backgroundImage= "linear-gradient(45deg ,hsl(210, 78%, 56%) , hsl(146, 68%, 55%))"
        span.style.backgroundColor=" hsl(232, 19%, 15%)"
        header.style.backgroundColor=" hsl(232, 19%, 15%)"
        body.style.backgroundColor="hsl(230, 17%, 14%)"
        cards.forEach(element => {
            element.style.backgroundColor="hsl(228, 28%, 20%)";
            element.addEventListener('mouseover', function(){
                element.style.backgroundColor="hsl(228, 22%, 27%)";
            })
            element.addEventListener('mouseout', function(){
                element.style.backgroundColor="hsl(228, 28%, 20%)";
            })
          });
        h1.forEach(element => {
            element.style.color="white";      
        });
        p.forEach(element => {
            element.style.color="hsl(228, 34%, 66%)";      
        });
    }
    click = !click
}