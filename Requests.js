import axios from "axios";

const BACKEND = `http://192.168.100.154:3000`;

const loginUser = async (values) => {
    // Values u sebe imaju username i pass
    // Vraca token, taj token stavljas u localstorage
    // Ako ima token u localstorage onda moze da se pristupi
    // Ako nema, uradi navigate na login
    return await axios.post(`${BACKEND}/login`, values);
}

const getDatesForUser = async (username) => {
    return await axios.get(`${BACKEND}/date/${username}`);
}

export {
    getDatesForUser
}
