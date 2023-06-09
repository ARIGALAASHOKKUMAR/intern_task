import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

class Home extends Component {
  state = {usersdata: [], isloading: true}

  componentDidMount() {
    this.apidata()
  }

  apidata = async () => {
    const apiurl = 'https://randomuser.me/api/?results=500'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiurl, options)
    const data = await response.json()
    console.log(data.results)
    this.setState({usersdata: data.results, isloading: false})
  }

  logout = () => {
    const {history} = this.props
    Cookies.remove('correct')
    history.replace('/')
  }

  contactslist = () => {
    const {usersdata} = this.state
    return (
      <div className="align">
        <button onClick={this.logout} className="btn btn-primary">
          Logout
        </button>
        <ul>
          {usersdata.map(each => (
            <li>
              <p className="m-1">
                {each.name.title}.{each.name.first}
                {each.name.last}
              </p>
              <img src={each.picture.large} alt="nodata" />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const res = Cookies.get('correct')
    if (res === undefined) {
      return <Redirect to="/" />
    }

    const {usersdata, isloading} = this.state
    return isloading ? this.renderLoader() : this.contactslist()
  }
}
export default Home
