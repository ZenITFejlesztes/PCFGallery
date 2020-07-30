import React, {createContext} from "react"

import {ContextIntercace} from "./stateInterface"

const CollectionContext = createContext<ContextIntercace>(
    {
        inputArray: [],
        inputColumns: [],
        displayArray: [],
        refreshArray: () => null,
        refreshColumns: () => null,
        searchItems: (str: string) => null,
        validInputCollection: true,
        validInputColumns: true,
        sortColumn: "",
        sortDirection: false,
        sortItems: () => null,
        setSortParams: () => null,
        selectedId: -1,
        selectedItem: null,
        setSelectedItem: () => null,
        updateSelectedItem: () => null,
        showSelectedItemDetails: () => null,
        showDetails: false
    }
);

export default CollectionContext