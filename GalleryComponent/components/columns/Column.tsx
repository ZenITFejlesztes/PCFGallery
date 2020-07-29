import React from "react";

import styled from "styled-components";

import ColumnItem from "./ColumnItem";
import ColumnHead from "./ColumnHead";

interface IProps {
    columnName: string;
    columnValues: string[];
    columnCount: number;
    firstColumn: boolean;
}

const Columns = ({ columnName, columnValues, columnCount, firstColumn }: IProps) => {
    return (
        <Container ColumnCount={columnCount}>
            <ColumnHead columnName={columnName} />
            {columnValues.map((val, index) => (
                <ColumnItem
                    key={index}
                    displayValue={val}
                    itemIndex={index}
                    columnName={columnName}
                    firstColumn={firstColumn}
                ></ColumnItem>
            ))}
        </Container>
    );
};

Columns.defaultProps = {
    columnName: "undefined",
    columnValues: ["-"],
    columnCount: 1,
};

export default Columns;

interface ContainerProps {
    ColumnCount: number;
}

// STYLED COMPONENTS

const Container = styled.div`
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: ${(props: ContainerProps) => 100 / props.ColumnCount + "%"};
    display: inline-block;
`;
