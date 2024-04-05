const Todos = (props) => {
    const {todos} = props;
    return (
        <div className="col-sm-6 mt-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">ID: {todos.id}</h4>
                    <hr />
                    <h5 className="card-text">Title: {todos.title}</h5>
                    <hr />
                    <p>Completed: {JSON.stringify(todos.completed)}</p>
                </div>
            </div>
        </div>
    )
}

export default Todos;