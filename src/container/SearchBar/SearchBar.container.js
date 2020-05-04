import { compose, withState, withHandlers, defaultProps } from 'recompose';
import { SearchBar } from '../../components/SearchBar/SearchBar';


const DEFAULT_PROPS = {
    onSubmitProp({ term }) {
        return console.log(`There is no submit for ${term}`
    )}
};


function handleSearchInputChange({ setTerm }) {
    return function onSearchInputChange({ target: { value }}) {
        setTerm(value);
    }
}

function handleSearchFormSubmit({ term, onSubmitProp }) {
    return function onSearchFormChange(event) {
        event.preventDefault();
        onSubmitProp({ term });
    }
}


const enhance = compose(
    defaultProps(DEFAULT_PROPS),
    withState('term', 'setTerm', ''),
    withHandlers({ handleSearchInputChange, handleSearchFormSubmit })
);

export const SearchBarContainer = enhance(SearchBar); 
