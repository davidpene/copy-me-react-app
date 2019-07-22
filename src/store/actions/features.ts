import { createAsyncAction } from 'typesafe-actions';

export const fetchFeatureList = createAsyncAction(
    'FETCH_FEATURE_LIST',
    'FETCH_FEATURE_LIST_SUCCESS',
    'FETCH_FEATURE_LIST_FAILURE',
)<void, Feature[], Error>();