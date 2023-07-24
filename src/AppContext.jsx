import { useContext, createContext, useState } from "react"

// creating our context here
export const FamilyContext = createContext()

// custom hook
export function useFamilyContext() {
  return useContext(FamilyContext)
}

// custom Provider component
export function FamilyProvider(props) {

    const [myStocks, setMyStocks] = useState([])
    

      const sharedValue = {
        myStocks,
        setMyStocks
      }
      
    return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}