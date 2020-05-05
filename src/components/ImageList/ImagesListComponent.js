import React from 'react';
import { ImageItem } from '../ImageItem/ImageItem';

function renderImage({
    id,
    description,
    urls : { regular }, 
}) {
    return <ImageItem key={id} source={regular} alt={description} />;
};

export function ImagesListComponent({ imagesList }) {
    return <div>{imagesList.map(renderImage)}</div>;
};