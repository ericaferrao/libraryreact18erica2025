import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { BooksContext } from "../BooksContext"


export default function BooksDetails() {

    const books = useContext(BooksContext);



    const { bookId } = useParams();
    const book = books.find(b => b.id === parseInt(bookId));

    useEffect(() => {
        console.log("Book ID:", bookId);
    }, []);

    if (!books || books.length === 0) {
        return (
            <div>
                <h1>Loading...</h1>

            </div>
        )
    }

    if (!book) {
        return (
            <div>
                <h1>Book Not Found</h1>
                <p>No book found with ID: {bookId}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Book Details</h1>
            <p>Details for book with ID: {bookId} will be displayed here.</p>
            {book && (
                <div>
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                </div>
            )
            }
        </div>
    )

}