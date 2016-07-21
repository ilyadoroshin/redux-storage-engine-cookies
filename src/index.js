import Cookies from 'js-cookie';

export default (key, options={}) => ({
    load() {
        let state = {};
        const jsonState = Cookies.get(key);
        if (jsonState)
            state = JSON.parse(jsonState);
        return Promise.resolve(state);
    },

    save(state) {
        const jsonState = JSON.stringify(state);
        Cookies.set(key, jsonState, options);
        return Promise.resolve();
    }
});
