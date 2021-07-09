import React, {useEffect, useState} from 'react';
import s from '../AddBook/AddBook.module.css'
import InputField from "../AddBook/InputField";
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
                history.goBack();
                alert('Your edit completed')

            }).catch((error) => {
            console.log(error);
        });
    };
    console.log(editData)
    return (
        <div className={s.edit_book_wrapper}>
            <h2 className={s.form_title}> Now you Editing your book</h2>
            <form onSubmit={handleSubmit} className={s.form}>
                <InputField
                    type="text"
                    label="Title book"
                    value={editData.title}
                    onChange={e => setEditData({...editData, title: e.target.value})}
                    required
                />
                <InputField
                    type="name"
                    label="Author"
                    value={editData.author}
                    onChange={e => setEditData({...editData, author: e.target.value})}
                    required
                />
                <label className={s.form_label}>Category</label>
                <select className={`${s.form_input} ${s.select}`}
                        id={editData.category}
                        name='category'
                        onChange={e => setEditData({...editData, category: e.target.value})}
                        required>
                    <option></option>
                    <option value="crime">Crime</option>
                    <option value="detective">Detective fiction</option>
                    <option value="science">Science fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance novel</option>
                    <option value="horror">Horror</option>
                    <option value="classic">Classic</option>
                    <option value="fairy tale">Fairy tale</option>
                </select>
                <InputField
                    type="text"
                    label="ISBN"
                    value={editData.isbn}
                    onChange={e => setEditData({...editData, isbn: e.target.value})}
                    required
                />
                <button  className={s.button}>Edit</button>
            </form>
        </div>
    );
};
export default Editing;
