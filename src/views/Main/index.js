import Header from "components/Header";
import About from "components/About";
import Advantages from "components/Advantages";
import Footer from "components/Footer";

const Main = () => {
    return (
        <div className="background">
            <Header />
            <main>
                <About />
                <Advantages />
            </main>
        </div>
    )
};

export default Main;
