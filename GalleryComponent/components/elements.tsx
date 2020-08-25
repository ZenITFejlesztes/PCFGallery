import styled from "styled-components"

export const Holder = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const HeaderCard = styled.div`
    margin: 0;
    box-sizing: border-box;
    padding: .25em;
    text-align: center;
    height: 3.5em;
    line-height: 3em;
    color: white;
    background: #3d3d3d;
    transition: background .3s ease;
    cursor: pointer;
    &:hover{
        background: #6c6c6c;
    }
`

export const ValueCard = styled.div`
    margin: 0;
    box-sizing: border-box;
    padding: .25em;
    text-align: center;
    height: 2.5em;
    line-height: 2em;
    color: black;
    cursor: default;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const RowItemHolder = styled(Holder)`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: fit-content;
    &:focus{
        outline: none;
        background: #c6c6c6;
    }
`

export const VerticalScrollContainer = styled.div`
    height: calc(100% - 6.5em);
    width: 100%;
    overflow-y: auto;
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