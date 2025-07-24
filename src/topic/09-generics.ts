export function whatsMyType<T>(argument: T):T{
    return argument;
}

const amIsString = whatsMyType<string>('Hola Mundo');
const amisNumber = whatsMyType(1234);
const amisArray = whatsMyType([1,2,3,4,5,6]);

console.log(amIsString.split(''));
console.log(amisArray.join('-'));
console.log(amisNumber.toFixed());
