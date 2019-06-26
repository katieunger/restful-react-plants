import trefle from '../api/trefle';
import { FETCH_PLANTS, FETCH_SPECIES, ERROR, SET_ACTIVE_ITEM } from './types';

export const setActiveItem = (item) => {
    return {
        type: SET_ACTIVE_ITEM,
        payload: item
    };
};

export const fetchPlants = (page) => async dispatch => {
    try {
        const response = await trefle.get('/api/plants', {
            params: {
                complete_data: true,
                page: page
            }
        })

        dispatch({ type: FETCH_PLANTS, payload: { 
            data: response.data, 
            totalPages: response.headers['total-pages'],
            activePage: response.headers['page-number']
        }});
    } catch(e) {
        dispatch({ type: ERROR, payload: e.message});
    }    
}

export const fetchSpecies = (page) => async dispatch => {
    try {
        const response = await trefle.get('/api/species', {
            params: {
                complete_data: true,
                page: page
            }
        })

        dispatch({ type: FETCH_SPECIES, payload: { 
            data: response.data, 
            totalPages: response.headers['total-pages'],
            activePage: response.headers['page-number']
        }});
    } catch(e) {
        dispatch({ type: ERROR, payload: e.message});
    }    
}
  