import React, { useState, createContext } from "react";

export const ProfileContext = createContext()
export const ProfileContextProvider = (props) => {

    const [data, setData] = useState({
        name: "",
        age: "",
    })

    return (
        <ProfileContext.Provider value={[data, setData]}>
            {props.children}
        </ProfileContext.Provider>
    );
};
