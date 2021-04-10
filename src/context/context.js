import React, { useReducer, createContext } from 'react';

const initialState = [];

export const ExpenseTrackercontext = createContext(initialState);

export const Provider = ({ children }) => {
    
}