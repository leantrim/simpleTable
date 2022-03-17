import axios from "axios";

const getArticlesFromDb = async (body) => {
    try {
        const { data } = await axios.get("http://localhost:5000", body);
        return data;
    } catch (error) {
        return error;
    }
};

export default getArticlesFromDb;