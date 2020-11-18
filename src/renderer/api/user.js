import axios from '../utils/axiosService'


export const signByUsername = (name, pwd) => {
    const data = {
        name: name,
        pwd: pwd
    }
    return axios.fetchPost('/users/Login', data)
}


export const Register = (name, pwd) => {
    const data = {
        name: name,
        pwd: pwd
    }
    return axios.fetchPost('/users/register', data)
}