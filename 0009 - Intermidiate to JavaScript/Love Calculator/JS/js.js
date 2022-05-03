

function myFunction(){


    var amit = document.getElementById("weight").value;
    var amit1 = document.getElementById("height").value;

    if(amit!="" && amit1!=""){
        var n = Math.random();
        n = n*100;
        n = Math.floor(n);
    
        document.getElementById("weight").innerHTML = "";
        document.getElementById("height").innerHTML = "";
    
        document.getElementById("main_result").innerHTML = "Your Love ❤️ Percentage is: "+n+" %."
    }else{
        alert("Enter Name please.");
    }



}

