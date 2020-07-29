// helper for the function below us, checks whether something has a value or Value property and if its a string then returns that
export const checkValueProp = (input: any, errorMessage: string = "wrong type"): string => {
    if (input?.value && typeof input?.value === "string") return input.value;
    if (input?.Value && typeof input?.Value === "string") return input.Value;
    if (input?.result && typeof input?.result === "string") return input.result;
    if (input?.Result && typeof input?.Result === "string") return input.Result;
    if (typeof input == "number") return input + "";
    return errorMessage;
};

// chops off a 1d array from the input collection based on the column name

export const getColumnEntries = (columnName: string, inpArr: any[]): string[] => {
    return inpArr.reduce((outArr: string[], item: any) => {
        const origiEntry = Object.entries<any>(item).find((entry) => entry[0] == columnName) || [
            "",
            "-",
        ];
        let newValue;
        if (origiEntry == ["", "-"]) {
            newValue = origiEntry[1];
            return [...outArr, newValue];
        }
        if (typeof origiEntry[1] != "string") {
            newValue = checkValueProp(origiEntry[1]);
            return [...outArr, newValue];
        }
        newValue = origiEntry[1];
        return [...outArr, newValue];
    }, []);
};

// gets all the available column names
export const getColumns = (inpArr: any[]): string[] => {
    let keys = [""];
    inpArr.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if (!keys.includes(key)) keys.push(key);
        });
    });
    keys.shift();
    return keys;
};

// searches for a string in a object's properties and returns a boolean value
export const findStringInObject = (inpObj: any, searchText: string) => {
    const filteredProps = Object.values<any>(inpObj)
        .map((val) => (typeof val == "number" ? val + "" : val)) // converting numbers
        .map((val) => (typeof val == "string" ? val : checkValueProp(val, "-"))) // converting objects if possible
        .filter((val) => typeof val == "string") // just to make sure
        .filter((val) => val.toLowerCase().includes(searchText.toLowerCase())); // the actual search
    return filteredProps.length > 0;
};
