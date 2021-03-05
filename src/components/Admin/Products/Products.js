import React, { useState, useEffect } from 'react'
import Popup from '../../HOC/Popup'
import { fetchProducts } from '../../../redux/actions/products'
import { addProduct } from '../../../redux/actions/adminProducts'
import './Products.scss'
import { connect } from 'react-redux'
import firebase from '../../../firebase'
const db = firebase.firestore();
const storageRef = firebase.storage().ref("images");

const Products = (props) => {
    const [active, setActive] = useState(true)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fileUrl, setFileUrl] = useState([]);
    
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const url = await fileRef.getDownloadURL();
        console.log(url);
        setFileUrl([...fileUrl, { url: url, title: file.name }]);
        console.log(setFileUrl);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(price);
        console.log(description);
        console.log(fileUrl);
        props.addProduct(name, description, price, fileUrl)
    }
    useEffect(() => {
        props.fetchProducts()
    }, [])
    return (
        <>
            <Popup active={active} close={() => setActive(false)}>
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
                        Цена
                        <input className="form__item-input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                    <button className="form__submit">
                        Добавить
                    </button>
                </form>
            </Popup>
            <h2 className="title">Продукты</h2>
            <button className="buttons__item" onClick={() => setActive(true)}>
                Добавить товар
            </button>
        </>
    )
}


function mapStateToProps(state){
    return {
        products: state.products

    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (name, description, price, fileUrl) => dispatch(addProduct(name, description, price, fileUrl))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)