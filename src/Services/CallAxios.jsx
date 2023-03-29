import axios from 'axios';

const CallAxios = () => {

    const url = "http://localhost:8080/voices"    


    const getVoices = async (id) => {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    };

    const createVoice = async (data) => {
        const res = await axios.post(`${url}`, data);
        return res;
    };

    const updateVoice = async (id, data) => {
        const res = await axios.put(`${url}/${id}`, data);
        return res;
    };

    const deleteVoice = async (id) => {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
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



