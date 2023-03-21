import axios from 'axios';

const CallAxios = () => {

    const url = ""

    const getVoices = async () => {
        const res = await axios.get(`${url}/voices`);
        return res;
    };

    return {
        getVoices,
        url
    };
}

export default CallAxios