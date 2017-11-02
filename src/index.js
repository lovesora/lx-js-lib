import API from './api/api';

import descartes from './algorithm/descartes';
import { search } from './algorithm/array';

import $ from './jquery/class-opt';
import Compat from './compatibility/detect-browser';
import Param from './param/param';

let Algorithm = {
    descartes,
    search
};

export {
    API,
    Algorithm,
    Compat,
    $,
    Param
};