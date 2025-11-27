import React, { useState, useEffect, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        //TODO: Fetch books
        fetch("/books.json")
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error("Error fetching books:", error));
    }, [])

    return (<BooksContext.Provider value={books}>
        {children}
    </BooksContext.Provider>)
}