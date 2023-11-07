import axios from 'axios'

const localhost = '192.168.128.19';
export const getAllstatus = async () => {
    return  axios.get(`http://${localhost}:8080/mystatus/selectAll`)
        .then((res) => {
            console.log(res.data.data);
            return res.data.data;
        })
        .catch(error => {
            throw error;
          });
}