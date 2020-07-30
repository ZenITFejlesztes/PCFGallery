import React, {useContext} from 'react'

import styled from "styled-components"

import {AiOutlineClose} from "react-icons/ai"

import CollectionContext from "../../context/collectionContext/collectionContext"

import ItemDetails from "./ItemDetails"

const DetailsBox = () => {
    const { showSelectedItemDetails } = useContext(CollectionContext)
    return (
        <MainContainer>
            <div
            style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                width: "5em",
                height: "4em",
                display: "grid",
                placeItems: "center"
            }}
            >
                <AiOutlineClose
                color="white"
                size="3em"
                cursor="pointer"
                onClick={ () => showSelectedItemDetails(false) }
                />
            </div>
            <ItemDetails />
        </MainContainer>
    )
}

export default DetailsBox

const MainContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #000c;

    display: grid;
    place-items: center;
`
