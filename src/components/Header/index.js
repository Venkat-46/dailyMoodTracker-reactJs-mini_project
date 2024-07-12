import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoCloseOutline} from 'react-icons/io5'
import './index.css'

class Header extends Component {
  state = {isActive: false}

  toggleNav = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderNavLinks = () => (
    <ul className="nav-links-view">
      <Link to="/" className="nav-link">
        <li data-testid="navLinkItem" className="nav-link-item">
          <p data-testid="navText" className="nav-text">
            Home
          </p>
        </li>
      </Link>
      <Link to="/reports" className="nav-link">
        <li data-testid="navLinkItem2" className="nav-link-item">
          <p data-testid="navText2" className="nav-text">
            Reports
          </p>
        </li>
      </Link>
      <li data-testid="navLinkItem3" className="nav-link-item">
        <button
          data-testid="logoutButton"
          type="button"
          className="logout-button"
          onClick={this.onClickLogout}
        >
          Logout
        </button>
      </li>
    </ul>
  )

  render() {
    const {isActive} = this.state
    return (
      <>
        <nav data-testid="headerContainer" className="header-container">
          <h1 data-testid="headingText" className="heading-text">
            Daily Mood Tracker
          </h1>
          <button
            data-testid="navButton"
            type="button"
            className="nav-button"
            onClick={this.toggleNav}
          >
            {isActive ? (
              <IoCloseOutline color="white" size={20} />
            ) : (
              <GiHamburgerMenu color="white" size={20} />
            )}
          </button>
          <ul
            data-testid="largNavLinksContainer"
            className="larg-nav-links-container"
          >
            <Link to="/" className="lg-nav-link">
              <li data-testid="lgNavLinkItem" className="lg-nav-link-item">
                <p data-testid="navTextLg" className="nav-text-lg">
                  Home
                </p>
              </li>
            </Link>
            <Link to="/reports" className="lg-nav-link">
              <li data-testid="lgNavLinkItem1" className="lg-nav-link-item">
                <p data-testid="navTextLg1" className="nav-text-lg">
                  Reports
                </p>
              </li>
            </Link>
            <li data-testid="lgNavLinkItem2" className="lg-nav-link-item">
              <button
                data-testid="lgLogoutButton"
                type="button"
                className="lg-logout-button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
        {isActive ? this.renderNavLinks() : ''}
      </>
    )
  }
}

export default withRouter(Header)
