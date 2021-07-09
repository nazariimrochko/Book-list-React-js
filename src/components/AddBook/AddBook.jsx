import React, {useState, useEffect} from 'react';
import s from './AddBook.module.css'
import InputField from "./InputField";
import {useLocation, useHistory} from "react-router-dom";
import {createBook} from "../../api";


const AddBook = () => {
    const [bookData, setBookData] = useState({});
    let location = useLocation();
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        createBook(bookData)
            .then((response) => {
                history.goBack();

            }).catch((error) => {
            console.log(error);
        });
    };
    console.log(location);

    return (
        <div className={s.form_book_wrapper}>
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
                <label className={s.form_label}>Category</label>
                <select className={`${s.form_input} ${s.select}`}
                        id={bookData.category}
                        name='category'
                        onChange={e => setBookData({...bookData, category: e.target.value})}
                        required>
                    <option value='none'></option>
                    <option value="detective">Detective fiction</option>
                    <option value="science">Science fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance novel</option>
                    <option value="horror">Horror</option>
                    <option value="classic">Classic</option>
                    <option value="fairy tale">Fairy tale</option>
                </select>
                <InputField className={s.form_input}
                            label="ISBN"
                            type="number"
                            value={bookData.isbn}
                            onChange={e => setBookData({...bookData, isbn: e.target.value})}/>

                <button className={s.button}> Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
