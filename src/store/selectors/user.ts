import { IApplicationState } from '../../models/applicationstate';

export const getUser = (state: IApplicationState) => state.user.entity;

export const isUserAuthenticated = (state: IApplicationState) => state.user.isAuthenticated;

export const isLoading = (state: IApplicationState) => state.user.isLoading;
