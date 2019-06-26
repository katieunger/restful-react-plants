import trefle from '../api/trefle';
import { FETCH_PLANTS, FETCH_SPECIES, ERROR } from './types';

// TODO: Add error handling for failed requests!

export const fetchPlants = () => async dispatch => {
    const response = await trefle.get('/api/plants');

    dispatch({ type: FETCH_PLANTS, payload: response.data });
};

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
  