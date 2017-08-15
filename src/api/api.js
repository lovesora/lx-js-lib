class API {
    constructor (host = typeof(location) !== "undefined" && location.origin || '') {
        this.data = {};
        this.data.host = host;
    }

    api (method, url, newUrl) {
        // let urlFormat = url.split(/\//).filter(v => !!v).map((v, k) => !!k && v.replace(/^(\w)/,v => v.toUpperCase()) || v).join('');
        let urlFormat = method.toLowerCase() + url.split(/\//).filter(v => !!v).map(v => v.replace(/^(\w)/,v => v.toUpperCase())).join('');
        url = !!newUrl && newUrl || url;
        let absUrl = this.data.host + url;
        this.data[urlFormat] = {
            method,
            url,
            absUrl
        };
        return this;
    }

    apis () {
        return this.data;
    }
}

export default API;
