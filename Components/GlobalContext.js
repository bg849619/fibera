import React from 'react';

export const GlobalContext = React.createContext({
    getComponent: () => {},
    setComponent: () => {},
    getCableSpec: () => {},
    setCableSpec: () => {},
    getSplitterSpec: () => {},
    setSplitterSpec: () => {},
    saveData: () => {},
});