function checkFreeZoneTax(){

    let income = parseFloat(
        document.getElementById("income").value
    );

    let type =
        document.getElementById("incomeType").value;

    if(isNaN(income)){

        alert("Please Enter Income");

        return;
    }

    if(type === "qualifying"){

        document.getElementById("result").innerHTML =
            "0% Corporate Tax Applicable";
    }
    else{

        let tax = income * 0.09;

        document.getElementById("result").innerHTML =
            "9% Tax = AED " + tax.toFixed(2);
    }
}
