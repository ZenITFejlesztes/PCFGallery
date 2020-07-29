import React, {createContext} from "react"

import {ContextIntercace} from "./stateInterface"

const CollectionContext = createContext<ContextIntercace>(
    {
        inputArray: [],
        displayArray: [],
        refreshArray: () => null,
        searchItems: (str: string) => null,
        validInputs: true,
        sortColumn: "",
        sortDirection: false,
        sortItems: () => null,
        setSortParams: () => null,
        selectedId: 0,
        selectedItem: undefined,
        setSelectedItem: () => null,
        updateSelectedItem: () => null,
        showSelectedItemDetails: () => null,
        showDetails: false
    }
);

export default CollectionContext