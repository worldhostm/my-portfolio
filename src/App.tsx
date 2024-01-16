import React from 'react';
import AboutMe from "./AboutMe";
import {Routes,BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'
const App :React.FC= () => {
    return (
        <>
            <HashRouter>
                    <Routes>
                        <Route path='/' element={<AboutMe />}/>
                    </Routes>
            </HashRouter>
        </>
    )
};

export default App;