import _ from 'lodash';
import trefle from '../api/trefle';
import { FETCH_PLANTS, FETCH_SPECIES} from './types';

export const fetchPlants = () => async dispatch => {
    const response = await trefle.get('/api/plants');

    dispatch({ type: FETCH_PLANTS, payload: response.data });
};

export const fetchSpecies = () => async dispatch => {
    const response = await trefle.get('/api/species');

    const filteredResponse = _.filter(response.data, 'common_name');

    dispatch({ type: FETCH_SPECIES, payload: filteredResponse });
}