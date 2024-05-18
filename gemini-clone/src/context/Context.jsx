import React from "react";
import { createContext, useEffect } from "react";
import run from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
  await run (prompt)
    };

    useEffect(() => {
        onSent("what is react js");
    }, []); // The empty array ensures this runs once on mount

    const contextValue = {
        // Add any context values or functions here
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
