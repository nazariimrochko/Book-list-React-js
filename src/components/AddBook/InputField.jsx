import React  from 'react';
import s from './AddBook.module.css'

const InputField = ({ type, label, value, onChange }) => (
    <label className={s.form_label}>
        {label}
        <input className={s.form_input} type={type} value={value} onChange={onChange} required />
    </label>
);

export default InputField ;
