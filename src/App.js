import logo from './logo.svg';
import './App.css';

/*Colour Scheme:
#008B74
#00C2A8
#4FFBDF
#845EC2
*/

/*Screens

  SplashScreen
  AdminPage
    - Student Access
    - Resource Page
  StudentsPage
    -StudentPage1
    -StudentPage2

*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from the other side
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
