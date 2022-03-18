import axios from "axios";

const DB_URL = 'http://localhost:5000/api/articles';

const getAll = () => axios.get(DB_URL);

const getFiltered = (body) => axios.put(DB_URL, body);

export default {
    getAll,
    getFiltered
};
