import axios from 'axios';

const CallAxios = () => {

    const url = "http://localhost:8080/voices"

    const getVoices = async () => {
        const res = await axios.get(`${url}`);
        return res;
    };

    return {
        getVoices,
        url
    };
}

export default CallAxios

