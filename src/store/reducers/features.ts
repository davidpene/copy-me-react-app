import { combineReducers, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions';
import { fetchFeatureList } from '../actions/features';

export const defaultState: IFeatureState = {
    entities: [],
    isLoading: false
}

export const entities = (state = defaultState.entities, action: actions.FeaturesAction) => {
    switch (action.type) {
        case getType(fetchFeatureList.success):
            return action.payload;
    }

    return state;
}

export const isLoading = (state = defaultState.isLoading, action: actions.FeaturesAction) => {
    switch (action.type) {
        case getType(fetchFeatureList.request):
            return true;
        case getType(fetchFeatureList.success):
        case getType(fetchFeatureList.failure):
            return false;
    }

    return state;
}

const features = combineReducers<IFeatureState>({
    entities: (entities as Reducer<Feature[]>),
    isLoading: (isLoading as Reducer<boolean>),
});

export default features;