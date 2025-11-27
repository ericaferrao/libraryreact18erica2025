import { BooksContext } from "../BooksContext"
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Books() {
    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search") || "";
    const books = useContext(BooksContext);

    //http://localhost:3000/?search=in
    //http://localhost:3000/?search=Catcher
    //http://localhost:3000/?search=The%20Lord%20of%20the%20Rings
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        //http://localhost:3000/?search=erica
        console.log("query :", query);
        console.log("Search query:", search);
    }, [search]);
    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>{
                        book.title} by {book.author}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}