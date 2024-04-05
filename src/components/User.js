const User = (props) => {
    const {user} = props;
    return (
        <div className="col-sm-4 mt-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Name: {user.name}</h4>
                    <hr />
                    <h5 className="card-text">Email: {user.email}</h5>
                    <hr />
                    <p>Username: {user.username}</p>
                </div>
            </div>
        </div>
    )
}

export default User;