import Books from "../../conponents/Books";
import Navbar from "../../conponents/share/Navbar";
import Slider from "../../conponents/Slider";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Books />
        </div>
    );
};

export default Homepage;