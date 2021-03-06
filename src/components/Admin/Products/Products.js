import React, { useState, useEffect } from 'react'
import Popup from '../../HOC/Popup'
import { fetchProducts } from '../../../redux/actions/products'
import { addProduct, resetState } from '../../../redux/actions/adminProducts'
import { fetchCategories } from '../../../redux/actions/categories'
import './Products.scss'
import { connect } from 'react-redux'
import firebase from '../../../firebase'
import Product from '../Product/Product'
import Preloader from '../../common/Preloader'
const db = firebase.firestore();
const storageRef = firebase.storage().ref("images");

const Products = (props) => {
    const [popupActive, setPopupActive] = useState(false);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fileUrl, setFileUrl] = useState([]);
    const [category, setCategory] = useState('')
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const url = await fileRef.getDownloadURL();
        setFileUrl([...fileUrl, { url: url, title: file.name }]);
        // console.log(e.target.files = []);
        // e.target.files = []
    };
    const submitHandler = (e) => {
        console.log('abc');
        e.preventDefault();
        props.addProduct(name, description, price, fileUrl, category)
    }
    useEffect(() => {
    }, [])
    useEffect(() => {
        props.fetchCategories()
        props.fetchProducts();
        setTimeout(resetEverything, 1000)
    }, [props.adminProducts.added, props.adminProducts.deleted])

    const resetEverything = () => {
        setPopupActive(false)
        setName('')
        setDescription('')
        setPrice('')
        setFileUrl([])
        props.resetState()
    }

    return (
        props.products.isLoading || props.adminProducts.isLoading || props.categories.isLoading ? <Preloader /> :
        <div className="container">
            <Popup active={popupActive} close={() => setPopupActive(false)}>
                <form className="form" onSubmit={(e) => submitHandler(e)}>
                    <ul className="form__images">
                   { fileUrl.map((img, i) => (
                        <li className="form__images-item" key={i}>
                            <img src={img.url} alt={img.title} />
                        </li>
                    ))}
                    </ul>
                    <label className="form__item">
                        Добавить изображение
                        <input className="form__item-input" type="file" onChange={(e) => onFileChange(e)} />
                    </label>
                    <label className="form__item">
                        Название
                        <input className="form__item-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className="form__item">
                        Описание
                        <textarea className="form__item-input textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label className="form__item">
                        Категория
                        <select className="form__item-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                            
                            {
                                props.categories.categories.map(category => (
                                    <option>{ category.name }</option>
                                ))
                            }
                        </select>
                    </label>
                    <label className="form__item">
                        Цена
                        <input className="form__item-input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                    <button className="btn btn-success form__submit w-100" disabled={props.adminProducts.isLoading}>
                        Добавить
                    </button>
                </form>
            </Popup>
            
            <h2 className="title">Продукты</h2>
            <button className="btn btn-secondary buttons__item" onClick={() => setPopupActive(true)}>
                Добавить товар
            </button>
            <ul className="products__list">
                    {
                        props.products.isLoading? 'Loading' :
                        props.products.products.map(product => {
                            // return <Product key={product.id} name={product.name} img={product.images[0]} descr={product.description} price={product.price} />
                            return <Product key={product.id} cls="products__item" product={product} categories={props.categories.categories} />
                        })
                    }
            </ul>
        </div>
    )
}


function mapStateToProps(state){
    return {
        products: state.products,
        adminProducts: state.adminProducts,
        categories: state.categories
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (name, description, price, fileUrl, category) => dispatch(addProduct(name, description, price, fileUrl, category)),
        resetState: () => dispatch(resetState()),
        fetchCategories: () => dispatch(fetchCategories())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)