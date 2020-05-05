import React from 'react';


export function ImageItem({ source, key, alt }) {
    return <img src={source} key={key} alt={alt} />
}