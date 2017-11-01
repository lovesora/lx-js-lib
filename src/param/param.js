export default class Param {
    /**
     * @param ?a=1&b=2&a=3&c=3
     * @return {a: [1, 3], b: 2, c: 3}
     */
    getParams(_location = location) {
        let hash = _location.hash ? _location.hash.split('?') : _location.split('?');
        let params = hash[hash.length - 1];
        params = params.split('&');
    
        let result = {}
        params.map(v => {
            let _param = v.split('=');
    
            if (result[_param[0]]) {
                if (Object.prototype.toString.call(result[_param[0]]) === '[object Array]') {
                    result[_param[0]] = result[_param[0]].push(_param[1]);
                } else {
                    result[_param[0]] = [result[_param[0]], _param[1]];
                }
            } else {
                result[_param[0]] = _param[1];
            }
    
        })
        return result;
    }
}