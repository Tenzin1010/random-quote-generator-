import React from 'react'

function Buttons(props) {
    
    const tweetUrl="https://twitter.com/intent/tweet?text=";
    return (
        <div className="tweet-container">
            <a href={tweetUrl + props.children}>
                <button className="tweet-btn">#tweet-quote</button>
            </a>
        </div>
    )
}

export default Buttons

