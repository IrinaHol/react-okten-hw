import {axiosService} from "./axiosService";


const postService = {
    getPostsByUserId: (userId) => axiosService.get('/posts', {params: {userId}})
}

export {
    postService
}