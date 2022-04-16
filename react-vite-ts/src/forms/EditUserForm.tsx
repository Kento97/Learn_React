import React, {useState, useEffect} from 'react'

interface IProps {
    setEditing: (isEdit: boolean) => void,
    currentUser: { id: number, name: string, username: string },
    updateUser: (id: number, updatedUser: { id: number, name: string, username: string }) => void
}


const EditUserForm = (props: IProps) => {
    const [user, setUser] = useState(props.currentUser)
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm
