function toNormalCase(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function toNormalSpacesAndTabulation(str) {
    if (!str) return str;
    return str.trim()
        .replace(/ +/g, " ")
        .replace(/(\s?[-!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]\s?)/g, (argument) => {
            return argument.trim() + " ";
        })
}

function wordCounter(str) {
    if (!str) return str;
    return str.replace(/[-!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]/g, " ")
        .replace(/ +/g, " ")
        .trim()
        .split(" ").length;
}

function uniqueWordCounter(str) {
    if (!str) return str;
    let boofer = []
    str.replace(/[-!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]/g, " ")
        .replace(/ +/g, " ")
        .trim()
        .toLowerCase()
        .split(" ")
        .forEach((el, ind, arr) => {
            let founded = el + ":" + arr.filter((value) => value == el).length;
            if (!boofer.includes(founded)) {
                boofer.push(founded);
            }
        })
    return boofer;
}

export default (toNormalCase, toNormalSpacesAndTabulation, wordCounter, uniqueWordCounter)



