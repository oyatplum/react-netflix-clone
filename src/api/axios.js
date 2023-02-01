import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "499d3468a0cbbe28de9b531718a3a75f",
        language: "ko-KR",
    }
})

export default instance