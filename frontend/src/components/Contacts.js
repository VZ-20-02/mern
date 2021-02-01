import { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";
const axios = require('axios').default;

const Contacts = () => {
    const [data, setData] = useState(undefined)
    useEffect(() => {
        axios
            .get('http://localhost:5000/contact')
            .then(users => {
                console.log(users)
                setData(users.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <h1>Contacts</h1>
            {data !== undefined ?
                data.map(contact => <div key={contact._id}>
                    <h2>{contact.name}</h2>
                    <p>{contact.email}</p>
                    <p>{contact.tel}</p>
                    <Link to={`/contacts/${contact._id}`} >Klicke hier</Link>
                </div>)
                : "Loading"}
        </>
    );
}

export default Contacts;