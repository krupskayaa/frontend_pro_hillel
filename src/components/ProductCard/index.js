import "./style.scss";

const ProductCard = () => {
    return (
        <div className="container">
            <section className="product-card">
                <h2 className="product-card-title"></h2>
                <div className="catalog__wrapper">
                    {catalog?.map((elem) => {
                        return (
                            <CatalogItem id={elem.id} title={elem.title} price={elem.price} image={elem.image}/>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default ProductCard;