
var button = document.getElementById("buttton");
var image = document.getElementById("imageid");


button.addEventListener("click", myFunction);

function myFunction(){


    var get_number = Math.floor((Math.random() * 6) + 1); 
    wait(500);  
    image.style.visibility = "visible";
    image.src = "images/dice"+get_number+".png";
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }