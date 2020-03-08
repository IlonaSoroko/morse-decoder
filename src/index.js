const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codeOfLetters = [];
    let result = '';
    codeOfLetters = expr.match(/.{1,10}/g);

    for (let i = 0; i < codeOfLetters.length; i++) {
        if (codeOfLetters[i] === "**********") {
            result = result + ' ';
            continue;
        }
        codeOfLetters[i] = parseFloat(codeOfLetters[i]);
        codeOfLetters[i] = String(codeOfLetters[i]).match(/.{1,2}/g);

        for (let j = 0; j < codeOfLetters[i].length; j++) {
            codeOfLetters[i][j] = (codeOfLetters[i][j] == '10' ? '.' : '-');
        }
        codeOfLetters[i] = codeOfLetters[i].join("");

        for (let key in MORSE_TABLE) {
            if (key === codeOfLetters[i]) {
                codeOfLetters[i] = MORSE_TABLE[key];
                result = result + codeOfLetters[i];
                break;
            }
        }
    }
    return result;
}

module.exports = {
    decode
}