import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (! localStorageItem || JSON.parse(localStorageItem).length < 1) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 2000);
    }, []);
  
    const saveItem = (newItem) => {
      try {
        const stringifyItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifyItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item, 
      saveItem,
      loading,
      error
    };
}

export { useLocalStorage }