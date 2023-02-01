import React from "react";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

import "./UsersList.css"

const UsersList = props => {
    const items = props.items;
    if (items.length === 0) {
        return <div className="center empty-card">
            <Card>
                <h2>No users found.</h2>
            </Card>
        </div>
    }
    return <ul className="users-list">
        {items.map(user => <UserItem key={user.id} user={user}/>)}
    </ul>
}

export default UsersList;