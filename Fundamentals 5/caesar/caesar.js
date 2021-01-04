let mode = "ceaser";
let shift;

function encrypt(text, shift) {
    let result = "";
    if (mode == "ceaser") {


        for (let i = 0; i < text.length; i++) {


            let c = text.charCodeAt(i);


            if (c >= 65 && c <= 90) {
                result += String.fromCharCode((c - 65 + shift) % 26 + 65);


            } else if (c >= 97 && c <= 122) {
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);


            } else {
                result += text.charAt(i);
            }
        }
    }
    return result;
}

function decrypt(text, shift) {
    let result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text, shift);
    return result;
}


module.exports = caesar