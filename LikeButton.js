function LikeButton() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return 'Liked!';
    }

    return (
        <button onClick={() => setLiked(true)}>Like</button>
    );

}
const domContainer = document.querySelector('.likebutton');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton)); 