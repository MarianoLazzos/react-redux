import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mLwEsWmBdVpEQpLJ-7itXzkQ7Nb5hZkMvRogm-0_ARU'
    }
})