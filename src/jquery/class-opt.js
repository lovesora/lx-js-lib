class $ {
    static hasClass(elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    }
    
    static addClass(ele, cls) {
        if (!hasClass(elem, cls)) {
            ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
        }
    }
    
    static removeClass(ele, cls) {
        if (hasClass(elem, cls)) {
            var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
            while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                newClass = newClass.replace(' ' + cls + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    
    static toggleClass(obj, cls) {
        hasClass(obj, cls) ? removeClass(obj, cls) : addClass(obj, cls);
    }
    
}

export default $;