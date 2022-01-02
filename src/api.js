import axios from 'axios';

// Auth
export const login = async (credentials) => {
    const { data } = await axios.post('/login', credentials)
        .catch((err) => { throw Error(err) });

    return data;
}

export const verifyToken = async (token) => {
    const { data } = await axios.get('/verify-token', { headers: { 'Authorization': token } })
        .catch((err) => { throw Error(err) });
        
    return data;
}

export const register = async (user) => {
    const { data } = await axios.post('/register', user)
        .catch((err) => { throw Error(err) });

    return data;
}

// Events
export const getEvents = async (params) => {
    const { data } = await axios.get('/events', { params: params })
        .catch((err) => { throw Error(err) });

    return data;
}

export const getEvent = async (id) => {
    const { data } = await axios.get(`/events/${id}`)
        .catch((err) => { throw Error(err) });

    return data;
}

export const createEvent = async (event) => {
    const { data } = axios.post(`/events`, event)
        .catch((err) => { throw Error(err) });

    return data;
}

export const updateEvent = async (id, event) => {
    const { data } = axios.put(`/events/${id}`, event)
        .catch((err) => { throw Error(err) });

    return data;
}

export const deleteEvent = async (id) => {
    const { data } = await axios.delete(`/events/${id}`)
        .catch((err) => { throw Error(err) });

    return data;
}