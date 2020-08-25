import React, { useContext, useState, useEffect, useCallback } from "react";
import shortid from "shortid";
import Row from "./Row";
import { getValueStringsFromObject } from "../../utils/logic/tableManipulation";
import { VerticalScrollContainer } from "../elements";
import CollectionContext from "../../context/collectionContext/collectionContext";
import useExecuteOnBecomingVisible from "./useExecuteOnBecomingVisible";

const RowGallery = () => {
    const { displayArray, inputColumns, setSelectedItem } = useContext(CollectionContext);
    const [rowsToDisplay, setRowsToDisplay] = useState<any>();

    useEffect(() => {
        const newRows = displayArray.reduce(
            (total, item) => [...total, getValueStringsFromObject(item, inputColumns)],
            []
        ) as Array<string[]>;
        setRowsToDisplay(newRows.slice(0, 30));
    }, [displayArray, displayArray[0], inputColumns]);

    const loadMoreRows = useCallback(() => {
        const newRows = displayArray
            .slice(rowsToDisplay.length, rowsToDisplay.length + 11)
            .reduce(
                (total, item) => [...total, getValueStringsFromObject(item, inputColumns)],
                []
            ) as Array<string[]>;
        setRowsToDisplay((prevRows) => [...prevRows, ...newRows]);
    }, [displayArray, displayArray[0], inputColumns, setRowsToDisplay, rowsToDisplay]);

    const doOnLastListItemsRender = useExecuteOnBecomingVisible(loadMoreRows);

    return (
        <VerticalScrollContainer>
            {rowsToDisplay &&
                rowsToDisplay.map((value, index) => {
                    if (index == rowsToDisplay.length - 1)
                        return (
                            <Row
                                key={shortid.generate()}
                                values={value}
                                index={index}
                                setSelected={setSelectedItem}
                                reference={doOnLastListItemsRender}
                            />
                        );
                    return (
                        <Row
                            key={shortid.generate()}
                            values={value}
                            index={index}
                            setSelected={setSelectedItem}
                        />
                    );
                })}
        </VerticalScrollContainer>
    );
};

export default RowGallery;
