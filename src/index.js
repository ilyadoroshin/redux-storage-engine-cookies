import Cookies from 'react-cookie';

export default (key, options={}) => ({
    load() {
        let state = Cookies.load(key);
        return Promise.resolve(state);
    },

    save(state) {
        const jsonState = JSON.stringify(state);
        Cookies.save(key, jsonState, options);
        return Promise.resolve();
    }
});
