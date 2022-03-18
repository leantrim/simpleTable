import axios from "axios";

const DB_URL = 'http://localhost:5000/api/articles';

const getAllArticlesFromDb = async () => {
    try {
        const { data } = await axios.get(DB_URL);
        return data;
    } catch (error) {
        return error;
    }
};
const getFilteredArticlesFromDb = async (body) => {
    try {
        const { data } = await axios.put(DB_URL, body);
        return data;
    } catch (error) {
        return error;
    }
};

const exportedObject = {
    getAllArticlesFromDb,
    getFilteredArticlesFromDb
};

export default exportedObject;
