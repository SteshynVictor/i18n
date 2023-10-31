import axios from 'axios';

const useAxios = () => {
    //process.env.REACT_APP_TEST_TOKEN

    const config={
        baseURL:`${process.env.API_URL}/v1`,
        headers:
            {
                // 'Authorization':`Bearer ${user?.token?user.token:''}`,
                'Authorization':`Bearer ${process.env.API_KEY}`,
                'Content-Type' : 'multipart/form-data'
            }
    };

    const instance = axios.create(config);

    // Add a request interceptor
    instance.interceptors.response.use(response => {
        // Do something before request is sent
        return response;

        //return response;
    }, error => {
        // Do something with request error
        if(error.code === "ERR_NETWORK") {
            console.error(error.message);
        }
        return false;
        return Promise.reject(error);
    });

    return instance;

}

export default useAxios;


// axios.defaults.baseURL = process.env.REACT_APP_API;
// 1?axios.defaults.headers.common['Authorization'] =  `Bearer ${process.env.REACT_APP_TEST_TOKEN}`:'';
