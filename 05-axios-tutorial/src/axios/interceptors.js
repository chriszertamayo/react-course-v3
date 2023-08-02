import axios from 'axios'

const authFetch = axios.create({
    baseURL: "https://course-api.com",
    headers: {
        Accept: 'application/json'
    }
})

authFetch.interceptors.request.use((
    request
) => {
    request.headers.common['Accept'] = 'application/json'
    console.log('request sent')
    return request
}, (error) => {
    return Promise.reject(error)
})

authFetch.interceptors.request.use((response) => {
    console.log('got response')
    return response
}, (error) => {
    console.log(error)
    if (error.response.status === 404) {
        console.log('Not FOUND')
    }
    return Promise.reject(error)
})


export default authFetch