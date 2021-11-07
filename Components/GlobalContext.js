import React from 'react';

export const UserContext = React.createContext({
    getComponent: () => {},
    setComponent: () => {},
    getCableSpec: () => {},
    setCableSpec: () => {},
    getSplitterSpec: () => {},
    setSplitterSpec: () => {},
    saveData: () => {},
});