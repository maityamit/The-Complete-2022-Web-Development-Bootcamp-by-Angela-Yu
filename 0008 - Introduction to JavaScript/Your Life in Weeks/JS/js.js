

function myFunction(){
    var age = document.getElementById("age").value;



    var ans = 90-age;
    

    document.getElementById("main_result").innerHTML = "You have "+(ans*365)+" days, "+(52*ans)+" weeks, and "+(ans*12)+" months left.";

}

