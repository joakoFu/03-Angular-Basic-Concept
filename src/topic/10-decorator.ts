function classDecorator<T extends {new (...args:any[]):{}}>(
    constructor: T 
){

    return class extends constructor{
        newProperty ='New Property';
        hello = 'Override'
    }
}
@classDecorator
export class SuperClass{
    constructor(
        public myProperty: string ='AbC123'
    ){
        
    }

    print(){
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);