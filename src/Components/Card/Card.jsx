import React, { useState } from 'react'
import CartButton from './CartButton';
import Size from './Size';
import Buy from './Buy';

const products = [
    {
        productImg: 'https://placehold.co/250x170',
        productName: 'Denim Shirt',
        price: '₹500.01',
        oldPrice: '₹600.02',
        sizes: ['S','M','L','XL'],
    },  
    {
        productImg: 'https://placehold.co/250x170',
        productName: 'Denim Shirt',
        price: '₹500.01',
        oldPrice: '₹600.02',
        sizes: ['S','M','L','XL'],
    },
    {
        productImg: 'https://placehold.co/250x170',
        productName: 'Denim Shirt',
        price: '₹500.01',
        oldPrice: '₹600.02',
        sizes: ['S','M','L','XL'],
    },
    {
        productImg: 'https://placehold.co/250x170',
        productName: 'Denim Shirt',
        price: '₹500.01',
        oldPrice: '₹600.02',
        sizes: ['S','M','L','XL'],
    }
]

function Product(props){
    const {product} = props;
    const [selectedSize, setselectedSize] = useState('')
    const selectSize = (size)=>{
        setselectedSize(size);
    }
    return(
        <div className='w-fit border p-3 rounded-md space-y-3'>
            <div style={{
                maxWidth:'250px',
                width:'100%'
            }}>
                <img style={{width:'100%'}} src={product.productImg} alt="productImg"/>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl'>{product.productName}</h1>
                    <CartButton/>
                </div>
                <p>{product.price} <span className='line-through text-xs text-gray-500'>{product.oldPrice}</span></p>
            </div>
            <div className="size flex w-10/12 gap-1">
                {product.sizes.map((size,index)=><Size key={index} sizes = {size} isActive = {size===selectedSize} selectSize={selectSize} />)}
            </div>
            <Buy/>
        </div>
    )
}

function Card() {
  return (
    <div className='flex flex-wrap w-11/12 flex-shrink gap-3 my-7'>{
        products.map((product,index)=>(
                <Product key = {index} product = {product}/>
            )
        )}
    </div>
  )
}

export default Card