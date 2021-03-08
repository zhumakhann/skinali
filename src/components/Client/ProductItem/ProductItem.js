import React from 'react'
import { connect } from 'react-redux'
import { cartHandler } from '../../../redux/actions/cart'

const addClickHandler = (e) => {

}

function ProductItem(props) {
    const { product } = props
    console.log(product);
    return (
        <li className="card" style={{width: '18rem',}}>
            {
                product.images.length ?
                <img className="card-img-top" src={product.images[0].url} alt={product.name} />
                 : ''
            }
            <div className="card-body">
                <h5 className="card-text">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
            </div>
            <button className="btn btn-success" onClick={() => props.cartHandler(props.cart.products, 'add', product)}>Добавить в корзину</button>
        </li>
    )
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        cartHandler: (state, type, product) => dispatch(cartHandler(state, type, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)