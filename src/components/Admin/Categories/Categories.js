import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../redux/actions/categories';
import Preloader from '../../common/Preloader';
import Popup from '../../HOC/Popup'
import { addCategory, resetState } from '../../../redux/actions/adminCategories'
import Category from '../Category/Category'
import './Categories.scss'


function Categories(props) {
    const [popupActive, setPopupActive] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        props.fetchCategories()
        console.log(props);
        setTimeout(resetEverything, 1000)
    }, [props.adminCategories.edited])

    const resetEverything = () => {
        setPopupActive(false);
        setName('')
        setDescription('')
        props.resetState();
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(name, description);
        props.addCategory(name, description)
    }

    return (
        <>  
          {
              props.categories.isLoading || props.adminCategories.isLoading ?
              <Preloader /> :
              <section  className="categories">
                <Popup active={popupActive} close={() => setPopupActive(false)}>
                    <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
                        <label className="form__item">
                            Название
                            <input className="form__item-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label className="form__item">
                            Описание
                            <textarea className="form__item-input textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <button className="btn btn-success form__submit w-100">
                            Отправить
                        </button>
                    </form>
                </Popup>
                <h2 className="title">Категории</h2>
                <button className="btn btn-secondary" onClick={() => setPopupActive(true)}>
                    Добавить Категорию
                </button>
                <ul className="categories-list">
                    {
                        props.categories.categories.map(category => (
                            <Category key={category.id} category={category}/>
                        ))
                    }
                </ul>
              </section>
          }  
        </>
    )
}

function mapStateToProps(state){
    return{
        categories: state.categories,
        adminCategories: state.adminCategories,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchCategories: () => dispatch(fetchCategories()),
        addCategory: (name, description) => dispatch(addCategory(name, description)),
        resetState: () => dispatch(resetState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
