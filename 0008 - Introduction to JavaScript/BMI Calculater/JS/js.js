

function myFunction(){
    var wright = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var hello = wright/(height*height);

    document.getElementById("main_result").innerHTML = "Your BMI is : "+Math.round(hello * 100) / 100;
}

