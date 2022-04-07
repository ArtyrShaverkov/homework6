function typeArg(arg) {
    return typeof arg;
}

function checkParity(num) {
    return num % 2 === 0;
}

function checkArg(arg) {
    if (typeArg(arg) === 'string') {
        console.log('строка: ', arg);
    } else {
        if (typeArg(arg) === 'number') {
            if (checkParity(arg)) {
                console.log('число четное');
            } else {
                console.log('число не четное');
            }
        }
    }
}

function calcArg(arg) {
    if (checkParity(arg)) {
        console.log(arg * 2);
    } else {
        console.log(arg * 3);
    }
}

const calcArgTer = (arg) => {
    checkParity(arg) ? console.log(arg * 2) : console.log(arg * 3)
}

function calcTwoArg(arg1, arg2) {
    arg1 = +arg1;
    arg2 = +arg2;
    if (checkParity(arg1) && checkParity(arg2)) {
        console.log(arg1 + arg2);
    } else {
        if (checkParity(arg1) || checkParity(arg2)) {
            console.log(arg1 - arg2);
        } else {
            console.log(arg1 * arg2);
        }
    }
}

checkArg('sdsfds');
checkArg(44);
calcArg(2)
calcArgTer('5')
calcTwoArg('2', '2');
