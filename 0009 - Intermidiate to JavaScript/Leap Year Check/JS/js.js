

function myFunction(){
    var year = document.getElementById("age").value;


    var yes = "";
    if(year!=""){
        if(year%4===0){
            if(year%100===0){
                if(year%400===0){
                    yes= "Leap year.";
                }else{
                    yes="Not leap year.";
                }
            }else{
                yes="Leap year.";
            }
        }else{
            yes="Not leap year.";
        }
    
    }else{
        alert("Enter a year please. ")
    }

    

    document.getElementById("main_result").innerHTML = year+" is "+yes;

}

