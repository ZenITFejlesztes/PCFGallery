import React, { useReducer } from "react";

import { StateInterface } from "./stateInterface";
import CollectionContext from "./collectionContext";
import CollectionReducer from "./collectionReducer";

import {
    INIT_ARRAY,
    INIT_COLUMNS,
    INVALID_COLLECTION,
    INVALID_COLUMNS,
    NEW_SEARCH,
    SORT_DISPLAY,
    SET_SORT,
    SET_SELECTED,
    UPDATE_SELECTED,
    SHOW_DETAILS,
} from "../types";

import { findStringInObject, checkValueProp } from "../../utils/logic/tableManipulation";

const CollectionState = (props) => {
    const initialState: StateInterface = {
        inputArray: [],
        inputColumns: [],
        displayArray: [],
        validInputCollection: true,
        validInputColumns: true,
        searchTerm: "",
        sortColumn: "",
        sortDirection: true,
        selectedId: -1,
        selectedItem: undefined,
        showDetails: false,
    };

    const [state, dispatch] = useReducer(CollectionReducer, initialState);

    const refreshArray = (collJSON: string) => {
        // the input might be invalid
        try {
            const inpArray = JSON.parse(collJSON);
            if (!Array.isArray(inpArray)) {
                dispatch({ type: INVALID_COLLECTION });
                return;
            }
            dispatch({ type: INIT_ARRAY, payload: inpArray });
        } catch (error) {
            dispatch({ type: INVALID_COLLECTION });
        }
    };

    const refreshColumns = (inputJSON: string): void => {
        try {
            const columns = JSON.parse(inputJSON);
            if (!columns) {
                dispatch({ type: INVALID_COLUMNS });
                return;
            }
            dispatch({ type: INIT_COLUMNS, payload: columns });
        } catch (error) {
            dispatch({ type: INVALID_COLUMNS });
        }
    };

    const searchItems = (newTerm: string) => {
        if (newTerm == "") {
            dispatch({
                type: NEW_SEARCH,
                payload: {
                    newArr: state.inputArray,
                    schTerm: "",
                },
            });
            return;
        }

        if (typeof newTerm != "string") return;
        const newSearch = state.inputArray.filter((item) => findStringInObject(item, newTerm));
        dispatch({
            type: NEW_SEARCH,
            payload: {
                newArr: newSearch,
                schTerm: newTerm,
            },
        });
    };

    const sortItems = () => {
        const { sortColumn, sortDirection, displayArray } = state;
        if (!sortColumn) return;
        const sortedArray = displayArray.sort((a: any, b: any) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            const aString = typeof aValue == "string" ? aValue : checkValueProp(aValue, "-");
            const bString = typeof bValue == "string" ? bValue : checkValueProp(bValue, "-");
            // in case its a numeric string
            const NumRegExp = new RegExp(/^-{0,1}\d*\.{0,1}\d+$/);
            if (NumRegExp.test(aString) && NumRegExp.test(bString)) {
                const aNum = parseInt(aString);
                const bNum = parseInt(bString);
                return sortDirection ? aNum - bNum : bNum - aNum;
            }
            // in case its NOT a numeric string
            const order = aString.localeCompare(bString, "hu");
            return sortDirection ? order : -order;
        });
        dispatch({
            type: SORT_DISPLAY,
            payload: sortedArray,
        });
    };

    const setSortParams = (
        column: string = state.sortColumn,
        order: boolean = state.sortDirection
    ) => dispatch({ type: SET_SORT, payload: { column, order } });

    const setSelectedItem = (itemId: number) => {
        if (itemId == -1) {
            dispatch({
                type: SET_SELECTED,
                payload: {
                    itemId: itemId,
                    item: undefined,
                },
            });
            return;
        }
        const item = state.displayArray[itemId];
        dispatch({ type: SET_SELECTED, payload: { itemId, item } });
    };

    const updateSelectedItem = () => {
        const itemId = state.displayArray.findIndex((item) => item == state.selectedItem);
        dispatch({ type: UPDATE_SELECTED, payload: itemId });
    };

    const showSelectedItemDetails = (val: boolean) =>
        dispatch({ type: SHOW_DETAILS, payload: val });

    return (
        <CollectionContext.Provider
            value={{
                inputArray: state.inputArray,
                inputColumns: state.inputColumns,
                displayArray: state.displayArray,
                validInputCollection: state.validInputCollection,
                validInputColumns: state.validInputColumns,
                sortColumn: state.sortColumn,
                sortDirection: state.sortDirection,
                selectedId: state.selectedId,
                selectedItem: state.selectedItem,
                showDetails: state.showDetails,
                sortItems,
                refreshArray,
                refreshColumns,
                searchItems,
                setSortParams,
                setSelectedItem,
                updateSelectedItem,
                showSelectedItemDetails,
            }}
        >
            {props.children}
        </CollectionContext.Provider>
    );
};

export default CollectionState;
