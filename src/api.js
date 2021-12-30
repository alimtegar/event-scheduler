import axios from 'axios';

export const getEvents = async (params) => {
    const { data } = await axios.get('/events', {
        params: params,
    })
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