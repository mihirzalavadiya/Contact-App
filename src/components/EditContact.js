import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EditContact = () => {

    const {id} = useParams();

    return (
        <div className="container">
            <h1 className="display-3 my-4 text-center">Edit User {id}</h1>
            <div className="row">
                <div className="col-md-6 shadow p-5 mx-auto">
                    <form>
                        <div className="form-group p-1">
                            <input type="text" placeholder="Name" className="form-control" />
                        </div>
                        <div className="form-group p-1">
                            <input type="emial" placeholder="Email" className="form-control" />
                        </div>
                        <div className="form-group p-1">
                            <input type="number" placeholder="Contact Number" className="form-control" />
                        </div>
                        <div className="form-group p-1">
                            <input type="submit" value="Update User" className="btn btn-dark" />
                            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditContact
