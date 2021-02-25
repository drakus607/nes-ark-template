import React from 'react'

const NewPost = (props) => {
    return (
        <div key={props.key}>
            <h2>{props.header}</h2>
            <p>{props.body}</p>
            <p>{props.author}</p>            
        </div>
    )
}

export default NewPost
