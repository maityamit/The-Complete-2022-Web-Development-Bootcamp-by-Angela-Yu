

function myFunction(){
    var age = document.getElementById("age").value;


    const series = [];
    var sum = 1;
    var f_term = 1;
    var l_term = 1;

    for(let i=0;i<age;i++){
        series[i]=sum;
        sum = f_term+l_term;
        f_term = l_term;
        l_term = sum;

    }
    

    document.getElementById("main_result").innerHTML = series;

}

