import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PRODUCT_DATA } from '../../utils/helper';
import CustomBtn from '../common/CustomButton';

const ProductDetails = () => {
    const { productId } = useParams();

    const product = PRODUCT_DATA.find(item => item.id === productId);

    if (!product) {
        return <div className="text-center text-2xl font-bold mt-10">Product not found</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 shadow-xl mt-10">
            <img src={product.img} alt={product.title} className='w-full mb-4' />
            <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-2xl font-semibold">{product.price}</p>
            <div className='flex justify-center'>
                <Link to="/product">
                    <CustomBtn text="Back to product" myClass="mt-4" />
                </Link>
          </div>
        </div>
    );
};

export default ProductDetails;
