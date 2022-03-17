import axios from "axios";

const getAllArticlesFromDb = async () => {
    try {
        const { data } = await axios.get("http://localhost:5000");
        return data;
    } catch (error) {
        return error;
    }
};
const getArticlesFromDb = async (body) => {
    try {
        const { data } = await axios.put("http://localhost:5000", body);
        return data;
    } catch (error) {
        return error;
    }
};

const exportedObject = {
    getAllArticlesFromDb,
    getArticlesFromDb
};

export default exportedObject;
