import React from 'react'

const AddContact = () => {
    return (
        <div className="container">
            <h1 className="display-3 my-4 text-center">Add User</h1>
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
                            <input type="submit" value="Add User" className="btn btn-block btn-dark form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
