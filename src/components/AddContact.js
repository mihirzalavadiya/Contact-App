import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number);

        if (!name || !email || !number) {
            return toast.warning("Please fill in all fields!")
        }

        if (number.length < 10 || number.length > 10) {
            return toast.warning("Please enter valid number!")
        }

        if (checkEmail) {
            return toast.error("This email is already Exists!")
        }

        if (checkNumber) {
            return toast.error("This number is already Exists!")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        };

        dispatch({type: "ADD_CONTACT", payload: data})
        toast.success("User added Successfully!");
        history.push("/");
    };

    return (
        <div className="container">
            <h1 className="display-3 my-4 text-center">Add User</h1>
            <div className="row">
                <div className="col-md-6 shadow p-5 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-1">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group p-1">
                            <input type="emial" placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group p-1">
                            <input type="number" placeholder="Contact Number" className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className="form-group p-1">
                            <input type="submit" value="Add User" className="btn btn-block btn-dark form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
