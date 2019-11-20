import React from 'react'

function Buttons(props) {
    
    const tweetUrl="https://twitter.com/intent/tweet?text=";
    return (
        <div>
            <a href={tweetUrl + props.children}>
                <button class="btn btn-primary">#tweet-quote</button>
            </a>
        </div>
    )
}

export default Buttons

