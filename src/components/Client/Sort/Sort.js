import React from 'react';
import { connect } from 'react-redux';
import { productsSort } from '../../../redux/actions/products'

// DELETE WHEN INTERNET IS ON
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

function Sort(props) {
    const onChangeHandler = (e) => {
        console.log(props.products);
        console.log(e.target.value);
        props.productsSort(props.products.products, e.target.value)
    }
    return (
        <div className="sort">
            <p className="sort__text">Сортировать по:</p>
            <select onChange={(e) => onChangeHandler(e)}>
                <option disabled>Цене</option>  
                <option value="lower">Возрастанию цены</option>  
                <option value="higher">Понижению цены</option>  
            </select>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        productsSort: (state, type) => dispatch(productsSort(state, type))
    }
}
function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
