import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {Pagination, UserList} from "../types/user.types";
import {UserErrors, UserSuccess} from "../types/error.types";


export const getUsers = async (pagination: Pagination):Promise<UserList> => {

    const config: AxiosRequestConfig = {
        params: {...pagination }
    };

    try{
        const users = await axios.get<UserList>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, config)
        return users.data

    }catch (err){
        console.error(err)
        throw err;
    }
}

interface Token{
    success: boolean,
    token: string
}

export const getToken = async () => {

    try{
        const users = await axios.get<Token>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/token`)
        return users.data

    }catch (err){
        console.error(err)
        throw err;
    }
}

export const createUser = async (formData: FormData):Promise<UserSuccess | UserErrors> => {

    try{
        const token = await getToken()

        const user = await axios.post<UserSuccess>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`

            },
        })
        return user.data

    }catch (error){
        const err = error as AxiosError

        return err.response?.data as UserErrors

    }

}