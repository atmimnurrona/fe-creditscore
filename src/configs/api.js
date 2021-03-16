import axios from "axios";

axios.interceptors.response.use(function (response) {
    if (response.status !== 200) {
        throw new Error(response.statusText)
    }

    let data = response.data
    if (data.code !== 200) {
        throw new Error(data.message);
    }
    return response.data.data;
}, function (error) {
    return Promise.reject(error);
});

export default axios;