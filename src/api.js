import axios from 'axios';
import { key, ROOT_URL } from "./info";

const searchImages = async (term) => {
    const response = await axios.get(ROOT_URL, {
        headers: {
            Authorization: 'Client-ID '+ key,
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};
export default searchImages;
