function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = (principal*years*rate/100);
    
     var amount = parseInt(principal);
     var interestAmount = parseFloat(interest);

    total = amount + interestAmount;

   

    document.getElementById('result').innerHTML = interest;
   
    date = new Date()
   
    var currentYear = parseInt(years);

    toyear = date.getFullYear()+currentYear;

    document.getElementById('result1').innerHTML = "If you deposit " + principal + ",";

    document.getElementById('result2').innerHTML = "at an interest rate of " + rate + "%.";

    document.getElementById("result3").innerHTML = "You will receive an amount of " + total + ",";

    document.getElementById('result4').innerHTML = "in the year " + toyear;

    
}

function myFunction(){

    getrate= document.getElementById("rate").value;
    
    document.getElementById("show").innerHTML = getrate + " %";

}

function checkName(){
    var checknum = check.value;
    if(checknum <= 0){
       noti.innerHTML = 'Enter a positiv number';
    } else{
        noti.innerHTML = '';
    }
}

var noti = document.getElementById('noti');

var check = document.getElementById('principal');
        