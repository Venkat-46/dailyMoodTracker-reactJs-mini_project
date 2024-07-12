import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div data-testid="notFoundContainer" className="not-found-container">
    <Header />
    <div data-testid="notFoundSection" className="not-found-section">
      <img
        data-testid="notFoundImg"
        src="https://res.cloudinary.com/dbevu3n4a/image/upload/v1720355314/ybdyhw6v9dqe3qjd2b33.png"
        alt="not found"
        className="not-found-img"
      />
      <h1>Page Not Found.</h1>
      <p>We are sorry, the page you requested could not be found.</p>
    </div>
  </div>
)

export default NotFound
