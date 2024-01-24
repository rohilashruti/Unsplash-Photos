
import axios from "axios";

const searchImages = async (term) => {
    try {
        
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID itFIdpU7bUmrskN4EoXCKzdPy7D5MG-H21szcPg8KkI'
            },
            params: {
                query: term 
            }
        });

       
        return response.data.results;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error; 
    }
};

export default searchImages;


