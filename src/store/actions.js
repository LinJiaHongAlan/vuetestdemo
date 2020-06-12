import axios from 'axios'

const geturl = "http://127.0.0.1:8081"

export default {
    async updatelist(context, str) {
        //发送ajax请求
        const {data: res} = await axios.get(`${geturl}/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=${str}`)
        context.commit('updatelist', res.subjects)
    }
}