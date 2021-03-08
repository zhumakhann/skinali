import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../redux/actions/categories'
import { fetchProducts } from '../../../redux/actions/products'
import Preloader from '../../common/Preloader'
import Sort from '../Sort/Sort'
import './Products.scss'
import ProductItem from '../ProductItem/ProductItem'
import SearchForm from '../SearchForm/SearchForm'

function Products(props) {

    useEffect(() => {
        props.fetchCategories();
        props.fetchProducts()
    }, [])

    return (
        <section className="products">
            <div className="container">
                <SearchForm />
                <Sort />
                <div className="products__wrapper d-flex jc-sb">
                    <aside className="products__aside">
                        <nav className="products__categories">
                        {
                            props.categories.isLoading ? 
                            <Preloader /> :
                            props.categories.categories.map( category => (
                                <li className="products__categories-item">
                                    <button id={category.id}>
                                        {category.name}
                                    </button>
                                </li>
                            ))
                        }
                        </nav>
                    </aside>
                    <div className="products__content">
                        <ul className="products__list">
                            {
                                props.products.isLoading ? <Preloader /> :
                                props.products.products.map((product, i) => (
                                    <ProductItem key={i} product={product} />
                                    // <li className="card" style={{width: '18rem',}}>
                                    //     {
                                    //         product.images ? <img className="card-img-top" src={product.images[0].url} /> : null
                                    //     }
                                    //     <div className="card-body">
                                    //         <h5 className="card-title">{ product.name }</h5>
                                    //         <p className="card-text">{product.description}</p>
                                    //         <p className="card-text">{product.price}</p>
                                    //         <button className="btn btn-success">Купить</button>
                                    //     </div>
                                    // </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            Hello from products
        </section>
    )
}

function mapStateToProps(state){
    return{
        categories: state.categories,
        products: state.products
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchCategories: () => dispatch(fetchCategories()),
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)