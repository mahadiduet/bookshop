import { Link } from "react-router-dom";

const Book = ({ book }) => {
    // console.log(book);
    const { bookId, image, author, bookName, tags, rating, category } = book;
    return (
        <div className="card bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            {/* Image Section */}
            <figure className="relative">
                <img className="w-full h-56 object-cover" src={image} alt={bookName} />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center">
                    {category}
                </div>
            </figure>

            {/* Card Body */}
            <div className="card-body p-6">
                <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
                    {bookName}
                </h2>

                <div className="mb-4 text-gray-600">
                    <h3 className="text-lg">Author: <span className="font-medium">{author}</span></h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-semibold text-gray-700">Tags:</span>
                    {tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline border-gray-400 text-gray-600 px-3 py-1 rounded-full">
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 mb-4">
                    <span className="font-semibold text-gray-700 mr-2">Rating:</span>
                    <div className="flex items-center">
                        {/* Replace with stars if needed */}
                        <span className="text-lg">{rating}</span>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-end mt-auto">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
                        <Link to={`/book/${bookId}`}>Book Details</Link>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Book;