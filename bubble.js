var timer = 60;
var hit;
var score = 0;
document.querySelector(".timerval").textContent = timer;


var makeBubble = () => {
    var bubble = "";
    
    for(var i = 0; i<161; i++){
        var rn = Math.floor(Math.random()*10);
        bubble += `<div class="circle">${rn}</div>`;
    }
    
    document.querySelector(".pnlbtm").innerHTML = bubble;
}

var runTimer = () => {
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(`.timerval`).textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector(".pnlbtm").innerHTML = "<h1> game ended </h1>";
        }
    },1000)
}

var getNewHit = ()=> {
    hit = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = hit;
}

var increaseScore = ()=> {
    score += 10;
    document.querySelector(".scoreval").textContent = score;  
}

// event bubbling concept is that agar event child pe nahi chalega to parent pe chalega if not the uske parent pe chalega and so on;

document.querySelector(".pnlbtm").
addEventListener("click" , function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(hit === clickedNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();

