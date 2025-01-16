import api from "./api"

export const reducers = {
    [api.reducerPath]: api.reducer,
}

export const middlewares = [
    api.middleware,
]

export default {
    api
}