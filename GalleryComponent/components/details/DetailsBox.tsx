import React, {useContext} from 'react'

import styled from "styled-components"

import {AiOutlineClose} from "react-icons/ai"

import CollectionContext from "../../context/collectionContext/collectionContext"

import ItemDetails from "./ItemDetails"

interface IProps {
    visible: boolean
}

const DetailsBox = ({visible}:IProps ) => {
    const { showSelectedItemDetails } = useContext(CollectionContext)
    return (
        <MainContainer
        visible={visible}
        >
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

interface MainContainerInterface {
    visible: boolean;
}

const MainContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #000c;

    transform: translateY( ${ (props: MainContainerInterface) => props.visible ? "0%" : "-105%" } );
    transition: transform .3s ease-out;

    display: grid;
    place-items: center;
`
