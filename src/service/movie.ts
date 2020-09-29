import { ref } from 'vue';
import { request } from './api';
export const getMovieFn = () => {
    let movieItems = ref([]);
    const getMovie = () => {
        request('', {}).subscribe((response: any) => {
            console.log(response);
            movieItems.value = response.data.message;
            console.log(movieItems)
        })
    }
    return {
        getMovie,
        movieItems
    }
}