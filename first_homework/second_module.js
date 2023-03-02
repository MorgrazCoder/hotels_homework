function sum(num1, num2) {
    if (num1 >= Number.MAX_SAFE_INTEGER || num2 >= Number.MAX_SAFE_INTEGER) {
        let n1 = BigInt(num1);
        let n2 = BigInt(num2);
        return n1 + n2;

    }
    return num1 + num2;
}

function dif(num1, num2) {
    if (num1 >= Number.MAX_SAFE_INTEGER || num2 >= Number.MAX_SAFE_INTEGER) {
        let n1 = BigInt(num1);
        let n2 = BigInt(num2);
        return n1 - n2;

    }
    return num1 - num2;
}

function mul(num1, num2) {
    if (num1 >= Number.MAX_SAFE_INTEGER || num2 >= Number.MAX_SAFE_INTEGER) {
        let n1 = BigInt(num1);
        let n2 = BigInt(num2);
        return n1 * n2;

    }
    return num1 * num2;
}

function div(num1, num2) {
    if (num1 >= Number.MAX_SAFE_INTEGER || num2 >= Number.MAX_SAFE_INTEGER) {
        let n1 = BigInt(num1);
        let n2 = BigInt(num2);
        return n1 / n2;

    }
    return num1 / num2;
}

export default (sum, dif, mul, div)