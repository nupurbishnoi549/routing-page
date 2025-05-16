import React from 'react'
import { PRODUCT_DATA } from '../../utils/helper'

const Product = () => {
    return (
        <section>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCT_DATA.map((card, index) => (
                    <div key={index} className='shadow-lg p-3'>
                        <img src={card.img} alt="coffee" className='w-full' />
                        <h2 className="text-3xl font-bold mt-4">{card.title}</h2>
                        <p className="text-xl font-semibold mt-2">{card.description}</p>
                        <p className='text-2xl font-medium mt-1'>{card.price}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product
