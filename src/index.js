import API from './api/api';
import {descartes} from './algorithm/descartes';
import $ from './jquery/class-opt';
import Compat from './compatibility/detect-browser';

let Algorithm = {
    descartes,
};

export {API, Algorithm, Compat, $};