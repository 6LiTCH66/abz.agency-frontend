export interface Fails{
    name?: string[]
    email?: string[]
    phone?: string[]
    position_id?: string[]
    photo?: string[]
}

export interface UserErrors{
    success: boolean,
    message: string,
    fails?: Fails
}
export interface UserSuccess{
    success: boolean,
    user_id: number,
    message: string
}