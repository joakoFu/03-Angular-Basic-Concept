export class Person{

    constructor(public name: string,public address:string){
 
    }

}
const iroman = new Person('ironman','new york');
console.log(iroman);

/*export class Hero extends Person{
    constructor( 
        public elaterEgo: string,
        public age: number,
        public realname: string
    ){
        super ();
    }
}*/

export class Hero{
    public person : Person;
    constructor(
        public elaterEgo: string,
        public age: number,
        public realname: string,
        public person: Person
    ){

    }

}

const irmonaExt = new Hero('iron',45,'tony',iroman);
console.log({irmonaExt});
