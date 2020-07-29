import React from "react"
import {StateInterface} from "./stateInterface"

import {
    INIT_ARRAY,
    INVALID_INPUT,
    NEW_SEARCH,
    SORT_DISPLAY,
    SET_SORT,
    SET_SELECTED,
    UPDATE_SELECTED,
    SHOW_DETAILS
} from "../types"

export default function (state: StateInterface, action): StateInterface {
    switch (action.type) {
        case INIT_ARRAY:
            return {
                ...state,
                inputArray: action.payload,
                validInputs: true
            }
        case INVALID_INPUT:
            return {
                ...state,
                validInputs: false
            }
        case NEW_SEARCH:
            return {
                ...state,
                searchTerm: action.payload.schTerm,
                displayArray: action.payload.newArr
            }
        case SORT_DISPLAY:
            return {
                ...state,
                displayArray: action.payload
            }
        case SET_SORT:
            return {
                ...state,
                sortColumn: action.payload.column,
                sortDirection: action.payload.order
            }
        case SET_SELECTED:
            return {
                ...state,
                selectedId: action.payload.itemId,
                selectedItem: action.payload.item
            }
        case UPDATE_SELECTED:
            return {
                ...state,
                selectedId: action.payload
            }
        case SHOW_DETAILS:
            return {
                ...state,
                showDetails: action.payload
            }
        default:
            return state
    }
}