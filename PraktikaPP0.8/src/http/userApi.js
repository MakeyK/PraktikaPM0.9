import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';

export const registration = async (FIO, email, login, password) => {
    const {data} = await $host.post('registration', { FIO, email, login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const logins = async (login, password) => {
    const { data } = await $host.post('login', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const createRequest = async (tema, description_problem) => {
    const { data } = await $authHost.post('req', { tema, description_problem }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return data
}
export const getAll = async () => {
    try {
        const {data} = await $authHost.get(`getrequest`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        return data
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const updateAccess = async (id_request) => {
    try {
        const { data } = await $authHost.patch(`/access`, { id_request }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return data
    } catch (e) {
        alert(e.response.data.message)
    }
}
export const updateDenied = async (id_request) => {
    try {
        const { data } = await $authHost.patch(`${process.env.REACT_APP_API_URL}/denied`, { id_request },
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        return data

    } catch (e) {
        alert(e.response.data.message)
    }
}