import React from 'react';
import BookItem from "./BookItem";
import s from './Dashboard.module.css'

const Dashboard = () => {

    return (
        <table className={s.wrapper}>
            <tbody>
            <tr className={s.table_box}>
                <th className={s.table_item}>Book title</th>
                <th className={s.table_item}>Author name</th>
                <th className={s.table_item}>Category</th>
                <th className={s.table_item}>ISBN</th>
                <th className={s.table_item}>Active</th>
            </tr>
            <BookItem/>
            </tbody>
        </table>
    );
}

export default Dashboard;
