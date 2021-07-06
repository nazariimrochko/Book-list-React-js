import React from 'react';
import BookItem from "./BookItem";
import s from './Dashboard.module.css'

const Dashboard = () => {

    return (
        <table className={s.wrapper}>
            <tbody>
            <tr className={s.table_box}>
                <th className={s.table_itemTitle}>Book title</th>
                <th className={s.table_itemTitle}>Author name</th>
                <th className={s.table_itemTitle}>Category</th>
                <th className={s.table_itemTitle}>ISBN</th>
                <th className={s.table_itemTitle}>Active</th>
            </tr>
            <BookItem/>
            </tbody>
        </table>
    );
}

export default Dashboard;
