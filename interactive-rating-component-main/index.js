

document.addEventListener("DOMContentLoaded", function () {
    var tableElements = document.getElementsByClassName("rating_noDesign");
    for (var i = 0; i < tableElements.length; i++) {
        tableElements[i].addEventListener("click", onRateClick);
    }

    var submit = document.getElementsByClassName("rating__btn");
    submit[0].addEventListener("click", onSubmit);
});
function onRateClick(oEvent) {

    var rates = document.getElementsByClassName("rating_noDesign");

    for (var i = 0; i < rates.length; i++) {
        rates[i].classList.remove('rating__activeClass');
    }


    window.rate = oEvent.path[0].innerHTML;

    oEvent.path[0].classList.add('rating__activeClass');
}
function onSubmit() {
    if (window.rate) {
        document.getElementsByClassName('rating__container')[0].style.display = 'none';
        document.getElementsByClassName('result__container')[0].style.display = 'flex';
        let element = document.getElementsByClassName('result__container')[0].childNodes[3];
        element.textContent = element.textContent.replace('$', window.rate);
    }

}