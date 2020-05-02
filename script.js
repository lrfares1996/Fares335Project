/* Dropdown Menu Higlights */
document.getElementById("highlightOne").onmouseover = function() {mouseOverOne()};

            function mouseOverOne() 
            {
                document.getElementById("highlightOne").style.backgroundColor = "#DB9D33";
                document.getElementById("highlightOne").style.color = "black";
                document.getElementById("highlightOne").style.textDecoration = "none";
            }


document.getElementById("highlightOne").onmouseout = function() {mouseOutOne()};
            
            function mouseOutOne() 
            {
                document.getElementById("highlightOne").style.backgroundColor = "#f9f9f9";
            }

document.getElementById("highlightTwo").onmouseover = function() {mouseOverTwo()};

            function mouseOverTwo() 
            {
                document.getElementById("highlightTwo").style.backgroundColor = "#DB9D33";
                document.getElementById("highlightTwo").style.color = "black";
                document.getElementById("highlightTwo").style.textDecoration = "none";
            }


document.getElementById("highlightTwo").onmouseout = function() {mouseOutTwo()};
            
            function mouseOutTwo() 
            {
                document.getElementById("highlightTwo").style.backgroundColor = "#f9f9f9";
            }

document.getElementById("about").onmouseover = function() {mouseOverAbout()};

            function mouseOverAbout() 
            {
                document.getElementById("about").style.color = "#DB9D33";
                document.getElementById("about").style.textDecoration = "none";
            }


document.getElementById("about").onmouseout = function() {mouseOutAbout()};
            
            function mouseOutAbout() 
            {
                document.getElementById("about").style.color = "white";
            }

document.getElementById("contact").onmouseover = function() {mouseOverContact()};

            function mouseOverContact() 
            {
                document.getElementById("contact").style.color = "#DB9D33";
                document.getElementById("contact").style.textDecoration = "none";
            }


document.getElementById("contact").onmouseout = function() {mouseOutContact()};
            
            function mouseOutContact() 
            {
                document.getElementById("contact").style.color = "white";            
            }
/* Dropdown Menu Highlights End */

/* "Back to Top" Button FROM W3 SCHOOLS */
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* "Back to Top" Button End */

/* Form */
var first = document.getElementById("firstName");
var last = document.getElementById("lastName");
var email = document.getElementById("email");
var comments = document.getElementById("comments");

document.getElementById("firstName").onfocus = function()
    {
        this.style.backgroundColor = "#F2DBB5";
    }

document.getElementById("firstName").onblur = function()
    {
        this.style.backgroundColor = "#DB9D33";
        this.style.textTransform = "uppercase"
    }

document.getElementById("lastName").onfocus = function()    
    {
        this.style.backgroundColor = "#F2DBB5";
    }

document.getElementById("lastName").onblur = function()
    {
        this.style.backgroundColor = "#DB9D33";
        this.style.textTransform = "uppercase"
    }

document.getElementById("email").onfocus = function()
    {
        this.style.backgroundColor = "#F2DBB5";
    }

document.getElementById("email").onblur = function()
    {
        this.style.backgroundColor = "#DB9D33";
    }

document.getElementById("comments").onfocus = function()
    {
        this.style.backgroundColor = "#F2DBB5";
    }

document.getElementById("comments").onblur = function()
    {
        this.style.backgroundColor = "#DB9D33";
    }

document.getElementById("submit").onclick = function()
    {
        alert("Your form has been submitted");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        comments.value = "";
    }

document.getElementById("reset").onclick = function()
    {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        comments.value = "";
    }
/* Form End */