import axios from 'axios';

const KEY = 'AIzaSyC7d5sjuU0bObe9guDrDL5HW4vxmtMmwZc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});





