const noWordDiv = document.querySelector("#no-word-div");
const resultsBlock = document.querySelector("#result-block");
const resultDiv = document.querySelector("#result-div");
const sourceTextarea = document.querySelector("#source-textarea");

const encodeButton = document.querySelector("#encode-button");
const decodeButton = document.querySelector("#decode-button");

function showResultDiv() {
    resultsBlock.style.display = "flex";
    noWordDiv.style.display = "none";
}

function encode(sourceString) {
    let destString = "";

    for (const character of sourceString) {
        switch(character) {
            case 'a':
                destString += "ai";
                break;
            case 'e':
                destString += "enter";
                break;
            case 'i':
                destString += "imes";
                break;
            case 'o':
                destString += "ober";
                break;
            case 'u':
                destString += "ufat";
                break;
            default: 
                destString += character;
                break;
        }
    }

    return destString;
}

function decode(sourceString) {
    let destString = "";

    const table = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    const len = sourceString.length;
    for (let index = 0; index < len; ) {
        const letter = sourceString[index];
        destString += letter;

        if( letter in table ) {
            const word = table[letter];
            if( sourceString.substring(index, index + word.length) === word) {
                index += word.length;
            } else {
                index++;
            }
        } else {
            index++;
        }
        
    }

    return destString;
}

encodeButton.addEventListener("click", (e) => {
    showResultDiv();

    const sourceString = sourceTextarea.value;
    resultDiv.textContent = encode(sourceString);
    
});

decodeButton.addEventListener("click", (e) => {
    showResultDiv();

    const sourceString = sourceTextarea.value;
    resultDiv.textContent = decode(sourceString);
});
