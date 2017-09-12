class API {
    constructor (host = typeof(location) !== 'undefined' && location.origin || '') {
        this.data = {};
        this.data.host = host;
    }

    static insertRestParams (params) {
        let restUrl     = this.url;
        let restAbsUrl  = this.absUrl;
        for (let key in params) {
            restUrl     = restUrl.replace(':' + key, params[key]);
            restAbsUrl  = restAbsUrl.replace(':' + key, params[key]);
        }
        this.restUrl    = restUrl;
        this.restAbsUrl = restAbsUrl;
    }
    
    api (method, url, newUrl) {
        // let urlFormat = url.split(/\//).filter(v => !!v).map((v, k) => !!k && v.replace(/^(\w)/,v => v.toUpperCase()) || v).join('');
        let urlFormat = method.toLowerCase() + url.split(/\//).filter(v => !!v).map(v => v.match(/\w+/)[0].replace(/^(\w)/,v => v.toUpperCase())).join('');
        url = !!newUrl && newUrl || url;
        let absUrl = this.data.host + url;
        this.data[urlFormat] = {
            method,
            url,
            absUrl,
            insertRestParams (params) {
                API.insertRestParams.call(this, params);
                return this;
            }
        };
        return this;
    }

    apis () {
        return this.data;
    }
}

export default API;
