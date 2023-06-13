function AlertTable(props) {
    const render = props.render
    return <>
        <div class="alert alert-danger" role="alert">
            A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
    </>
    render()
}

export default AlertTable