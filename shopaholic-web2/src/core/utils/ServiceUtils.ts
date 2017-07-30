import axios from 'axios';

class ServiceUtils {
    static GET(url: string): Promise<object> {
        return axios.get(url);
    }
    static POST(url: string, options: object): Promise<object> {
        return axios.post(url, options);
    }
}

export default ServiceUtils;
