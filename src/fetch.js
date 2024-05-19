import api from "./api";

const SearchInput = async (coretype, input, page) => {
    try{
        const response = await api.get(`/book/${coretype}/${input}/${page}`, { headers: { "ngrok-skip-browser-warning": "any"} })
        const { data } = response
        return data
    }catch(error){
        console.log(error)
        return {error, message: error.message}
    }
}

const SearchBook = async(id) => {
    try{
        const response = await api.get(`/book/${id}`, { headers: { "ngrok-skip-browser-warning": "any"} })
        const {data} = response
        return data
    }catch(error){
        console.log(error)
        return {error, message: error.message}
    }
}

export  default {
    SearchInput,
    SearchBook
}