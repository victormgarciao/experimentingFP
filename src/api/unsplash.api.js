import axios from 'axios';


const unsplashRoutes = {
    searchPhotos: '/search/photos', 
};


export const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -E61jRg8ldGsi4e5mH19D2vbwGA-nll91P5bpGL9Uco',
    },
});


export function getPhotosDataFromAPI({ term }) {
    return unsplash.get(
        unsplashRoutes.searchPhotos,
        { params: { query: term } },
    );
}