import "./style.scss";

const ItemNews = ({id, image, title, description, time, author}) => {
    
    return (
        <div key={id} className="news__item">
            <div className="news__img-wrap">
                <img className="news__img" src={image}></img>
            </div>
            <div className="news__info">
                <h3 className="news__title">{title}</h3>
                <p className="news__description">{description}</p>
                <div className="news__info-author">
                    <p className="news__time">{time}</p>
                    <p className="news__author">{author}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemNews;