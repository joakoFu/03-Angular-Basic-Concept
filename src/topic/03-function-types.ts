function addNumber(a:number,b:number){
    return a + b;
}

const result = addNumber(5, 10);
console.log({result}); 


const addNumberArrow = (a:number, b:number): number => {
    return a + b;
}
function multiply(firstNumber:number, secondNumber?:number, base:number = 2): number {
    return firstNumber * base;
}
const resultArrow = addNumberArrow(5, 10);
console.log({resultArrow}); 

const resultMultiply = multiply(5, 10);
console.log({resultMultiply});
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
    showHp?: () => void;
};
const strider: Character = {
    name: 'Strider',
    hp: 50,
    skills: [ 'Bash', 'Counter'],
    showHp() {
        console.log(`Puntos de vida de ${this.name} son ${this.hp}`);
    }
};
const healCharacter = (character:Character, amount: number)=>{
    character.hp += amount;
};


healCharacter(strider, 20);
strider.showHp();

export {};