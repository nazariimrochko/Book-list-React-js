import React, {useEffect, useState} from 'react';
import s from './Editing.module.css'
import InputItem from "./InputItem";
import axios from "axios";
import {useHistory, useLocation} from "react-router-dom";

const Editing = () => {

    let location = useLocation();
    let history = useHistory();
    const [editData, setEditData] = useState({});
    const [bookId] = useState(location.pathname.split('/')[2]);


    useEffect(() => {

        axios.get(`booksList/${bookId}`)
            .then((response) => {
                setEditData(response.data)
            }).catch((error) => {
        })
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`booksList/${bookId}`, editData)
            .then((response) => {
           alert('Your edit completed')
        });

    };
    console.log(editData)
    return (
        <div className={s.edit_book_wrapper}>
            <h2 className={s.form_title}> Now you Editing your book</h2>
            <form onSubmit={handleSubmit} className={s.form}>
                <InputItem
                    type="text"
                    label="Title book"
                    value={editData.title}
                    onChange={e => setEditData({...editData, title: e.target.value})}
                />
                <InputItem
                    type="name"
                    label="Author"
                    value={editData.author}
                    onChange={e => setEditData({...editData, author: e.target.value})}
                />
                <InputItem
                    type="text"
                    label="Category"
                    value={editData.category}
                    onChange={e => setEditData({...editData, category: e.target.value})}
                />
                <InputItem
                    type="text"
                    label="ISBN"
                    value={editData.isbn}
                    onChange={e => setEditData({...editData, isbn: e.target.value})}
                />
                <button  onClick={() => history.goBack()} className={s.button}>Edit</button>
            </form>
        </div>
    );
};
export default Editing;
