//axios is like postman
//
import axios from 'axios';

//base url to make requests to the movie url
//baseurl is like gennral url in which we can append the route like this using get function
//  instance.get('/apis') its like '' https://api.themoviedb.org/3apis ''

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;