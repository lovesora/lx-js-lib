import API from './api/api';
import {descartes} from './algorithm/descartes';
import $ from './jquery/class-opt';

let Algorithm = {
    descartes,
}

export {API, Algorithm, $};