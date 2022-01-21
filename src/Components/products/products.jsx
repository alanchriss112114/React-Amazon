import React from 'react'
import './products.css'

function products() {
    return (
        <div>
            <section>
                <div className="products-container">
                    <div className="product-image-div">
                        <img src="https://www.gizmochina.com/wp-content/uploads/2018/04/Xiaomi-Mi-Gaming-Laptop-I7-500x500.jpg" alt="" className="product-image" />
                    </div>
                    <div className="product-content">
                        <p className="product-title">Name of the product and description</p>
                        <p className="product-currency">$<span className="product-price">4999</span>99</p>
                        <p className="product-category">Category of the product</p>
                        <p className="choices-text">More Buying Choices</p>
                    </div>
                    <hr className='productLine'/>
                </div>
                <div className="products-container">
                    <div className="product-image-div">
                        <img src="https://www.gizmochina.com/wp-content/uploads/2018/04/Xiaomi-Mi-Gaming-Laptop-I7-500x500.jpg" alt="" className="product-image" />
                    </div>
                    <div className="product-content">
                        <p className="product-title">Name of the product and description</p>
                        <p className="product-currency">$<span className="product-price">4999</span>99</p>
                        <p className="product-category">Category of the product</p>
                        <p className="choices-text">More Buying Choices</p>
                    </div>
                    <hr className='productLine'/>
                </div>
                <div className="products-container">
                    <div className="product-image-div">
                        <img src="https://www.gizmochina.com/wp-content/uploads/2018/04/Xiaomi-Mi-Gaming-Laptop-I7-500x500.jpg" alt="" className="product-image" />
                    </div>
                    <div className="product-content">
                        <p className="product-title">Name of the product and description</p>
                        <p className="product-currency">$<span className="product-price">4999</span>99</p>
                        <p className="product-category">Category of the product</p>
                        <p className="choices-text">More Buying Choices</p>
                    </div>
                    <hr className='productLine'/>
                </div>
            </section>
        </div>
    )
}

export default products
