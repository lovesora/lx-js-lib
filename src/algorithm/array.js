import _forEach from 'lodash.foreach';

export function search(data, filterRules) {
    let _data = this;

    let _defaultCols = [];
    _forEach(data[0], (v, k) => {
        _defaultCols.push(k);
    });

    let _filter = function (row, cols, filterValue) {
        return cols.filter(colName => {
            if (filterValue === undefined || filterValue === null)
                filterValue = '';
            // 或规则，有一个匹配成功就返回true
            if (typeof filterValue === 'object') {
                return filterValue.filter(filterItem => {
                    return String(row[colName]).toLowerCase().indexOf(String(filterItem).toLowerCase()) > -1;
                }).length > 0;
            }
            return String(row[colName]).toLowerCase().indexOf(String(filterValue).toLowerCase()) > -1;
        }).length;
    };
    let _orFilter = function (data, filterRule) {
        return data.filter(v => _filter(v, filterRule.cols || _defaultCols, filterRule.value) > 0);
    };
    let _andFilter = function (data, filterRule) {
        return data.filter(v => _filter(v, filterRule.cols || _defaultCols, filterRule.value) === filterRule.cols.length);
    };
    _forEach(filterRules, rule => {
        switch (rule.type) {
            case '&':
                {
                    _data = _andFilter(_data, rule.rule);
                    break;
                }
            case '|':
                {
                    _data = _orFilter(_data, rule.rule);
                    break;
                }
        }
    });
    return _data;
};