import React, {useContext} from 'react'
import CollectionContext from "../../context/collectionContext/collectionContext"

import {HeaderCard, Holder, RowItemHolder} from "../elements"

interface IProps {
    columnNames: string[]
}

const Headers = ({ columnNames }: IProps) => {
    const {sortColumn, sortDirection, setSortParams} = useContext(CollectionContext)

    const onBtnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const columnName = e.currentTarget.getAttribute("data-column-name") || ""
        const sortOrder = columnName == sortColumn ? !sortDirection : sortDirection;
        setSortParams(columnName, sortOrder)
    };

    return (
        <RowItemHolder>
            {
                columnNames.map(name => (
                    <HeaderCard
                    key={name}
                    style={{flex: "1"}}
                    data-column-name={name}
                    onClick={onBtnClick}
                    >
                        {name.toUpperCase()}
                    </HeaderCard>
                ) )
            }
        </RowItemHolder>
    )
}

export default Headers

