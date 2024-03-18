const textField = document.querySelector("#encrypted-text");
const messageField = document.querySelector("#result-text");

console.log(textField, messageField);

function removeChar(){
    let textClean = textField.value.replace(/[^a-z ]/g, "");
    // Actualizar el contenido del textarea
    textField.value = textClean;
  }

const matrixCode = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
]

const matrixDecoded = [
    ["enter", "e"], //indice 0
    ["imes", "i"], //indice 1
    ["ai", "a"], //indice 2
    ["ober", "o"], //indice 3
    ["ufat", "u"], //indice 4
]

function funcEncryption(){
    const text = encrypt(textField.value);
    messageField.value = text;
}

function encrypt(encryptedPhrase){
    for(let i = 0; i < matrixCode.length; i++){
        if(encryptedPhrase.includes(matrixCode[i][0])){
            encryptedPhrase = encryptedPhrase.replaceAll(
                matrixCode[i][0],
                matrixCode[i][1]
            )
        }
    }
    return encryptedPhrase
}

function funcDecryption(){
    const textDecrypt = decrypt(textField.value);
    messageField.value = textDecrypt;
}

function decrypt(decryptedPhrase){
    for(let i = 0; i < matrixDecoded.length; i++){
        if(decryptedPhrase.includes(matrixDecoded[i][0])){
            decryptedPhrase = decryptedPhrase.replaceAll(
                matrixDecoded[i][0],
                matrixDecoded[i][1]
            )
        }
    }
    return decryptedPhrase
}

const copyBtn = document.querySelector("#btn-copy");

copyBtn.addEventListener('click', async () => {
await navigator.clipboard.writeText(messageField.value),
alert("Copied!")
})

function clean(){
    document.getElementById("btn-copy").style.display = "inline";
    document.getElementById("encrypted-text").value = "";
}

function cleanResult(){
    document.getElementById("btn-copy").style.display = "none";
    document.getElementById("result-text").value = "";
}

