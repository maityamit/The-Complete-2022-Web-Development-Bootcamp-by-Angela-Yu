var operand1 ;
var operand2;
var current_str = ""
var temp_str="";
var operator = "";


var one = document.getElementById('one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var zero = document.querySelector('#zero');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var mul = document.querySelector('#mul');
var division = document.querySelector('#division');
var rem = document.querySelector('#rem');
var equal = document.querySelector('#equal');
var x2 = document.querySelector('#x2');
var x3 = document.querySelector('#x3');
var ex = document.querySelector('#ex');
var root = document.querySelector('#root');



one.onclick = function() { //asign a function
        current_str = current_str+"1";
        temp_str = temp_str+"1";
        document.getElementById("input_field").setAttribute('value',current_str);
}
two.onclick = function() { //asign a function
    current_str = current_str+"2";
    temp_str = temp_str+"2";
    document.getElementById("input_field").setAttribute('value',current_str);
}
three.onclick = function() { //asign a function
    current_str = current_str+"3";
    temp_str = temp_str+"3";
    document.getElementById("input_field").setAttribute('value',current_str);
}
four.onclick = function() { //asign a function
    current_str = current_str+"4";
    temp_str = temp_str+"4";
    document.getElementById("input_field").setAttribute('value',current_str);
}
five.onclick = function() { //asign a function
    current_str = current_str+"5";
    temp_str = temp_str+"5";
    document.getElementById("input_field").setAttribute('value',current_str);
}
six.onclick = function() { //asign a function
    current_str = current_str+"6";
    temp_str = temp_str+"6";
    document.getElementById("input_field").setAttribute('value',current_str);
}
seven.onclick = function() { //asign a function
    current_str = current_str+"7";
    temp_str = temp_str+"7";
    document.getElementById("input_field").setAttribute('value',current_str);
}
eight.onclick = function() { //asign a function
    current_str = current_str+"8";
    temp_str = temp_str+"8";
    document.getElementById("input_field").setAttribute('value',current_str);
}
nine.onclick = function() { //asign a function
    current_str = current_str+"9";
    temp_str = temp_str+"9";
    document.getElementById("input_field").setAttribute('value',current_str);
}
zero.onclick = function() { //asign a function
    current_str = current_str+"0";
    temp_str = temp_str+"0";
    document.getElementById("input_field").setAttribute('value',current_str);
}
plus.onclick = function() { //asign a function
    operand1 = parseInt(temp_str);
    temp_str = "";
    operator="+";
    current_str = current_str+"+";
    document.getElementById("input_field").setAttribute('value',current_str);
}
minus.onclick = function() { //asign a function
    operand1 = parseInt(temp_str);
    temp_str = "";
    operator="-";
    current_str = current_str+"-";
    document.getElementById("input_field").setAttribute('value',current_str);
}
mul.onclick = function() { //asign a function
    operand1 = parseInt(temp_str);
    temp_str = "";
    operator="*";
    current_str = current_str+"X";
    document.getElementById("input_field").setAttribute('value',current_str);
}
division.onclick = function() { //asign a function
    operand1 = parseInt(temp_str);
    temp_str = "";
    operator="/";
    current_str = current_str+"/";
    document.getElementById("input_field").setAttribute('value',current_str);
}
rem.onclick = function() { //asign a function
    current_str = "";
    temp_str="";
    document.getElementById("input_field").setAttribute('value',current_str);
}
equal.onclick = function() { //asign a function
    current_str = current_str+"=";
    operand2 = parseInt(temp_str);
    if(operator=="+"){
       current_str = current_str+ ((operand1+operand2).toString());
    }else if(operator=="-"){
        current_str = current_str+ ((operand1-operand2).toString());
     }else if(operator=="*"){
        current_str = current_str+ ((operand1*operand2).toString());
     }else if(operator=="/"){
        current_str = current_str+ ((Math.round((operand1/operand2) * 100) / 100).toString());
     }
    document.getElementById("input_field").setAttribute('value',current_str);
}

x2.onclick = function(){
    operand1 = parseInt(temp_str);
    current_str = (operand1*operand1).toString();
    document.getElementById("input_field").setAttribute('value',current_str);
}
x3.onclick = function(){
    operand1 = parseInt(temp_str);
    current_str = (operand1*operand1*operand1).toString();
    document.getElementById("input_field").setAttribute('value',current_str);
}
ex.onclick = function(){
    operand1 = Math.exp(parseInt(temp_str));
    operand2 = operand1.toFixed(2);
    current_str = (operand2).toString();
    document.getElementById("input_field").setAttribute('value',current_str);
}
root.onclick = function(){
    operand1 = Math.sqrt(parseInt(temp_str));
    operand2 = operand1.toFixed(2);
    current_str = (operand2).toString();
    document.getElementById("input_field").setAttribute('value',current_str);
}

    


