import React, { useContext, Fragment } from "react";

import CollectionContext from "../../context/collectionContext/collectionContext";

import styled from "styled-components"

const SearchBar = () => {
    const { searchItems, displayArray } = useContext(CollectionContext)
    
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchItems(e.currentTarget.value)
    }

    return (
        <BgRect >
            <CustInp 
            type="text" 
            name="searchInput" 
            id="searchInput" 
            onChange={onInputChange}
            placeholder="Search here..."
            />
            <TextHolder>
                <ParText> Entries found: {displayArray.length} </ParText>
            </TextHolder>
        </BgRect>
    );
};

export default SearchBar;

const BgRect = styled.div`
    font-size: inherit;
    position: relative;
    width: 100%;
    height: calc(3em - 2px);
    padding: 0px;
    margin: 0px;
    display: block;
    background-color: #3d3d3d;
`
const CustInp = styled.input`
    font-size: inherit;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: absolute;
    height: 100%;
    padding: 0px 0.5em;
    margin: 0px;
    border: 0px;
    left: 0px;
    top: 0px;
    background: white;

    width: 40%;
    min-width: 220px;

    border: 1px gray solid;
    outline: none;

    :active,
    :focus {
        border: 2px black solid;
        outline: none;
    }
`
const TextHolder = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    overflow: hidden;
`

const ParText = styled.p`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    line-height: calc(3em - 2px)
`