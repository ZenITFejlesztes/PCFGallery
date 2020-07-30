import React, {useContext, useState, useEffect} from 'react'

import styled from "styled-components"

import ItemProperties from "./ItemProperties"
import CollectionContext from "../../context/collectionContext/collectionContext" 

import { objectToDisplay } from "../../utils/logic/tableManipulation"

const ItemDetails = () => {
    const { selectedItem } = useContext(CollectionContext)
    const initialEntries = Object.entries<any>(objectToDisplay(selectedItem))

    const [entries, setentries] = useState(initialEntries)

    useEffect(() => {
        setentries(Object.entries<any>(objectToDisplay(selectedItem)))
    }, [selectedItem])

    return (
        <ScrollContainer>
            <MainContainer>
                { entries.map((entry, index) => <ItemProperties key={index} entry={entry} ></ItemProperties> ) }
            </MainContainer>
        </ScrollContainer>
    )
}

export default ItemDetails

const ScrollContainer = styled.div`
    overflow-y: auto;
    height: 85%;
    width: 80%;
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
`

const MainContainer = styled.div`
    background: #e2e2e2dd;
    padding: 2em;
`