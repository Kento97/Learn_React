import {useState} from 'react'
import './App.css'
import UserTable from "@/tables/UserTable";
import AddUserForm from "@/forms/AddUserForm";
import EditUserForm from "@/forms/EditUserForm";

const App = () => {
    const usersData: { id: number, name: string, username: string }[] = [
        {id: 1, name: 'Tania', username: 'floppydiskette'},
        {id: 2, name: 'Craig', username: 'siliconeidolon'},
        {id: 3, name: 'Ben', username: 'benisphere'},
    ]
    const initialFormState = {id: 0, name: '', username: ''}
    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = (user: { id: number, name: string, username: string }) => {
        user.id = users.length + 1;
        setUsers([...users, user])
    }
    const deleteUser = (id: number) => {
        setEditing(false)
        setUsers(users.filter((user) => user.id !== id))
    }
    const editRow = (user: { id: number, name: string, username: string }) => {
        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }
    const updateUser = (id: number, updatedUser: { id: number, name: string, username: string }) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser}/>
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                </div>
            </div>
        </div>
    )
}

export default App
