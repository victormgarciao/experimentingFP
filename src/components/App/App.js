import React from 'react';
import { SearchBarContainer } from '../../container/SearchBar/SearchBar.container';

export function App({ handleSearchSubmit, imagesList }) {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
            <SearchBarContainer onSubmitProp={handleSearchSubmit} />
            Found: {imagesList.length}
        </div>
    );
}
