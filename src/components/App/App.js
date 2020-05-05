import React from 'react';
import { SearchBarContainer } from '../../container/SearchBar/SearchBar.container';
import { ImagesListComponent } from '../ImageList/ImagesListComponent';

export function App({ handleSearchSubmit, imagesList }) {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBarContainer onSubmitProp={handleSearchSubmit} />
            <ImagesListComponent imagesList={imagesList} />
        </div>
    );
}
