
const NewsCard = ({article}) => {
    if(!article.title) return null;
    return (
        <div className="news-card">
            <h3>{article.title}</h3>
            <a href="http://hn.algolia.com/api/v1/items/12701272">Read More</a>

        </div>
    );
}
export default NewsCard;