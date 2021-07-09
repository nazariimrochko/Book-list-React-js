import axios from 'axios';

const newAxios = axios;
newAxios.defaults.baseURL = 'http://localhost:3000';
newAxios.defaults.headers = {
    'Content-Type': 'application/json',
};

export const getBookList = () =>{
    return newAxios.get(`booksList/`);
}
export const getBookListById = (bookId) =>{
    return newAxios.get(`booksList/${bookId}`);
}
export const postBookList = (bookData,) =>{
    return newAxios.post('booksList', bookData)
}
export const putBookInBookList = (bookId,editData) => {
    return axios.put(`booksList/${bookId}`, editData)
}
export const deleteBookListById = (id) => {
    return axios.delete(`booksList/`+id)
}
