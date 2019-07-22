import { RouterState } from 'connected-react-router'

export interface IApplicationState {
    features: IFeatureState;
    router: RouterState;
    user: IUserState;
}
