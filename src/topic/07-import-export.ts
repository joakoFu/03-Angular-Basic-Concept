import {Product,calculateTax} from './06-function-destructuring.ts';

const shoppingCart: Product[]=[
    {
        description: 'Nokia A1',
        price: 100
    },
    {
        description: 'iPad Air',
        price: 100
    }
];

const [total, taxTotal] = calculateTax({
    products:shoppingCart   ,
    tax:0.15
});

console.log({total, taxTotal});

export {};