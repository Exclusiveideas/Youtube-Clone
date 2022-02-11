import axios from "axios";


export const fetchResults = async (query) => {
    const q = query.replaceAll(' ', '+');
    try {
        const response = await axios.request({
            method: 'GET',
            url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
            params: { q: q },
            headers: {
                'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_SEARCH_API_KEY
            }
        })
        return response.data
    } catch (error) {
        console.error('error >>> ', error); 
    };
}
         
