import React from 'react'

import styled from "styled-components"

interface IProps {
    entry: [string, any]
}

const ItemProperties = ({ entry }:IProps) => {
    return (
        <Container>
            <h4> {entry[0].toUpperCase()} </h4>
            <p> {entry[1]} </p>
        </Container>
    )
}

export default ItemProperties

const Container = styled.div`
    padding: .2em;
    background: #3d3d3d;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`