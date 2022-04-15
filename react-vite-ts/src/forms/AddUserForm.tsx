import React, {useState} from 'react'

interface IProps {
    addUser: (user: { id: number, name: string, username: string }) => void
}

const AddUserForm = (props: IProps) => {
    const {addUser} = props
    const initialFormState = {id: 0, name: '', username: ''}
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm
