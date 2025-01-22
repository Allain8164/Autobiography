// Get the modal
var modal1 = document.getElementById("year1modal");
var modal2 = document.getElementById("year2modal");
var modal3 = document.getElementById("year3modal");
var modal4 = document.getElementById("year4modal");
var modal5 = document.getElementById("year5modal");
var modal6 = document.getElementById("year6modal");

// Get the button that opens the modal
var btn1 = document.getElementById("year1");
var btn2 = document.getElementById("year2");
var btn3 = document.getElementById("year3");
var btn4 = document.getElementById("year4");
var btn5 = document.getElementById("year5");
var btn6 = document.getElementById("year6");

// Get the <span> element that closes the modal
var close1 = document.getElementById("year1close");
var close2 = document.getElementById("year2close");
var close3 = document.getElementById("year3close");
var close4 = document.getElementById("year4close");
var close5 = document.getElementById("year5close");
var close6 = document.getElementById("year6close");

//OPEN MODAL

btn1.addEventListener('click', function (){
    modal1.style.display = "block";
    modal1.style.animation = "fade-in 1s ease";
});

btn2.addEventListener('click', function (){
    modal2.style.display = "block";
    modal2.style.animation = "fade-in 1s ease";
});

btn3.addEventListener('click', function (){
    modal3.style.display = "block";
    modal3.style.animation = "fade-in 1s ease";
});

btn4.addEventListener('click', function (){
    modal4.style.display = "block";
    modal4.style.animation = "fade-in 1s ease";
});

btn5.addEventListener('click', function (){
    modal5.style.display = "block";
    modal5.style.animation = "fade-in 1s ease";
});

btn6.addEventListener('click', function (){
    modal6.style.display = "block";
    modal6.style.animation = "fade-in 1s ease";
});

//CLOSE MODAL

close1.addEventListener('click', function (){
    modal1.style.display = "none";
});

close2.addEventListener('click', function (){
    modal2.style.display = "none";
});

close3.addEventListener('click', function (){
    modal3.style.display = "none";
});

close4.addEventListener('click', function (){
    modal4.style.display = "none";
});

close5.addEventListener('click', function (){
    modal5.style.display = "none";
});

close6.addEventListener('click', function (){
    modal6.style.display = "none";
});


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }

}

var slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var slides = document.getElementsByClassName("slide");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Display the first slide
    showSlides(slideIndex);