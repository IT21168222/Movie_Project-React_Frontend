import axios from 'axios';

export default axios.create({
    baseURL:'https://eaab-2402-4000-20c1-7a1e-25c8-a5c1-a8e1-f6c.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});