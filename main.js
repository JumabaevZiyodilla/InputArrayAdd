var elForm = document.querySelector(".site-form");
var elInputName = document.querySelector(".name-input");
var elInputSurname = document.querySelector(".surname-input")
var elInputPhone = document.querySelector(".phone-input");
var elBtn = document.querySelector(".btn");
var elText = document.querySelector(".text");
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elInputNameValue = elInputName.value;
    var elInputSurnameValue = elInputSurname.value;
    var elInputPhoneValue = elInputPhone.value;
    var elArrayValue = [elInputNameValue,elInputSurnameValue,elInputPhoneValue];
    elArrayValue.join(" ");
    elText.textContent = elArrayValue.join(" ");
})