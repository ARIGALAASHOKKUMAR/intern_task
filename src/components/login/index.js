import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

class Login extends Component {
  state = {user: '', pwd: '', result: ''}

  formm = event => {
    event.preventDefault()
    const {user, pwd} = this.state
    if (user === 'foo' && pwd === 'bar') {
      const {history} = this.props
      history.replace('/Home')
      Cookies.set('correct', 'ashok')
    } else {
      this.setState({
        result: 'UserName or Password mismatch',
        user: '',
        pwd: '',
      })
    }
  }

  user = event => {
    this.setState({user: event.target.value})
  }

  pwd = event => {
    this.setState({pwd: event.target.value})
  }

  render() {
    const {result, user, pwd} = this.state
    const res = Cookies.get('correct')
    if (res !== undefined) {
      return <Redirect to="/Home" />
    }
    return (
      <div className="login-page">
        <form onSubmit={this.formm}>
          <label htmlFor="username">UserName</label>
          <br />
          <input type="text" onChange={this.user} value={user} />
          <br />
          <label htmlFor="username">Password</label>
          <br />
          <input type="text" onChange={this.pwd} value={pwd} />
          <br />
          <div className="btn">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="res">{result}</p>
        </form>
      </div>
    )
  }
}

export default Login
