import React, { useState } from "react";
import {datas} from '../data';

const ExampleContext = React.createContext();

export const ContextAPI = ({ children }) => {
    const [people, setPeople] = useState(datas);

    const removePerson = id => {
        setPeople(data => {
            return data.filter(person => person.id !== id);
        });
    }

    return(
        <ExampleContext.Provider value={{ people, removePerson }}>
            {children}
        </ExampleContext.Provider>
    );
}

export default ExampleContext;