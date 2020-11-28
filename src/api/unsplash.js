import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vR0RBDK0y7f8vmVfI_J3s3ukpWxY9YPuqihgu2jbcrg'
    }
})