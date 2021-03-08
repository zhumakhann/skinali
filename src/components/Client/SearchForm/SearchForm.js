import React from 'react';
import { connect } from 'react-redux';
import { productsSearchEdit, productsFilter, productsSearchReset } from '../../../redux/actions/search';
import { useHistory } from 'react-router-dom';


function SearchForm(props) {
    const history = useHistory();
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
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.productsFilter(props.search.value, props.products.products);
        history.push('search')
    }
    return (
        <div className="search">
            <form className="search__form" onSubmit={onSubmitHandler}>
                <input 
                    className="search__form-input" 
                    type="text" 
                    value={props.search.value} 
                    onChange={(e) => props.productsSearchEdit(e.target.value)} 
                />
                <button className="search__form-submit">
                    S
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        search: state.search,
        products: state.products
    }
}
function mapDispatchToProps(dispatch){
    return{
        productsSearchEdit: (value) => dispatch(productsSearchEdit(value)),
        productsFilter: (value, state) => dispatch(productsFilter(value, state)),
        productsSearchReset: () => dispatch(productsSearchReset())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
