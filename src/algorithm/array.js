import _forEach from 'lodash.foreach';
import _cloneDeep from 'lodash.clonedeep';

export function search(data, filterValue) {
    let _filterValue = _cloneDeep(filterValue);
    
    let SearchType = {
        AND: '&',
        OR: '|',
    };
    
    let _data = data;

    let _defaultCols = [];
    if (_data.length) {
        _forEach(_data[0], (v, k) => {
            _defaultCols.push(k);
        });
    }

    /**
     * @param row 行数据
     * @param cols 列名数组
     * @param filterValue 需要过滤的值 string | string[]
     */
    let _filter = function(row, cols, filterValue) {
        return cols.filter(colName => {
            if (filterValue === undefined || filterValue === null)
                filterValue = '';
            return String(row[colName]).toLowerCase().indexOf(String(filterValue).toLowerCase()) > -1;
        }).length;
    };
    let _filterAnd = function(row, cols, filterValue) {
        return cols.filter(colName => {
            if (filterValue === undefined || filterValue === null)
                filterValue = '';
            // 或规则，有一个匹配成功就返回true
            if (Object.prototype.toString.call(filterValue) === '[object Array]') {
                return filterValue.filter(filterItem => {
                    return String(row[colName]).toLowerCase().indexOf(String(filterItem).toLowerCase()) > -1;
                }).length === filterValue.length;
            }
            return String(row[colName]).toLowerCase().indexOf(String(filterValue).toLowerCase()) > -1;
        }).length;
    };
    let _orFilter = function(data, rule) {
        return data.filter(v => {
            if (Object.prototype.toString.call(rule.filterValue) === '[object Array]') {
                let value = rule.filterValue;
                let result = value.filter(_value => {
                    return _filter(v, rule.cols || _defaultCols, _value) > 0;
                }).length === value.length;
                return result;
            } else {
                return _filter(v, rule.cols || _defaultCols, rule.filterValue) > 0;
            }
        });
    };
    let _andFilter = function(data, rule) {
        return data.filter(v => _filterAnd(v, rule.cols || _defaultCols, rule.filterValue) === rule.cols.length);
    };


    _forEach(_filterValue, (option) => {
        option.rule.filterValue = option.rule.filterValue.split(' ');
        
        switch (option.type) {
            case SearchType.AND:
                {
                    _data = _andFilter(_data, option.rule);
                    break;
                }
            case SearchType.OR:
                {
                    _data = _orFilter(_data, option.rule);
                    break;
                }
            default: 
                {
                    _data = _orFilter(_data, option.rule);
                    break;
                }
        }
    });

    return _data;
};
