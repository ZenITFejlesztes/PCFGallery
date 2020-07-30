import React from 'react'

import styled from "styled-components"

interface IProps {
    entry: [string, any]
}

const ItemProperties = ({ entry }:IProps) => {
    return (
        <Container>
            <h4 style={{textAlign: "left"}} > {entry[0].toUpperCase()} </h4>
            <p style={{textAlign: "right"}} > {entry[1]} </p>
        </Container>
    )
}

export default ItemProperties

const Container = styled.div`
    padding: .2em 2em;
    background: #3d3d3d;
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
`