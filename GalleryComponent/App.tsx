import React, {useContext, useEffect, useState} from 'react'

import CollectionState from "./context/collectionContext/CollectionState"
import CollectionContext from "./context/collectionContext/collectionContext"
import {RProps} from "./inputInterfaces"

import Gallery from "./components/Gallery";

const App = ({ context, notifyOutputChanged, inputs, outputs, setOutputs, fontSize }: RProps) => {

    return (
        <CollectionState>
            <Gallery inp={inputs} ></Gallery>
        </CollectionState>
    )
}

export default App
