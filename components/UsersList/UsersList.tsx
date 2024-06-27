"use client"
import styles from "./usersList.module.scss"
import {useEffect, useState} from "react";
import {Pagination, UserList} from "../../types/user.types";
import {getUsers} from "../../http/userAPI";


const UsersList = () => {
    const [users, setUsers] = useState<UserList>()
    const [page, setPage] = useState<number>(1)


    useEffect(() => {
        const pagination: Pagination = {
            count: 6,
            page: page
        }

        getUsers(pagination).then((usersList: UserList) => {
            setUsers(usersList)

        })
    }, [page]);

    const nextPage = () => {
        setPage(prevState => prevState + 1)
    }

    return (
        <div className={styles.listContainer}>
            <div className={styles.pageInfo}>
                You are on page {users?.page} of {users?.total_pages}

            </div>
            <table className={styles.userTable}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position_id</th>
                    <th>Photo</th>
                </tr>
                </thead>
                <tbody>

                {users?.users?.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.position_id}</td>
                        <td>{user.photo}</td>
                    </tr>
                ))}

                </tbody>

            </table>
            <button type="button" onClick={nextPage} className={styles.btnNext} disabled={!users?.links.next_url}>Show more</button>
        </div>
    );
}

export default UsersList;