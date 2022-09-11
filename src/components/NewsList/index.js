import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import ItemNews from "./ItemNews";
import newsLucy1 from "../../assets/news_Lucy.jpg";
import newsCaroline from "../../assets/news_Caroline.jpg";
import newsLucy2 from "../../assets/news_Lucy2.jpg";

const NewsList = () => {
    const dispatch = useDispatch();

    const allNews = [
        {
            id: 1,
            image: newsLucy1, 
            title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
            description: "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
            time: "2 hours ago",
            author: "Lucy Hiddleston",
        },
        {
            id: 2,
            image: newsCaroline,
            title: "John Lewis, civil rights giant, crosses infamous Selma bridge one final time",
            description: "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge",
            time: "4 hours ago",
            author: "Caroline Casey",
        },
        {
            id: 3,
            image: newsLucy2,
            title: "Tornado and tide warnings as Storm Hanna lashes Texas",
            description: "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
            time: "5 hours ago",
            author: "Lucy Hiddleston",
        },
    ];

    dispatch({
        type: "ADD_NEWS",
        payload: allNews
    });

    const news = useSelector(state => state.news.news);

    console.log(news)
    return (
        <div className="container">
            <section className="news">
                <h2 className="news__title-main">News</h2>
                <div className="news__wrapper">
                    {news?.map((elem) => {
                        return (
                            <ItemNews key={elem.id} id={elem.id} image={elem.image} title={elem.title} description={elem.description} time={elem.time} author={elem.author} />
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default NewsList;