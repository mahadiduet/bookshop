import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Bookdetails = () => {
    const slug = useParams();
    console.log('Params ID:', slug.id)
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getSingleBook = async () => {
            try {
                const response = await fetch(`/data.json`);
                const data = await response.json();
                console.log('Data:', data)
                const selectedBook = data.find((b) => b.bookId === parseInt(slug.id));
                console.log('Found Book:', selectedBook);
                setBook(selectedBook);
                console.log('Book:', book.bookName);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }

        getSingleBook();
    }, [slug.id]);

    const wishListMassage = () => {
        toast.success(`${book.bookId}-${book.bookName} has been successfully added to the Wishlist.`);
      };

      const cartListMassage = () => {
        toast.success(`${book.bookId}-${book.bookName} has been successfully added to the Cart.`);
      };

    return (
        <div>
            <div className="max-w-6xl mx-auto my-10 p-6 bg-white rounded-lg">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3 flex justify-center items-start">
                        <img
                            src={book.image}
                            alt={book.bookName}
                            className="rounded-lg shadow-md object-cover h-96 w-full"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-bold mb-4">{book.bookName}</h2>
                        <p className="text-lg text-gray-700 mb-2">
                            <span className="font-semibold">Author:</span> {book.author}
                        </p>
                        <p className="text-lg text-gray-700 mb-2">
                            <span className="font-semibold">Category:</span> {book.category}
                        </p>
                        <p className="text-lg text-gray-700 mb-2">
                            <span className="font-semibold">Publisher:</span> {book.publisher} ({book.yearOfPublishing})
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <span className="font-semibold">Total Pages:</span> {book.totalPages}
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <span className="font-semibold">Rating:</span> {book.rating} / 5
                        </p>

                        <div className="mb-4">
                            <span className="font-semibold text-lg">Tags:</span>
                            <div className="flex gap-2 mt-2">
                                {book?.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-6">
                            <span className="font-semibold">Review:</span> {book.review}
                        </p>

                        <div className="flex gap-4">
                            <button onClick={wishListMassage} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                Wish to Read
                            </button>
                            <button onClick={cartListMassage} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;