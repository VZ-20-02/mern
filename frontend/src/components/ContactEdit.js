import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
const axios = require('axios').default;

const ContactEdit = () => {
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
    const handleChange = event => {
        setData((previous) => {
            return {
                ...previous,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = () => {
        axios
            .put(`http://localhost:5000/contact/${id}`, data)
            .then(result => window.location.href = `/contacts/${id}`)
            .catch(err => console.log(err))
    }
    return (
        <div>
            {data !== undefined ?
                <form >
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        value={data.name}
                        onChange={e => handleChange(e)} />
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        value={data.email}
                        onChange={e => handleChange(e)} />
                    <input
                        type="text"
                        placeholder="tel"
                        name="tel"
                        value={data.tel}
                        onChange={e => handleChange(e)} />
                    <input type="button" onClick={handleSubmit} value="Submit" />
                </form>
                : "Loading..."}
        </div>
    );
}

export default ContactEdit;