/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    calle: string;
    pais: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};