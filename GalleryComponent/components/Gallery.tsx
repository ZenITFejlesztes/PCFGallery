import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import CollectionContext from "../context/collectionContext/collectionContext";
import { RInputs } from "../inputInterfaces";

import Column from "./columns/Column";
import SearchBar from "./search/SearchBar";
import DetailsBox from "./details/DetailsBox";

import { getColumnEntries, getColumns } from "../utils/logic/tableManipulation";

const Gallery = (props) => {
    const { collJSON, columnNames } = props.inp;
    const {
        refreshArray,
        refreshColumns,
        searchItems,
        inputArray,
        inputColumns,
        validInputCollection,
        validInputColumns,
        displayArray,
        sortItems,
        sortColumn,
        sortDirection,
        setSelectedItem,
        updateSelectedItem,
        showDetails
    } = useContext(CollectionContext);


    //const columns = getColumns(inputArray);

    // updates the array every time the inputs have changed
    useEffect(() => {
        refreshArray(collJSON);
        setSelectedItem(-1);
    }, [collJSON]);

    useEffect(() => {
        searchItems("");
    }, [inputArray]);

    useEffect(() => {
        sortItems()
    }, [sortColumn, sortDirection]);

    // THIS IS A HUGE CHEAT!
    useEffect(() => {
        updateSelectedItem();
    }, [ JSON.stringify(displayArray) ]);

    useEffect(() => {
        refreshColumns(columnNames)
    }, [columnNames])

    // displaying error for invalid inputs
    if (!validInputCollection || !validInputColumns)
        return (
            <h1
                style={{
                    background: "red",
                    color: "white",
                    width: "100%",
                    margin: "auto 0px",
                }}
            >
                INVALID INPUTS
            </h1>
        );

    // normal return
    return (
        <ContainerDiv>
            <SearchBar></SearchBar>

            <ColumnContainer>
                {inputColumns.map((col, index) => (
                    <Column
                        key={col}
                        columnName={col}
                        columnValues={getColumnEntries(col, displayArray)}
                        columnCount={inputColumns.length}
                        firstColumn={ index === 0 }
                    ></Column>
                ))}
            </ColumnContainer>

            { showDetails && <DetailsBox></DetailsBox> }
        </ContainerDiv>
    );
};

export default Gallery;

// STYLED COMPONENTS

const ColumnContainer = styled.div`
    height: calc(100% - 3em);
    width: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: gray;
        box-shadow: inset 0px 0px 3px white;
    }
    ::-webkit-scrollbar-track {
        background-color: #f8f8f8;
        box-shadow: inset 0px 0px 3px black;
    }
`;

const ContainerDiv = styled.div`
    position: relative;
    font-size: 0.9em;
    padding: 0px;
    margin: 0px;
    width: calc(100% - 2px);
    height: 100%;
`;
