export interface StateInterface {
    inputArray: Array<any>;
    inputColumns: Array<any>;
    displayArray: Array<any>;
    validInputCollection: boolean;
    validInputColumns: boolean;
    searchTerm: string;
    sortColumn: string;
    sortDirection: boolean;
    selectedId: number;
    selectedItem: any;
    showDetails: boolean;
}

export interface ContextIntercace {
    inputArray: Array<any>;
    inputColumns: Array<any>;
    displayArray: Array<any>;
    validInputCollection: boolean;
    validInputColumns: boolean;
    sortColumn: string;
    sortDirection: boolean;
    selectedId: number;
    selectedItem: any;
    showDetails: boolean;
    setSelectedItem: (itemId: number) => void;
    updateSelectedItem: () => void;
    sortItems: () => void;
    refreshArray: (collJSON: string) => void;
    refreshColumns: (inputJSON: string) => void;
    searchItems: (newTerm: string) => void;
    setSortParams: (column: string, order: boolean) => void;
    showSelectedItemDetails: (val: boolean) => void;
}