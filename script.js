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

    if(principal <= 0){
        return  alert('Enter a positive number');
    } 

    
}

function myFunction(){

    getrate= document.getElementById("rate").value;
    
    document.getElementById("show").innerHTML = getrate + " %";

}
