import {axiosService} from "./axiosService";


const userService = {
    getAllUsers: axiosService.get('/users')
}

export {
    userService
}