import axios from "axios";

const getAllArticlesFromDb = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/articles');
        return data;
    } catch (error) {
        return error;
    }
};
const getFilteredArticlesFromDb = async (body) => {
    try {
        const { data } = await axios.put('http://localhost:5000/api/articles', body);
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
