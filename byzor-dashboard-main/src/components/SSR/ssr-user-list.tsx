import React from 'react';
import {getUsers} from "@/lib/actions/user";

async function SSRUserList() {
    const users = await getUsers()
    return (
        <div>
            {users.user.name}
        </div>
    );
}

export default SSRUserList;
