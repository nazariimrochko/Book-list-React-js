import React, {useEffect, useState} from "react";
import {NavLink,} from "react-router-dom";
import s from './Dashboard.module.css';
import axios from "../../api";

const BookItem = () => {
    const [booksList, setBooksList] = useState([]);

    const deleteBook =(id) => {
        alert(`You deleted book - ${+id} - with list`)
        axios.delete(`booksList/`+id)
            .then((response) => {
                axios.get('booksList')
                    .then((response) => {
                        setBooksList(response.data)
                    })
            }).catch((error) => {
                alert("Error")
            console.log(error);
        })
    };

    useEffect(() => {
        axios.get('booksList')
            .then((response) => {
                setBooksList(response.data)

            }).catch((error) => {
            console.log(error);
        })
    }, []);



    const data = booksList.map(book =>
        <tr key={book.id} className={s.table_box}>
            <td className={s.table_item}> {book.title}</td>
            <td className={s.table_item}> {book.author}</td>
            <td className={s.table_item}> {book.category}</td>
            <td className={s.table_item}> {book.isbn}</td>
            <td className={`${s.table_item} ${s.btn}`}>
                <button className={s.button}><NavLink to={`/edit/${book.id}`}>Edit</NavLink></button>
                <button onClick={()=>deleteBook(book.id)} className={`${s.button} ${s.red}`}><NavLink to={`/dashboard`}>Delete</NavLink></button>
            </td>
        </tr>
    );


    return (
        <>
            {data}
        </>
    )
}

export default BookItem;
