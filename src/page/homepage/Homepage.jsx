import Books from "../../conponents/Books";
import Footer from "../../conponents/share/Footer";
import Navbar from "../../conponents/share/Navbar";
import Slider from "../../conponents/Slider";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Books />
            <Footer />
        </div>
    );
};

export default Homepage;