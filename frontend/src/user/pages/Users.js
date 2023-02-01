import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        // {
        //     id: 'u1',
        //     name: 'james',
        //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg',
        //     placeCount: 1 

        // }
    ]
    return <UsersList items={USERS}/>
}

export default Users;