import trefle from '../api/trefle';
import { FETCH_PLANTS, FETCH_SPECIES } from './types';

export const fetchPlants = () => async dispatch => {
    const response = await trefle.get('/api/plants');

    dispatch({ type: FETCH_PLANTS, payload: response.data });
};

export const fetchSpecies = () => async dispatch => {
    const response = await trefle.get('/api/species', {
        params: {
          complete_data: true,
          //page: page
        }
      }
    );

    dispatch({ type: FETCH_SPECIES, payload: { data: response.data, totalPages: response.headers['total-pages'] }});
}