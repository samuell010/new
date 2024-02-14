// home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
    const imageStyle = {
        backgroundImage: 'url("/photo/background.jpg")', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Adjust as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

  return (
    <div style={imageStyle}>
      <div className="image-container">
        <Link to="/animals" className="image">
          <img src="/photo/animal.jpg" to ="Animal" />
          <p>Animal</p>
        </Link>

        <Link to="/birds" className="image">
          <img src="/photo/bird.jpg" to ="Bird" />
          <p>Bird</p>
        </Link>

        <Link to="/insects" className="image">
          <img src="/photo/insect.jpg" to ="Insect" />
          <p>Insect</p>
        </Link>

        <Link to="/fish" className="image">
          <img src="/photo/fish.jpg" to ="Fish" />
          <p>Fish</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
