import React, { useState } from 'react'
import Popup from '../../HOC/Popup'
import { connect } from 'react-redux'
import { deleteProduct, editProduct } from '../../../redux/actions/adminProducts'
import { fetchProducts } from '../../../redux/actions/products'
import firebase from '../../../firebase'
import './Product.scss'
const db = firebase.firestore();
const storageRef = firebase.storage().ref("images");

function Product(props) {
    const onDeleteHandler = async () => {
        await props.deleteProduct(product.id);
        setPopupDeleteActive(false)
    }
    const { product, cls } = props;
    const [popupDeleteActive, setPopupDeleteActive] = useState(false);
    const [popupEditActive, setPopupEditActive] = useState(false);
    const [fileUrl, setFileUrl] = useState(product.images || []);
    const [name, setName] = useState(product.name)
    const [descr, setDescr] = useState(product.description)
    const [price, setPrice] = useState(product.price)


    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const url = await fileRef.getDownloadURL();
        console.log(url);
        setFileUrl([...fileUrl, { url: url, title: file.name }]);
        console.log(setFileUrl);
        // console.log(e.target.files = []);
        // e.target.files = []
    };

    function onChangeHandler(e){
        e.preventDefault();
        props.editProduct(product.id, name, descr, price, fileUrl)
    }
    return (
        <>
            <Popup active={popupDeleteActive} close={() => setPopupDeleteActive(false)}>
                <p>
                    Вы действительно хотите удалить { product.name }?
                </p>
                <button className="btn btn-danger w-100" onClick={() => onDeleteHandler()}>Удалить</button>
            </Popup>
            <Popup active={popupEditActive} close={() => setPopupEditActive(false)} onSubmit={(e) => props.onChangeHandler(e)}>
                <form className="form" onSubmit={(e) => onChangeHandler(e)}>
                    <ul className="form__images">
                        {
                            fileUrl.length > 1 ? console.log(fileUrl) : null
                        }
                  
                    </ul>
                    <label className="form__item">
                        Добавить изображение
                        <input className="form__item-input" type="file" onChange={(e) => onFileChange(e)} />
                    </label>
                    <label className="form__item">
                        Изменить иазвание
                        <input className="form__item-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="form__item">
                        Изменить описание
                        <textarea className="form__item-input textarea" value={descr}  onChange={(e) => setDescr(e.target.value)}/>
                    </label>
                    <label className="form__item">
                        Изменить цену
                        <input className="form__item-input" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </label>
                    <button className="btn btn-success form__submit w-100">
                        Сохранить
                    </button>
                </form>
            </Popup>
            <li className="card" style={{width: '18rem',}}>
                {
                    product.images ? <img className="card-img-top" src={product.images[0].url} /> : null
                }
                <div className="card-body">
                    <h5 className="card-title">{ product.name }</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <div className="card-buttons">
                        <button className="btn btn-danger" onClick={() => setPopupDeleteActive(true)}>
                            Удалить
                        </button>
                        <button className="btn btn-primary" onClick={() => setPopupEditActive(true)}>
                            Редактировать
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}
function mapStateToProps(state){
    return{
        adminProducts: state.adminProducts
    }
}
function mapDispatchToProps(dispatch){
    return {
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        fetchProducts: () => dispatch(fetchProducts()),
        editProduct: (id, name, description, price, images) => dispatch(editProduct(id, name, description, price, images))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
