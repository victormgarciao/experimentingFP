import React from 'react';


export function SearchBar({
    term,
    handleSearchInputChange, 
    handleSearchFormSubmit,
}) {
    return (
        <div className="ui segment">
            <form
                className="ui form"
                onSubmit={handleSearchFormSubmit}
            >
                <div className="field">
                    <label>Image Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </form>
        </div>
    );
}
