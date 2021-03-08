import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm'
import ProductItem from '../ProductItem/ProductItem'
function Search(props) {
    const value = props.search.value;
    return (
        <section className="search">
            <div className="container">
                <SearchForm />
                <h2 className="title">Поиск по запросу {value}</h2>
                <ul className="search__list">
                    {
                        props.search.products.map((product, i) => (
                            <ProductItem key={i} product={product} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

function mapStateToProps(state){
    return{
        search: state.search,
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

export default connect(mapStateToProps)(Search)