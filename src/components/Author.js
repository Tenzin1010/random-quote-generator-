import React from 'react'


function Author(props) {
    return (
        <div>
            {props.children}
            {props.message}
        </div>
    )
}

export default Author