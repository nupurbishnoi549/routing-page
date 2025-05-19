import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DATA } from '../utils/helper';
import CustomBtn from '../components/common/CustomButton';

const Product = () => {
    return (
        <section className='pt-40'>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCT_DATA.map((card, index) => (
                    <div key={index} className='shadow-lg p-3 '>
                        <Link to={`/products/${card.id}`}>
                            <img src={card.img} alt={card.title} className='w-full cursor-pointer hover:opacity-80 transition' />
                            <div className='!flex !justify-center'>
                                <CustomBtn text="View Details" myClass="!mt-4 !px-5" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Product;

