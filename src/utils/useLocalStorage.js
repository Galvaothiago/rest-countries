import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState((JSON.parse(localStorage.getItem(key) || String(defaultValue))));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export { useLocalStorage };