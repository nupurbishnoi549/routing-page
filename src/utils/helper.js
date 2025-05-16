import Coffee from '../assets/images/webp/coffee.webp'
import GreenTea from '../assets/images/webp/green-tea.webp'
import IcedCoffee from '../assets/images/webp/starbucks.webp'

export const navLinks = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/product", name: "Product" },
    { to: "/contact", name: "Contact" },
];


export const PRODUCT_DATA = [
    {
        id: 'coffee',
        img: Coffee,
        title: 'Coffee',
        description: 'Rich and aromatic brew.',
        price: 'Price: 399'
    },
    {
        id: 'green-tea',
        img: GreenTea,
        title: 'Green Tea',
        description: 'Green tea: where calm meets caffeine',
        price: 'Price: 199'
    },
    {
        id: 'iced-coffee',
        img: IcedCoffee,
        title: 'Iced Coffee',
        description: 'Sweet & Salty Bliss in a Cup',
        price: 'Price: 199'
    },
];

export const inputGroups = [
    [
        { type: "text", placeholder: "First Name" },
        { type: "text", placeholder: "Last Name" }
    ],
    [
        { type: "email", placeholder: "Email Address" }
    ],
];
