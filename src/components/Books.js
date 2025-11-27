import { BooksContext } from "../BooksContext"
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Books() {
    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search") || "";
    const books = useContext(BooksContext);

    useEffect(() => {
        //http://localhost:3000/?search=erica
        console.log("query :", query);
        console.log("Search query:", search);
    }, [search]);
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