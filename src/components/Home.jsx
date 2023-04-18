import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>Home{user && <span> {user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;