      //get the container
      var contain = document.querySelector(".contain");
      //get the width, height, left, top of the container
      var mouseCoords = contain.getBoundingClientRect();
      //get the div
      var div = document.getElementById("myDiv");

      // var divCoords = div.getBoundingClientRect();

      //get our info display
      var disp = document.getElementById("disp");

      //self expainatory
      var divStyle = div.style;
      divStyle.position = "absolute";
      
      //function for mousemove on the div
      div.addEventListener("mousemove", function(e){
        //get the cursor position minus the offSets of the container.... But why?
        var mouseX = e.pageX - contain.offsetLeft;
        var mouseY = e.pageY - contain.offsetTop;

        //animate the div
        TweenMax.to(div, 1,{
          x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
          y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50,
          ease: Power4.easeOut
        });

        TweenMax.to(".face", 1,{
          x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 20,
          y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 20,
          ease: Power4.easeOut
        });

        // divStyle.top = ((e.pageY - div.offsetTop) * 2 / divCoords.height * 20)+ "px" ;
        // divStyle.left = ((e.pageX - div.offsetLeft) * 2 / divCoords.width * 20) + "px";

        var posX = "<p> x: " + (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50  + "</p>";
        var posY = "<p> y: " + (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50 + "</p>";
        var msX = "<p> mouseX = e.pageX - div.offsetLeft: " + mouseX + "</p>";
        var msY = "<p> mouseY = e.pageY - div.offsetTop: " + mouseY + "</p>";
        var offSetTop = "<p> offsetTop: " + contain.offsetTop + "</p>";
        var offSetLeft = "<p> offsetLeft: " + contain.offsetLeft + "</p>";
        var msPosX = "<p> mousePositionX on page (e.pageX): " + e.pageX + "</p>";
        var msPosY = "<p> mousePositionY on page (e.pageY): " + e.pageY + "</p>";
        var msCrdsWdth = "<p> mouseCoords.width:  " + mouseCoords.width + "</p>";
        var msCrdshght = "<p> mouseCoords.height:  " + mouseCoords.height + "</p>";

        var logStuff = posX + posY + msX + msY + msPosX + msPosY + offSetTop + offSetLeft + msCrdsWdth + msCrdshght ;

      });
      
        div.addEventListener("mouseleave", (e)=>{
          
          TweenMax.to(div, 1,{
            x:0,
            y: 0,
            ease: Power4.easeOut
          })

          TweenMax.to(".face", 1,{
            x:0,
            y: 0,
            ease: Power4.easeOut
          })

          // divStyle.top = 0;
          // divStyle.left = 0;
          
          
        });
      
      

    function myFunction() {
      var rect = div.getBoundingClientRect();
      x = rect.left;
      y = rect.top;
      w = rect.width;
      h = rect.height;
      alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
    }
