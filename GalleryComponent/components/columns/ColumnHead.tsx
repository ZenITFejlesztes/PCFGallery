import React, { useState, useContext } from "react";

import styled from "styled-components";

import CollectionContext from "../../context/collectionContext/collectionContext"

interface IProps {
    columnName: string;
}

const ColumnHead = ({ columnName }: IProps) => {

    const {sortColumn, sortDirection, setSortParams} = useContext(CollectionContext)

    const onBtnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const sortOrder = columnName == sortColumn ? !sortDirection : sortDirection;
        setSortParams(columnName, sortOrder)
    };

    return <BgDiv onClick={onBtnClick}>{columnName}</BgDiv>;
};

ColumnHead.defaultProps = {
    columnName: "undefined",
};

export default ColumnHead;

const BgDiv = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    max-height: 3rem;
    background-color: #3d3d3d;
    color: white;
    padding: 0px 0.5rem;
    padding-top: 0.7rem;
    text-align: center;

    text-transform: uppercase;
    /* box-shadow: inset 0px 0px 7px #2d2d2d; */
    cursor: pointer;

    transition: filter 0.2s ease;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    :hover {
        filter: brightness(120%);
    }

    :active {
        filter: brightness(50%);
    }
`;
