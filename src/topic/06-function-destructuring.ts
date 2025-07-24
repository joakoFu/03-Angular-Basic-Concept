export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 100
}

const tablet: Product = {
    description: 'iPad Air',
    price: 100
}       

interface taxCalculationOptions {
    tax: number;
    products: Product[];
}
export function calculateTax( {tax,products}: taxCalculationOptions) : [number, number] {
    let total = 0;
    products.forEach( ({price}) =>{
        total += price;

    });
    return [total,total * tax]
}
const shoppingCart: Product[] = [phone, tablet];
const tax = 0.3;

const [total, taxTotal] = calculateTax({
    products: shoppingCart,
    tax
});

//console.log( {total, taxTotal});