import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";

import { AiOutlineInfoCircle } from "react-icons/ai";

import ReactTooltip from "react-tooltip";

import CollectionContext from "../../context/collectionContext/collectionContext";

interface IProps {
    displayValue: string;
    columnName: string;
    itemIndex: number;
    firstColumn: boolean;
}

const ColumnItem = ({ displayValue, itemIndex, columnName, firstColumn }: IProps) => {
    const { selectedId, setSelectedItem, showSelectedItemDetails } = useContext(CollectionContext);


    const onBtnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target == e.currentTarget)
            selectedId == itemIndex ? setSelectedItem(-1) : setSelectedItem(itemIndex);
    };

    return (
        <Container
            itemIndex={itemIndex}
            selectedIndex={selectedId}
            firstColumn={firstColumn}
            onClick={onBtnClick}
        >
            <ColItem data-tip data-for={"item" + columnName + itemIndex} onClick={onBtnClick} >
                {displayValue}
            </ColItem>
            {firstColumn && itemIndex == selectedId && (
                <ShowDetails
                    onClick={() => showSelectedItemDetails(true)}
                >
                    <AiOutlineInfoCircle size="2em" />
                </ShowDetails>
            )}
            <ReactTooltip
                id={"item" + columnName + itemIndex}
                place="top"
                effect="solid"
                delayShow={1000}
                delayHide={200}
                textColor="black"
                backgroundColor="#e7e7e7"
                border={true}
                borderColor="black"
                clickable={true}
            >
                {columnName.toUpperCase() + ": " + displayValue}
            </ReactTooltip>
        </Container>
    );
};

ColumnItem.defaultProps = {
    displayValue: "-",
    columnName: "undefined",
    itemIndex: 0,
};

export default ColumnItem;

interface ContainerProps {
    itemIndex: number;
    selectedIndex: number;
    firstColumn: boolean;
}

const Container = styled.div`
    position: relative;
    padding: 0.5rem 0.2rem;
    padding-left: ${(props: ContainerProps) =>
        props.itemIndex == props.selectedIndex && props.firstColumn ? ".7rem" : ".2rem"};
    cursor: default;
    background-color: ${(props: ContainerProps) =>
        props.itemIndex == props.selectedIndex ? "#e8e8e8" : "transparent"};
    transition: padding 0.4s ease;
`;

const ColItem = styled.div`
    display: block;
    width: 100%;
    height: 3em;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    line-height: 3em;
`;

const ShowDetails = styled.div`
    color: transparent;
    position: absolute;
    height: 100%;
    width: 0.5rem;
    top: 0px;
    left: 0px;
    border: none;
    background-color: #3d3d3d;
    transition: width 0.2s ease-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: pointer;
    display: grid;
    place-items: center;
    overflow: hidden;

    :hover {
        width: 2rem;
        color: white;
    }
`;
