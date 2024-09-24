
const Slider = () => {
    return (
        <div className="carousel w-full h-[350px]">
            {/* Slider-1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/wd6qbZn/Slider1.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

                <div className="absolute top-1/3 w-full text-black flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4 text-center">Unlock a World of Stories</h1>
                    <p className="mb-6 text-center">Find Your Next Favorite Book at Paradies</p>
                    <button className="bg-orange-500 p-4 rounded-lg text-white font-semibold w-1/2 md:w-1/3 lg:w-1/4 text-center">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Slider - 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/sCgWcCc/slider2.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>

                <div className="absolute top-1/3 w-full text-black flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4 text-center">Unlock a World of Stories</h1>
                    <p className="mb-6 text-center">Find Your Next Favorite Book at Paradies</p>
                    <button className="bg-orange-500 p-4 rounded-lg text-white font-semibold w-1/2 md:w-1/3 lg:w-1/4 text-center">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Slider - 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/XXcRFxn/slider3.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

                <div className="absolute top-1/3 w-full text-black flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4 text-center">Unlock a World of Stories</h1>
                    <p className="mb-6 text-center">Find Your Next Favorite Book at Paradies</p>
                    <button className="bg-orange-500 p-4 rounded-lg text-white font-semibold w-1/2 md:w-1/3 lg:w-1/4 text-center">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Slider - 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/TqSM6XF/slider4.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

                <div className="absolute top-1/3 w-full text-black flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4 text-center">Unlock a World of Stories</h1>
                    <p className="mb-6 text-center">Find Your Next Favorite Book at Paradies</p>
                    <button className="bg-orange-500 p-4 rounded-lg text-white font-semibold w-1/2 md:w-1/3 lg:w-1/4 text-center">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;