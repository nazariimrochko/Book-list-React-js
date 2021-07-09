import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import s from './Dashboard.module.css';
import axios from "axios";
import {deleteBookListById, getBookList} from "../../api";

const BookItem = () => {
    const [booksList, setBooksList] = useState([]);

    const deleteBook =(id) => {
        // eslint-disable-next-line no-restricted-globals
       let  confirmation = confirm(`You deleted book - ${+id} - with list`)
        if(confirmation === true){
            deleteBookListById(id)
                .then((response) => {
                    getBookList()
                        .then((response) => {
                            setBooksList(response.data)
                        })
                }).catch((error) => {
                alert("Error")
            })
        }else{
            alert('You are not delete this book')
        }
    };

    useEffect(() => {
        getBookList()
            .then((response) => {
                setBooksList(response.data)

            }).catch((error) => {
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
