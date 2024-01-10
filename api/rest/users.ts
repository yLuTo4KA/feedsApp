import { makeRequest } from "../request";

export const getUsers = (id: number) => {
    return makeRequest({
        url: `/users/filter?key=id&value=${id}`
    })
}