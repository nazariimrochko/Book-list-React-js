import React, {useState, useEffect} from 'react';
import s from './AddBook.module.css'
import InputField from "./InputField";
import axios from "axios";
import {useLocation, useHistory} from "react-router-dom";


const AddBook = (props) => {
    const [bookData, setBookData] = useState({});
    let location = useLocation();
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(bookData);
        axios.post('booksList', bookData)
            .then((response) => {
                history.goBack();

            }).catch((error) => {
            console.log(error);
        });
    };
    console.log(location);

    return (
        <div className={s.add_book_wrapper}>
            <form onSubmit={handleSubmit} className={s.form}>
                <InputField className={s.form_input}
                            label="Title book"
                            type="text"
                            value={bookData.title}
                            onChange={e => setBookData({...bookData, title: e.target.value})}/>

                <InputField className={s.form_input}
                            label="Author"
                            type="text"
                            value={bookData.author}
                            onChange={e => setBookData({...bookData, author: e.target.value})}/>

                <InputField className={s.form_input}
                            label="Category"
                            type="text"
                            value={bookData.category}
                            onChange={e => setBookData({...bookData, category: e.target.value})}/>

                <InputField className={s.form_input}
                            label="ISBN"
                            type="number"
                            value={bookData.isbn}
                            onChange={e => setBookData({...bookData, isbn: e.target.value})}/>

                <button  className={s.button}> Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
