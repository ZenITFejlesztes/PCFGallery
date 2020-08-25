import { useRef, useCallback, MutableRefObject, useContext } from 'react'
import context from "../../context/collectionContext/collectionContext"

export default ( funcToExec: any = defaultFunction, rootRef?: MutableRefObject<any> | null) => {
    const observer = useRef() as MutableRefObject<IntersectionObserver>

    const updateLastElement = useCallback((element: HTMLDivElement) => {
        if (observer.current) observer.current.disconnect();
        const callback = entries => {
            if (entries[0].isIntersecting) funcToExec()
        }
        observer.current = new IntersectionObserver(callback, {root: rootRef?.current, threshold: 0.8 })
        if (element) observer.current.observe(element)
    }, [rootRef, funcToExec])
    
    return updateLastElement
}

const defaultFunction = () => console.log("visible!".toUpperCase())
