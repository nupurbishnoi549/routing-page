import Coffee from '../assets/images/webp/coffee.webp'
import GreenTea from '../assets/images/webp/green-tea.webp'
import IcedCoffee from '../assets/images/webp/starbucks.webp'

export const HEADER_LIST = [
    { title: 'Home', link: '#home' },
    { title: 'About', link: '#about' },
    { title: 'Product', link: '#product' },
    { title: 'Contact', link: '#contact' },
];

export const PRODUCT_DATA = [
    {
        img: Coffee,
        title: 'Coffee',
        description: 'Rich and aromatic brew.',
        price: 'Price: 399'
    },
    {
        img: GreenTea,
        title: 'Green Tea',
        description: 'Green tea: where calm meets caffeine',
        price: 'Price: 199'
    },
    {
        img: IcedCoffee,
        title: 'Iced Coffee',
        description: 'Sweet & Salty Bliss in a Cup',
        price: 'Price: 199'
    },
]
export const inputGroups = [
    [
        { type: "text", placeholder: "First Name" },
        { type: "text", placeholder: "Last Name" }
    ],
    [
        { type: "email", placeholder: "Email Address" }
    ],
];
