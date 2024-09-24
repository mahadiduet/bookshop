import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log(books)
        fetchData();
    }, [])
    return (
        <div>
            <div className="px-4 text-center">
                <h2 className="text-4xl font-bold mb-2 text-orange-500">Our Book Collection</h2>
                <p className="text-lg mb-6 text-orange-300">
                    Discover the latest literary gems that inspire and entertain.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4">
                {books.map((book) => (<Book key={book.id} book={book}></Book>))}
            </div>
        </div>
    );
};

export default Books;