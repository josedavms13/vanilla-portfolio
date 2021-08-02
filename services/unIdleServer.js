import axios from "axios";

function unIdleServer(){

    const url = 'https://murmuring-scrubland-15375.herokuapp.com/api/get-opinion';

    return axios.get(url)
}
export default unIdleServer