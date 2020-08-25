import React, { useContext, useEffect } from "react";

import styled from "styled-components";

import CollectionContext from "../context/collectionContext/collectionContext";

import SearchBar from "./search/SearchBar";
import DetailsBox from "./details/DetailsBox";

import Headers from "./rowLayout/Headers";
import RowGallery from "./rowLayout/RowGallery";

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
        showDetails,
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
        sortItems();
    }, [sortColumn, sortDirection]);

    // THIS IS A HUGE CHEAT!
    useEffect(() => {
        updateSelectedItem();
    }, [JSON.stringify(displayArray)]);

    useEffect(() => {
        refreshColumns(columnNames);
    }, [columnNames]);

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
            <Headers columnNames={inputColumns} />
            <RowGallery />
            <DetailsBox visible={showDetails}></DetailsBox>
        </ContainerDiv>
    );
};

export default Gallery;

const ContainerDiv = styled.div`
    position: relative;
    font-size: 0.9em;
    padding: 0px;
    margin: 0px;
    width: calc(100% - 2px);
    height: 100%;
    overflow: hidden;
`;
