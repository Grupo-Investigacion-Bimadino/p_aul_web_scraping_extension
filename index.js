
 function  cleanText() {
    var inputText = document.getElementById('input-text').value;
    var cleanedText = inputText
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z ]/g, '')
        .replace(/\s+/g, ' ');
        
        findApi(cleanedText).then((response)=>{
            document.getElementById('output-text').innerText = response;
        })


  

}

async function findApi(params) {
    const url = 'https://paraphraser1.p.rapidapi.com/';
    const headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '3610573747msh014e8f123f802f1p149effjsnc811a920eea7',
      'X-RapidAPI-Host': 'paraphraser1.p.rapidapi.com'
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ input: params })
    });
  
    if (response.ok) {
      const data = await response.json();
      if (data.output) {
        return data.output;
      } else {
        alert('No se pudo encontrar una frase similar');
      }
    } else {
      alert('Error en la solicitud de API');
    }
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
var botoncopy = document.getElementById('Copy-button')
botoncopy?.addEventListener('click', copyToClipboard);


