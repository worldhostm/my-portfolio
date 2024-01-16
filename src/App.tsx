import React from 'react';
import AboutMe from "./AboutMe";
import {Routes,BrowserRouter as Router, Route} from 'react-router-dom'
const App :React.FC= () => {
    return (
        <>
            <Router>
                    <Routes>
                        <Route path='/' element={<AboutMe />}/>
                    </Routes>
            </Router>
        </>
    )
};

export default App;