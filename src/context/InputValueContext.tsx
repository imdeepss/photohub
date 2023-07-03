"use client";

import React, { createContext, useState } from 'react';

type InputType = {
    search: string;
};

const initialState: InputType = {
    search: "",
};

// Create the context
const InputValueContext = createContext<{
    inputValue: InputType;
    setInputValue: React.Dispatch<React.SetStateAction<InputType>>;
}>({
    inputValue: initialState,
    setInputValue: () => { },
});

// Create a custom provider component
const InputValueProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const [inputValue, setInputValue] = useState<InputType>(initialState);

    return (
        <InputValueContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </InputValueContext.Provider>
    );
};

export { InputValueContext, InputValueProvider };
