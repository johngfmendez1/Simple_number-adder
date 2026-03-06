function addNumbers() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;

    var sum = Number(number1) + Number(number2);

    document.getElementById("result").innerHTML = "Result: " + sum;
}
