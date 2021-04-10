import React, { useReducer, createContext } from 'react';

const initialState = [];

export const ExpenseTrackercontext = createContext(initialState);

export const Provider = ({ children }) => {
    return (
        <ExpenseTrackercontext.Provider value={{ appname: `Expense Tracker`}}>
            {children}
        </ExpenseTrackercontext.Provider>
    )
}