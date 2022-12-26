const convertoFahrenheit=() => {
    var celsius = parseFloat(document.querySelector("#celsius").value);
    var fResult = (celsius*(9/5))+32;
    var a = fResult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
} 

const convertoCelsius=() => {
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);
    var cResult = (fahrenheit-32)*(5/9);
    var b = cResult.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value = fahrenheit;
} 

const reset = () =>
{
    document.querySelector("#celsius").value="";
    document.querySelector("#fahrenheit").value="";
}