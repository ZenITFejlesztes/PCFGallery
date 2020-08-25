import React, {useState} from 'react'
import { MdDetails } from "react-icons/md"
import styled from "styled-components"

import { ValueCard, RowItemHolder } from "../elements"

interface IProps {
    values: string[],
    index: number,
    reference?: any,
    setSelected: any
}

const Row = ({ values, index, reference, setSelected }: IProps ) => {
    const [active, setActive] = useState(false)

    return (
        <RowItemHolder style={{position: "relative"}} tabIndex={0} 
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        >
            {
                active &&
                <IconHolder
                onClick={() => setSelected(index)}
                >
                    <MdDetails color="white" size="1.5em" />
                </IconHolder>
            }
            {
                values.map(value => (
                    <ValueCard
                    ref={reference}
                    key={Math.random()}
                    style={{flex: "1"}}
                    >
                        {value}
                    </ValueCard>
                ) )
            }
        </RowItemHolder>
    )
}

export default Row
const IconHolder = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
    width: 3em;
    transform: translateX(-2.4em);
    transition: transform .2s ease;
    background: #3d3d3d;
    &:hover{
        transform: translateX(0)
    }
`