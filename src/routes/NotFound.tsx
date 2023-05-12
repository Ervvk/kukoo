import { Link } from 'react-router-dom';
import { MoodConfuzed } from 'tabler-icons-react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '5rem',
      }}
    >
      <MoodConfuzed size={50} />
      <h1>You seem to be lost. This page does not exist</h1>
      <p>
        <Link to="/login">Click here to launch the app</Link>
      </p>
    </div>
  );
};

export default NotFound;
