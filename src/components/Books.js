import { BooksContext } from "../BooksContext"
import { useContext } from "react";

export default function Books() {
    const books = useContext(BooksContext);
    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{
                        book.title} by {book.author}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}