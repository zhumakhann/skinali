import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Sort from '../Sort/Sort'
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem'


// DELETE WHEN INTERNET IS CONNECTED
const products = [
    {
        name: 'Iphone',
        price: 320000,
        description: 'Apple is goood',
    },
    {
        name: 'Samsung',
        price: 220000,
        description: 'also good',
    },
    {
        name: 'Xiaomi',
        price: 50000,
        description: 'Dlya bomzhei',
    }
]


function Abc(props) {
    let items;
    useEffect(() => {
        props.products.products.length > 1 ? items = props.products.products : items = products;
        console.log(items);
    }, [props.products.products])
    return (
        <div>
            <Sort />
            <SearchForm />
            <ul className="products-list">
                {
                    
                    products.map((product, i) => (
                        <ProductItem key={i} product={product} />
                    ))
                }
            </ul>
        </div>
    )
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}
export default connect(mapStateToProps)(Abc)