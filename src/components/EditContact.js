import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const { id } = useParams();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch(); 
    const history = useHistory();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

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
            id: parseInt(id),
            name,
            email,
            number
        };

        dispatch({ type: "UPDATE_CONTACT", payload: data })
        toast.success("User a   dded Successfully!");
        history.push("/");
    };

    return (
        <div className="container">
            {
                currentContact ? (
                    <>

                        <h1 className="display-3 my-4 text-center">Edit User</h1>
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
                                        <input type="submit" value="Update User" className="btn btn-dark" />
                                        <Link to="/" className="btn btn-danger m-2">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) :
                    (<h3 className="display-5 font-weight-bold my-5 text-center">User contact {id} is not existes.</h3>)
            }
        </div>
    )
}

export default EditContact
