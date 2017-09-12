export default class Compat {
    static css = {
        /**
         * 判断浏览器是否支持动画
         * @return  {Boolean} true/false
         * @version 1.0
         * @author  liuxin
         * 2017-09-11 19:40:26
         */
        isAbleAnimate() {
            return Compat.css.isAbleByStyleName('animation');
        },

        /** 
         * 判断浏览器是否支持某一个CSS3属性 
         * @param   {String} 属性名称 
         * @return  {Boolean} true/false 
         * @version 1.0 
         * @author  liuxin 
         * 2017-09-11 19:24:47
         */
        isAbleByStyleName(style) {
            let prefix = ['webkit', 'Moz', 'ms', 'o'],
                jsStyle = [style],
                htmlStyle = document.documentElement.style;

            jsStyle.push(
                prefix.map(
                    pre => pre + style.replace(/^(\w)/, v => v.toUpperCase())
                )
            );

            return (
                jsStyle.filter(item => htmlStyle.hasOwnProperty(item)).length > 0
            );
        }
    };

    static browser = {
        /**
         * 获取微信客户端版本
         * @return  {string} 微信版本号，如果不是微信浏览器则返回 ''
         * @version 1.0
         * @author  liuxin
         * 2017-09-11 20:10:29
         */
        getWechatVersion() {
            let wechatInfo = navigator.userAgent.match(/MicroMessenger\/(\d)\.(\d)\./i);
            return null === wechatInfo ? '' : `${wechatInfo[1]}.${wechatInfo[2]}`;
        },
        
        /**
         * 获取浏览器版本信息
         * @return  {String} ['IE', 'IE7', 'IE8', 'IE9', 'IE10', 'IE11', 'FF', 'Opera', 'Safari', 'Chorome', 'Edge', 'Unknown']
         * @version 1.0
         * @author  LittleQiang_w
         * 2017-09-11 19:48:03
         */
        getType () {
            var userAgent = navigator.userAgent;
            var isOpera = userAgent.indexOf('Opera') > -1;
            var isIE =
                userAgent.indexOf('compatible') > -1 &&
                userAgent.indexOf('MSIE') > -1 &&
                !isOpera;
            var isEdge =
                userAgent.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !isIE;
            var isFF = userAgent.indexOf('Firefox') > -1;
            var isSafari =
                userAgent.indexOf('Safari') > -1 &&
                userAgent.indexOf('Chrome') == -1;
            var isChrome =
                userAgent.indexOf('Chrome') > -1 &&
                userAgent.indexOf('Safari') > -1;

            if (isIE) {
                var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp['$1']);
                if (fIEVersion == 7) {
                    return 'IE7';
                } else if (fIEVersion == 8) {
                    return 'IE8';
                } else if (fIEVersion == 9) {
                    return 'IE9';
                } else if (fIEVersion == 10) {
                    return 'IE10';
                } else if (fIEVersion == 11) {
                    return 'IE11';
                } else {
                    return 'IE';
                }
            }

            if (isFF) {
                return 'FF';
            }
            if (isOpera) {
                return 'Opera';
            }
            if (isSafari) {
                return 'Safari';
            }
            if (isChrome) {
                return 'Chrome';
            }
            if (isEdge) {
                return 'Edge';
            }
            return 'Unknown';
        }
    };
    
}
