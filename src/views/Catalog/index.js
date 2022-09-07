import CatalogList from "components/CatalogList";
import Header from "components/Header"
import Footer from "components/Footer"


const Catalog = () => {
    return (
        <>
        <Header />
        <main>
            <CatalogList />
        </main>
        <Footer />
        </>
    )
}

export default Catalog;