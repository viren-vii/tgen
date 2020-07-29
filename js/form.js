import { clearButtons, showClose, hideClose, closeData } from './scripts.js';

var formIp = document.getElementById('formIp');
var formSub = document.getElementById('formSubmit');
var formSel = document.getElementsByClassName('formSelector');

function visibleFormIp() {
    for (ip of formSel) {
        ip.style.display = "block";
    }
}

function clearFormIp() {
    for (ip of formSel) {
        ip.style.display = "none";
    }
}

function createForm() {
    clearButtons();
    showClose();
    visibleFormIp();

}