const token = process.env.REACT_APP_API_TOKEN;
const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
})
const BASE = 'https://challenge.thef2e.com/api/thef2e2019/stage6';


export const apiFetchRooms = () => {
    return fetch(`${BASE}/rooms`, {
        method: 'GET',
        headers
    }).then(rs => rs.json());
}

export const apiFetchRoom = (room_id) => {
    return fetch(`${BASE}/room/${room_id}`, {
        method: 'GET',
        headers
    }).then(rs => rs.json());
}

export const apiPostRoom = (data) => {
    return fetch(`${BASE}/room/${data.room_id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name : data.name,
            tel: data.tel,
            date: data.date
        })
    }).then((rs)=> rs.json());
}

export const apiDeleteReservation = () => {
    return fetch(`${BASE}/rooms`, {
        method: 'DELETE',
        headers
    }).then(rs => rs.json());
}