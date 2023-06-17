'use strict';
function cleanText() {
    var inputText = document.getElementById('input-text').value;
    var cleanedText = inputText
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z ]/g, '')
        .replace(/\s+/g, ' ');
  
    document.getElementById('output-text').innerText = cleanedText;
}

//fucion copiar en portapapeles
function copyToClipboard() {
    const outputText = document.getElementById('output-text');
    const text = outputText.textContent || outputText.innerText;

    // Crea un elemento de textarea temporal
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Asegura que el elemento textarea esté fuera de la pantalla
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';

    // Agrega el elemento textarea al documento
    document.body.appendChild(textarea);

    // Selecciona y copia el texto del elemento textarea
    textarea.select();
    document.execCommand('copy');

    // Elimina el elemento textarea del documento
    document.body.removeChild(textarea);
}


var botoninicial = document.getElementById('clean-button')
botoninicial?.addEventListener('click', cleanText);
var botoncopy= document.getElementById('Copy-button')
botoncopy?.addEventListener('click', copyToClipboard);


