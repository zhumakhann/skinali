import React from 'react'
import Popup from '../../HOC/Popup'
import { connect } from 'react-redux'
import { cartHandler } from '../../../redux/actions/cart'

function Cart(props) {
    return (
        <Popup active={props.active} close={props.close}>
            <ul className="cart-list">
                {
                    props.cart.products.length < 1 ?
                    <li>Товаров в корзине нету</li> :
                    props.cart.products.map((item, i) => (
                        <li className="cart-item" key={i}>
                            {item.name}
                            {item.price}
                            <div className="cart-item__buttons d-flex">
                                <button onClick={() => props.cartHandler(props.cart.products, 'minus', item)}>
                                    -
                                </button>
                                {
                                    item.quantity
                                }
                                <button onClick={() => props.cartHandler(props.cart.products, 'plus', item)}>
                                    +
                                </button>
                            </div>
                            <button onClick={() => props.cartHandler(props.cart.products, 'delete', item)}>
                                Delete
                            </button>
                        </li>

                    ))
                }
            </ul>
            <p>{
                props.cart.total ?
                props.cart.total.toLocaleString('Ru', 'ru') :
                ''
            }</p>
        </Popup>
    )
}


function mapStateToProps(state){
    return{
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        cartHandler: (state, type, product) => dispatch(cartHandler(state, type, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
