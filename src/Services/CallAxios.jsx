import axios from 'axios';

const CallAxios = () => {

    const url = "http://localhost:8080/voices"

    const getVoices = async () => {
        const res = await axios.get(`${url}`);
        return res;
    };

    const createVoice = async (data) => {
        const res = await axios.post(data);
        return res;
    };

    const updateVoice = async (id, data) => {
        const res = await axios.put(`${url}/${id}`, data);
        return res;
    };

    const deleteVoice = async (id) => {
        const res = await axios.delete(`${url}/${id}`);
        return res;
    };

    return {
        getVoices,
        createVoice,
        updateVoice,
        deleteVoice,
        url
    };
};

export default CallAxios;



