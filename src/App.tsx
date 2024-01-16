import React from 'react';
import AboutMe from "./AboutMe";
import {Routes,BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'
const App :React.FC= () => {
    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/' element={<AboutMe />}/>
                    </Routes>
            </Router>
        </>
    )
};

export default App;