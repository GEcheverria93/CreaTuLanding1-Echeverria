import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link to="/shop" className="not-found-link">
        Go back to Shop
      </Link>
    </div>
  );
};

export default NotFoundPage;
