import React from 'react';

export const GlobalContext = React.createContext({
    getAllData: () => {},
    getComponent: () => {},
    setComponent: () => {},
    deleteComponent: () => {},
    getCableSpec: () => {},
    addCableSpec: () => {},
    getSplitterSpec: () => {},
    addSplitterSpec: () => {},
    saveData: () => {},
});