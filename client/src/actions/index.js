import trefle from '../api/trefle';
import { 
    FETCH_GENUS,
    FETCH_GENUS_ERROR,
    FETCH_PLANT,
    FETCH_PLANT_ERROR,
    FETCH_PLANTS,
    FETCH_PLANTS_ERROR,
    UNSET_PLANT,
    FETCH_SPECIES,
    FETCH_SPECIES_ERROR,
    SET_ACTIVE_ITEM,
    FETCH_FAMILIES,
    FETCH_FAMILIES_ERROR,
    SET_QUERY,
    MODAL_OPEN,
    MODAL_CLOSE
 } from './types';

export const setActiveItem = (item) => {
    return {
        type: SET_ACTIVE_ITEM,
        payload: item
    };
};

export const setQuery = (query) => {
    return {
        type: SET_QUERY,
        payload: query
    }
}

export const openModal = (modalProps) => {
    return {
        type: MODAL_OPEN,
        payload: modalProps
    }
}

export const closeModal = (modalProps) => {
    return {
        type: MODAL_CLOSE,
        payload: modalProps
    }
}

export const fetchFamilies = (page, query) => async dispatch => {
    try {
        const response = await trefle.get('/api/families', {
            params: {
                complete_data: true,
                page: page,
                q: query
            }
        })

        dispatch({ type: FETCH_FAMILIES, payload: { 
            data: response.data, 
            totalPages: response.headers['total-pages'],
            activePage: response.headers['page-number']
        }});
    } catch(e) {
        dispatch({ type: FETCH_FAMILIES_ERROR, payload: e.message});
    }    
}

export const fetchGenus = (page, query) => async dispatch => {
    try {
        const response = await trefle.get('/api/genuses', {
            params: {
                complete_data: true,
                page: page,
                q: query
            }
        })

        dispatch({ type: FETCH_GENUS, payload: { 
            data: response.data, 
            totalPages: response.headers['total-pages'],
            activePage: response.headers['page-number']
        }});
    } catch(e) {
        dispatch({ type: FETCH_GENUS_ERROR, payload: e.message});
    }    
}

export const fetchPlants = (page, query) => async dispatch => {
    try {
        const response = await trefle.get('/api/plants', {
            params: {
                complete_data: true,
                page: page,
                q: query
            }
        })

        dispatch({ type: FETCH_PLANTS, payload: { 
            data: response.data, 
            totalPages: response.headers['total-pages'],
            activePage: response.headers['page-number']
        }});
    } catch(e) {
        dispatch({ type: FETCH_PLANTS_ERROR, payload: e.message});
    }    
}

export const fetchPlant = (id) => async dispatch => {
    try {
        const response = await trefle.get(`/api/plants/${id}`)

        dispatch({ type: FETCH_PLANT, payload: { 
            data: response.data
        }});
    }

    catch(e) {
        dispatch({ type: FETCH_PLANT_ERROR, payload: e.message})
    }
}

export const unsetPlant = () => {
    return {
        type: UNSET_PLANT
    }
}

export const fetchSpecies = (page, query) => async dispatch => {
    try {
        const response = await trefle.get('/api/species', {
            params: {
                complete_data: true,
                page: page,
                q: query
            }
        })

        dispatch({ type: FETCH_SPECIES, payload: { 
            data: response.data, 
            totalPages: response.headers['total-pages'],
            activePage: response.headers['page-number']
        }});
    } catch(e) {
        dispatch({ type: FETCH_SPECIES_ERROR, payload: e.message});
    }    
}
  