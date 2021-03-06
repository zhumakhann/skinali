import React, { useState } from 'react'
import Popup from '../../HOC/Popup'
import { editCategory, deleteCategory } from '../../../redux/actions/adminCategories'
import { connect } from 'react-redux'


function Category(props) {
    const [popupDeleteActive, setPopupDeleteActive] = useState(false)
    const [popupEditActive, setPopupEditActive] = useState(false)
    const [name, setName] = useState(props.category.name);
    const [description, setDescription] = useState(props.category.description);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(props.category.id, name, description);
        props.editCategory(props.category.id, name, description)
    }

    return (
        <>
            <Popup active={popupDeleteActive} close={() => setPopupDeleteActive(false)}>
                Вы действительно хотите удалить {props.category.name}?
                <br />
                <button className="btn btn-red" onClick={() => props.deleteCategory(props.category.id)}>Удалить</button>
            </Popup>
            <Popup active={popupEditActive} close={() => setPopupEditActive(false)}>
                <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
                    <label className="form__item">
                        Изменить название
                        <input className="form__item-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="form__item">
                        Изменить описание
                        <textarea className="form__item-input textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <button className="form__submit">
                        Отправить
                    </button>
                </form>
            </Popup>
            <li className="category">
                <h3 className="category__title">
                    {props.category.name}
                </h3>
                <p className="category__description">
                    {props.category.description}
                </p>
                <div className="category__buttons">
                    <button className="category__buttons-item btn btn-red" onClick={() => setPopupDeleteActive(true)}>
                        Удалить
                    </button>
                    <button className="category__buttons-item btn btn-green" onClick={() => setPopupEditActive(true)}>
                        Редактировать
                    </button>
                </div>
            </li>
        </>
    )
}


function mapDispatchToProps(dispatch){
    return{
        editCategory: (id, name, description) => dispatch(editCategory(id, name, description)),
        deleteCategory: (id) => dispatch(deleteCategory(id)),
    }
}

export default connect(null, mapDispatchToProps)(Category)