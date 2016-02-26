console.log("Javascript is alive!");

var hello = document.getElementById("greeting");
hello.innerHTML = "Hello, World!";

var lists = document.getElementsByTagName("li");
for (var i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = "yellow";
}

var image = document.createElement("img");
image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
hello.appendChild(image);

var select = document.getElementById('essentials');
var list = document.getElementsByTagName('li');
select.addEventListener('click', function(event){
  if (event.target.tagName === "LI"){
    for(var i=0; i<list.length; i++){
        list[i].classList.remove('selected');
        }
    event.target.classList.add('selected');
        }
        var newImg = event.target.innerHTML;
        essentials.nextElementSibling.firstElementChild.src = "./images/" + newImg + ".jpeg";
    });

var child = document.getElementById("ghosting");
child.addEventListener('mouseover', function() {
  child.parentNode.removeChild(child);
});


var size = document.getElementById("resize"); 
size.addEventListener('mouseover', function() {
 size.style.width = "400px";
});
size.addEventListener('mouseleave', function() {
 size.style.width = "200px";
});

// var move = document.getElementById('reset');

// move.addEventListener("click", function() {
//   lists.classList.remove('selected');
// });

var select = document.getElementById('essentials');
var list = document.getElementsByTagName('li');
select.addEventListener('click', function(event) {
  if (event.target.tagName === "LI"){
    for(var i=0; i<list.length; i++){
        list[i].classList.remove('selected');
        }
  }
        essentials.nextElementSibling.firstElementChild.src = "./images/panic.jpeg";
});

window.addEventListener("keypress", function(e) {
  if (e.keyCode >= 47 && e.keyCode <= 58) {
    alert("I HATE NUMBERZZZ!");
  }
});



