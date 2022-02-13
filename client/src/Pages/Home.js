// Responsive homepage
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import {useMediaQuery} from 'react-responsive';
import '../Styles/Home.css';
import '../Styles/w3-HubBoard.css';
import logo from '../Image/HubBoard.svg';
// https://play-lh.googleusercontent.com/OY4rxeNTPaHwyOTZ-RUooqJvPnO5QUYmQcw0dhD90Mu6UWItOSZfQv7ks_FscbBow0M
import messageIcon from '../Image/message_google.svg';
// https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/ios11-notes-app-icon.png
import ToDo from '../Image/to-do-iOS.svg';

function App() {
    const isDesktopOrTablet = useMediaQuery({query: '(min-width: 870px)'});
    const isMobileFHD = useMediaQuery({query: '(min-width: 670px)'});
    const isMobileHD = useMediaQuery({query: '(min-width: 535px)'});
    // react-responsive: min-width = window.innerWidth
    // const intViewportWidth = window.innerWidth;

    return (
        <div className="App">
            <img src={logo} className="logo" height="200vh" alt="Welcome to HubBoard!" title="Welcome to HubBoard!"/>
            {isMobileHD && <h1>HubBoard: Easy-to-use task list portal</h1>}

            {!isMobileHD && <h1>HubBoard</h1>}
            {!isMobileHD && <h2>Easy-to-use task list portal</h2>}
            <table className="w3-animate-bottom" width="100%">
                <tr>
                    <td>
                        <img src={messageIcon} height="100vh" alt="User Interaction" title="User Interaction"/>
                        {isDesktopOrTablet && <p className="feature_title">User Interaction <span
                            className="coming_soon">(Coming soon)</span></p>}

                        {!isDesktopOrTablet && <p className="feature_title">User Interaction</p>}
                        {!isDesktopOrTablet && <span className="coming_soon">(Coming soon)</span>}
                    </td>
                    <td>
                        <CloudOutlinedIcon sx={{fontSize: 100}}/>
                        {isDesktopOrTablet &&
                            <p className="feature_title">Cloud Platform Integration <span className="coming_soon">(Coming soon)</span>
                            </p>}

                        {!isDesktopOrTablet && <p className="feature_title">Cloud Platform Integration</p>}
                        {!isDesktopOrTablet && <span className="coming_soon">(Coming soon)</span>}
                    </td>
                    <td>
                        <img src={ToDo} height="100vh" alt="To-do List Management" title="To-do List"/>
                        {isMobileFHD && <p className="feature_title">To-do List Management</p>}

                        {!isMobileFHD && <p className="feature_title">To-do List</p>}
                        {!isMobileFHD && <span className="feature_title">Management</span>}
                    </td>
                </tr>
            </table>
            <Button variant="contained" startIcon={<LoginIcon/>} className="w3-animate-bottom-1s" href="">Sign In</Button>
            <p className="w3-animate-bottom-1s" align="left">
                <a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3100/" className="w3-silver"
                   target="_blank">CSCI3100 Software Engineering Group Project</a>
            </p>
        </div>
    );
    // <p>intViewportWidth: {intViewportWidth}</p>
}

export default App;
