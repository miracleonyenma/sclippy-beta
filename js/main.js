
var container = document.querySelector(".disp");
var plcehldr = document.querySelector("#placeholder");
var text = document.querySelector("#tuts");
var txtcntStl = document.querySelector(".tutsCont").style; //check animejs stuff to find the width of txtcntStl
duration = 2000;
var i = 0;
var txtArr = [];

txtArr[0] = "coursetro";
txtArr[1] = "devEd";
txtArr[2] = "DarkCode";
txtArr[3] = "RedStapler";
txtArr[4] = "Adonai";
var txtSze = txtArr.length - 1 ;
var txtStyle = text.style;
// var pos = plcehldr.offsetLeft - plcehldr.clientWidth;
txtStyle.position = "absolute";

txtStyle.left = "0" ;
txtStyle.top = -text.clientHeight+4 + "px";
/*txtStyle.transition = "all 0.4s ease"; */



// function updte(){
// 	var changed = false;
// 	if(i < txtSze ){
// 		i++;
// 	}
// 	else{
// 		i = 0;
//     }
// 	setTimeout("updte()", 100);
// };

// window.addEventListener('load', updte);

    //anime.js stuff
    var loopBegan = 0;
    var loopCompleted = 0;
    var changeBegan = 0;
    var changeCompleted = 0;

//create timeline
    var animTl = anime.timeline({
        targets: text,
        duration: 2000,
        direction: 'reverse',
        loop: true,
        easing: 'easeInOutCirc',
        update: function(anim){
            var progs = Math.round(anim.progress);
        }
    });
    
    animTl.add({
        translateY: "100%",
        changeBegin: function(anim){
            //change the innerHTML
            text.innerHTML = txtArr[i];
            txtcntStl.width = text.clientWidth + "px";
            // txtcntStl.height = text.clientHeight + "px";

        }
        }).add({
            translateY: "0",
            changeBegin: function(anim){
                if(i<txtSze){
                    i++;
                }
                else{
                    i = 0;
                };
                //update array position
                changeBegan++;    
            }
        }).add({
            translateY: "100%",
            changeBegin: function(anim){
                text.innerHTML = txtArr[i];
                txtcntStl.width = text.clientWidth + "px";
                // txtcntStl.height = text.clientHeight + "px";

            }    
        }).add({
            translateY: "0",
            changeBegin: function(anim){
                if(i<txtSze){
                    i++;
                }
                else{
                    i = 0;
                };
                changeBegan++;    
            }
        });
     
   
    // .add({
    //     translateY: "0",
    // }).add({
    //     translateY: "100%",
    // }).add({
    //     translateY: "0",
    // });

  





//yup that's pretty much it

var close = document.querySelector("#close");
var open = document.querySelector("#open");

var tl2 = new TimelineMax();

tl2.from(".h1", 1,{
    opacity: 0,
    y: 300,
    ease: Bounce.easeOut,
    delay: 0        
});

tl2.from(".p", 1,{
    opacity: 0,
    y: 300,
    ease: Power2.easeOut,
    delay: 0        
});




var tl = new TimelineMax({paused:true});

open.addEventListener("click", ()=>{
    this.tl.play();
});
close.addEventListener("click", ()=>{
	this.tl.reverse();
});


tl.from(".wrapper", 0.2, {
	display: 'none',
    opacity: 0,
    ease: Power2.easeOut

})

tl.to("#open", 0.2, {
    x: 500,                 
    autoAlpha: 0
},"-=1")

tl.from("nav", 0.4,{
    x: "100%"
})

tl.from(".in", 1, {
    x: 800,
    display: 'none',
    ease: Power2.easeOut,
    delay: 0              
})

tl.fromTo("circle.one", 1.8, {
    x: 500,
    scale: 0
},
{
    scale: 4,
    x: -590,
    y: -680,
    ease: Power2.easeOut

}, "-=0.8");

tl.fromTo("#close", 0.4,{
    x: 400,
},
{
    x:-100,
    ease: Power2.easeOut,
}, "-=1");



// tl.to("#close", 0.5,{
// 	x:-100
// }, "-=2")

// tl.from(".bar1", 0.5, {
// 	x: 600,
//     ease: Power2.easeOut
// }, "-=1")

// tl.from(".bar2", 0.5, {

// 	x: 600,
//     ease: Power2.easeOut
// }, "-=1")

// tl.to(".bar2", 0.5,{
// 	y: 23.4
// },"-=1" )



// tl.to(".bar2", 0.5,{
// 	y: 0
// }, )


//########custom cursor#######//
var cursor = document.querySelector("#cursor");
var curStyle = cursor.style;
document.addEventListener('mousemove', (e)=>{
    var x = e.clientX;
    var y = e.clientY;

    curStyle.left = x + "px";
    curStyle.top = y + "px";

});


//add the class "hoverable" to elements
let links = document.querySelectorAll("a");
let labels = document.querySelectorAll("label");
var buttons = document.querySelectorAll("button");
var facy = document.querySelector(".contain");

facy.addEventListener('mouseover', function(){
    curStyle.background = "#eee";
});
facy.addEventListener('mouseout', function(){
    curStyle.background = 'transparent';
});
const focus = ()=>{
    curStyle.width = "50px";
    curStyle.height = "50px";
    curStyle.border = "5px solid #eee";
}

const unFocus = ()=>{
    curStyle.width = "20px";
    curStyle.height = "20px";
    curStyle.border = "2px solid #eee";
}

close.addEventListener('mouseover', focus);
close.addEventListener('mouseout', unFocus);


for(let i=0; i<links.length; i++){
    links[i].classList.add("hoverable");
}

for(let i=0; i<labels.length; i++){
    labels[i].classList.add("hoverable");
	labels[i].addEventListener('mouseover', focus);
	labels[i].addEventListener('mouseout', unFocus);

}


for(let i=0; i<buttons.length; i++){
    buttons[i].classList.add("hoverable");
    buttons[i].addEventListener('mouseover', focus);
    buttons[i].addEventListener('mouseout', unFocus);
}

var image = document.querySelector("#cntrld");
var container = document.querySelector(".disp");
var mouseCoords = container.getBoundingClientRect();
const move = (e)=>{
    var mouseX = e.pageX - container.offsetLeft;
    var mouseY = e.pageY - container.offsetTop;

    TweenMax.to("#cntrld", 0.5, {
        x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 10,
        y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 10,
        ease: Power4.easeOut
      });
      
   TweenMax.to(container, 0.5, {
       x: (mouseX - mouseCoords.width * 1.5 ) / mouseCoords.width *30,
       y: (mouseY - mouseCoords.height * 1.5 ) / mouseCoords.height  *30,
       ease: Power4.easeOut
     });
      
};

const scale = (e)=>{
    TweenMax.to("#contrld", 0.5, {
        scale: 1.25,
        ease: Power4.easeOut
      });
      
    TweenMax.to(container, 0.5, {
    scale: 0.95,
        ease: Power4.easeOut
    });
};


const unmove = (e)=>{
    TweenMax.to("#contrld", 0.5, {
        x: 0,
        y: 0,
        scale: 1,
        ease: Power4.easeOut
      });
      
	  TweenMax.to(container, 0.5, {
	      x: 0,
          y: 0,
          scale: 1,
	      ease: Power4.easeOut
        });
        
}

TweenMax.from(container, 1, {
		  opacity: 0,
          scale: 0,
		  ease: Bounce.easeOut

});
// image.addEventListener('mouseenter', scale);

container.addEventListener('mouseenter', scale);
container.addEventListener('mousemove', move);
container.addEventListener('mouseleave', unmove);