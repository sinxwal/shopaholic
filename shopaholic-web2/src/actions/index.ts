import * as consts from '../consts';

export interface Action {
    type: string;
    payload?: object;
}
export interface IncrementEnthusiasm {
    type: consts.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: consts.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: consts.INCREMENT_ENTHUSIASM,
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: consts.DECREMENT_ENTHUSIASM,
    };
}

export function requestIp(): Action {
    return {
        type: consts.REQUEST_IP,
    };
}