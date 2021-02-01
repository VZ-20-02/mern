import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
const axios = require('axios').default;

const SingleContact = () => {
    const { id } = useParams()
    const [data, setData] = useState(undefined)
    useEffect(() => {
        axios
            .get(`http://localhost:5000/contact/${id}`)
            .then(user => {
                console.log(user)
                setData(user.data)
            })
            .catch(err => console.log(err))
    }, [id])
    const handleDelete = () => {
        axios
            .delete(`http://localhost:5000/contact/${id}`)
            .then(result => window.location.href = "/contacts")
            .catch(err => console.log(err))
    }
    return (
        <div>
            {data !== undefined ? <div>
                <h3>{data.name}</h3>
                <p>{data.email}</p>
                <p>{data.tel}</p>
                <button onClick={handleDelete}>Delete</button>
                <Link to={`/contacts/${id}/edit`}>Edit</Link>
            </div>
                : "Loading"}
        </div>
    );
}

export default SingleContact;