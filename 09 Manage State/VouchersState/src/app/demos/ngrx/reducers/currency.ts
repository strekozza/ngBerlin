import { Currency } from '../model/currency.model';
import * as currency from '../actions/currency';

export function reducer(state = [], action: currency.CurrenciesUpdatedAction) {
    switch (action.type) {
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}