const [node, script, c1, c2] = process.argv;

function isAnagram(str1, str2) {
const nettoyageString = function  (str) {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
                        }
    if (nettoyageString(str1) == nettoyageString(str2)){
        console.log(true);
    } else {
        console.log(false)
    }
}

isAnagram(c1, c2);