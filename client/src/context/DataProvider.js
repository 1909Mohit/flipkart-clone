import { createContext, useState } from "react";

export const DataContext = createContext(null);


const DataProvider = ({children}) => {
    const [userAccount, setUserAccount] = useState('');

    return (
        <DataContext.Provider value={{ userAccount, setUserAccount }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;