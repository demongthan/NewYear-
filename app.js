var D = 5;
let x = setInterval(function stime(){
    D=D-1;
    document.getElementById("days").innerText = '0'
    document.getElementById("hours").innerText = '0'
    document.getElementById("minutes").innerText = '0'
    document.getElementById("seconds").innerText = D

    if(D==0){
        clearInterval(x);
        window.location.href="intro.html"
    }
},1000);