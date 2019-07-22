
import { ActionType } from 'typesafe-actions';

import * as features from './features';
export type FeaturesAction = ActionType<typeof features>;

import * as user from './user';
export type UserAction = ActionType<typeof user>;