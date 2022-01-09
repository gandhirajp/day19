getValues = function () {
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    
    resultvalue = {
        "number1": number1, "number2": number2
    }
    return resultvalue;
}

//display text

showResult = function(result){
    resultElement= document.getElementById("result");
    resultElement.innerText =result;
}

// plus operation

plusButton = document.getElementById("plusButton")
plusoperation = function () {

    sum = parseInt(number1.value) + parseInt(number2.value);
    numberValues = getValues();
   showResult(sum);
}

plusButton.addEventListener("click", plusoperation);

// minus operation

minusButton = document.getElementById("minusButton")
minusoperation = function () {

    numberValues = getValues();
    difference = parseInt(number1.value) - parseInt(number2.value);
    showResult(difference);
 
}
minusButton.addEventListener("click", minusoperation);

//multiply Opearation
multiplyButton = document.getElementById("multiplyButton")
multiplyoperation = function () {

    numberValues = getValues();
    multiplication = parseInt(number1.value) * parseInt(number2.value);
    showResult(multiplication);
   
}
multiplyButton.addEventListener("click", multiplyoperation);


// divide operation

divisionButton = document.getElementById("divisionButton")
divideoperation = function () {

    numberValues = getValues();
    divide = parseInt(number1.value) / parseInt(number2.value);
    showResult(divide);
   
}
divisionButton.addEventListener("click", divideoperation);

// modulus operation
modulusButton = document.getElementById("modulusButton")
modulusoperation = function () {

    numberValues = getValues();
    modulus = parseInt(number1.value) % parseInt(number2.value);
    showResult(modulus);
   
}
modulusButton.addEventListener("click", modulusoperation);