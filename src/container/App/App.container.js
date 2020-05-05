import { compose, withHandlers, withState } from 'recompose';
import { App } from '../../components/App/App';
import { flowAsync } from '../../utils/fp.utils';
import { getPhotosDataFromAPI } from '../../api/unsplash.api';


function extractImagesListFromData({
    data: {
        results: imagesList,
    },
}) {
    return imagesList;
};

function handleSearchSubmit({ storeImagesList }) {
    return flowAsync(
        getPhotosDataFromAPI,
        extractImagesListFromData,
        storeImagesList,
    );
}


const enhance = compose(
    withState('imagesList', 'storeImagesList', []),
    withHandlers({ handleSearchSubmit }),
);


export const AppContainer = enhance(App);