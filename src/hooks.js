import { useState, useEffect } from 'react';

function useLocalStorage(key, starting_value=[]){
    let initialValue;

    try {
        initialValue = JSON.parse(localStorage.getItem(key))
    } catch (e) {
        initialValue = starting_value;
    }

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        if (!value) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [key, value]);

    return [value, setValue]
}


export { useLocalStorage };