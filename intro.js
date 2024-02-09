var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function(){
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function(){
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function(){
    slider3.classList.remove('active')
})

var btnCard=document.getElementById("btn-card");
var slider4 = document.querySelector(".slider4")
btnCard.addEventListener('click', function(){
    slider3.classList.remove('active');
    slider4.classList.add('active');
});

const envelopes = document.querySelector('.slider4').querySelector('.box-content').querySelectorAll(".envelope-wrapper");
        console.log(envelopes);
             envelopes.forEach(envelope=>{
            envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
            });
        });

var btnSlider4=document.getElementById("btn-slider4");
var cardSlider4s = document.querySelector(".slider4").querySelector(".box-content").querySelectorAll(".card");
var slider5 = document.querySelector(".slider5")
btnSlider4.addEventListener('click', function(){
    cardSlider4s.forEach(card=>{
        card.classList.add("isHover")
    })

    setTimeout(()=>{
        envelopes.forEach(envelope=>{
            envelope.classList.add('flap');
        });
    }, 1000);

    setTimeout(()=>{
        slider4.classList.remove('active');
        slider5.classList.add('active');
    }, 5000);
});

var btnSlider5=document.getElementById("btn-slider5");
var slider6 = document.querySelector(".slider6");
var numberMomo=document.getElementById("numberMomo");
var cards = document.querySelector(".slider6").querySelector(".box-content").querySelectorAll(".card");
btnSlider5.addEventListener('click', function(){
    slider5.classList.remove('active');
    slider6.classList.add('active');
    setTimeout(()=>{
        console.log(cards);
        cards.forEach(card=>{
            card.classList.add("card-position");
        });
    }, 1000);

    setTimeout(()=>{
        console.log(cards);
        cards.forEach(card=>{
            card.classList.remove("card-position");
        });
    }, 2000);
});

var slider7 = document.querySelector(".slider7");
var envelope=document.querySelector('.slider7').querySelector('.box-content').querySelector(".envelope-wrapper");
var cardSlider7=document.querySelector(".slider7").querySelector(".box-content").querySelector(".card");
var slider7Text=document.querySelector(".slider7-text");
cards.forEach(card=>{
    card.addEventListener("click",()=>{
        slider6.classList.remove('active');
        slider7.classList.add('active');
    })
})

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    slider7Text.classList.toggle('slider7-text-1');
});

cardSlider7.addEventListener('click', () => {
    cardSlider7.classList.add("card-hover");
});


// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")
buttonSong.onclick= function(){
    if(mySong.paused){
        mySong.play()
    }
}