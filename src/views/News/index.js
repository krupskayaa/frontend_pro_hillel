import Header from "components/Header";
import Footer from "../../components/Footer";
import NewsList from "../../components/NewsList";

const News = () => {
    return (
        <>
        <Header />
        <main>
            <NewsList />
        </main>
        <Footer />
        </>
    )
};

export default News;
