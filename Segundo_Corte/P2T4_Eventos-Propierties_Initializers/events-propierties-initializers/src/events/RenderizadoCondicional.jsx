import { Component } from "react"

const Login = () => {
    return (
        <>
            <h3>Login</h3>
        </>
    )
}

const Logout = () => {
    return (
        <>
            <h3>Logout</h3>
        </>
    )
}

export class RenderizadoCondicionalES6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            session: false
        }
        this.handleAction = this.handleAction.bind(this)
    }

    handleAction() {
        this.setState({ session: !this.state.session })
    }

    render() {
        return (
            <>
                <h2>Renderizado Condicional</h2>
                <button className="btn btn-danger" onClick={this.handleAction}>Cambiar estado</button>
                {
                    this.state.session
                        ? <Logout />
                        : <Login />
                }
            </>
        )
    }
}

export class RenderizadoCondicionalES7 extends Component {
    state = {
        session: false
    }


    handleAction = () => {
        this.setState({ session: !this.state.session })
    }

    render() {
        return (
            <>
                <h2>Renderizado Condicional</h2>
                <button className="btn btn-danger" onClick={this.handleAction}>Cambiar estado</button>
                {
                    this.state.session
                        ? <Logout />
                        : <Login />
                }
            </>
        )
    }
}