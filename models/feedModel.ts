interface userInfo {
    firstName: string,
    lastName: string,
    username: string,
    image: string,
}
export interface feedModel {
    body: string,
    tags: string,
    reactions: number,
    userinfo: userInfo,
}