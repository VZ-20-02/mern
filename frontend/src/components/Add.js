import { useState } from 'react'
const axios = require('axios').default;

const Add = () => {
    const [inputs, setInputs] = useState({
        name: "", email: "", tel: ""
    })
    const handleChange = event => {
        setInputs((previous) => {
            return {
                ...previous,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = () => {
        // console.log(inputs)
        axios
            .post('http://localhost:5000/contact/add', inputs)
            .then(response => window.location.href = "/contacts")
            .catch(err => console.log(err))
    }
    return (
        <>
            <h1>Add</h1>
            <form >
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={inputs.name}
                    onChange={e => handleChange(e)} />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={inputs.email}
                    onChange={e => handleChange(e)} />
                <input
                    type="text"
                    placeholder="tel"
                    name="tel"
                    value={inputs.tel}
                    onChange={e => handleChange(e)} />
                <input type="button" onClick={handleSubmit} value="Submit" />
            </form>
        </>
    );
}

export default Add;