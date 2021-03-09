import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../redux/actions/categories'
import { fetchProducts, productsCategoryFilter } from '../../../redux/actions/products'
import { categorySelect } from '../../../redux/actions/categories'
import Preloader from '../../common/Preloader'
import Sort from '../Sort/Sort'
import './Products.scss'
import ProductItem from '../ProductItem/ProductItem'
import SearchForm from '../SearchForm/SearchForm'



function Products(props) {
    useEffect(() => {
        props.productsCategoryFilter(props.products.products, props.categories.selectedCategory)
    }, [props.categories.selectedCategory])
    
    useEffect(() => {
        props.fetchCategories();
        props.fetchProducts()
    }, [])
    
    const categoryClickHandler = (e, name) =>{
        const parent = e.target.closest('.products__categories-item');
        const parents = document.querySelectorAll('.products__categories-item');
        parents.forEach(category => {
            category.classList.remove('active')
        })
        parent.classList.add('active')
        console.log(parent, parents);
        props.categorySelect(name)
    }

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
                            <>
                                <li className="products__categories-item">
                                    <button onClick={(e) => categoryClickHandler(e, 'al1al1')}>
                                        Все
                                    </button>
                                </li>
                                {props.categories.categories.map( category => (
                                    <li key={category.id} className="products__categories-item">
                                        <button id={category.id} onClick={(e) => categoryClickHandler(e, category.name)}>
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </>
                        }
                        </nav>
                    </aside>
                    <div className="products__content">
                        <ul className="products__list">
                            {
                                props.products.isLoading ? <Preloader /> :
                                // const products = props.products.filteredProducts || props.products.products
                                (props.products.filteredProducts.length >= 1 ? props.products.filteredProducts : props.products.products).map((product, i) => (
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
        fetchProducts: () => dispatch(fetchProducts()),
        categorySelect: (category) => dispatch(categorySelect(category)),
        productsCategoryFilter: (state, category) => dispatch(productsCategoryFilter(state, category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)