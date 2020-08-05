import { user_roles } from ".";


export interface userData_i{
    displayName: string
    bio: string
}

export interface f_users_i{
    meta: {
        completed: boolean
    }
    userData: userData_i
    roles: user_roles[]
}


export interface userInfo_i{
    displayName: string
    bio: string
}