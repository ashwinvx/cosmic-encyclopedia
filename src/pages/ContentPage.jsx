import React from 'react'

export default function Content({ data }) {
    return (
        <div className="content">
            <h1>{ data.title }</h1>
            <p>{ data.content }</p>
        </div>
    )
}
