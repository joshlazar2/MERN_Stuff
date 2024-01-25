import './App.css';
import DisplayUsers from './components/DisplayUsers';
import UserForm from './components/UserForm';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <h1>Context and UseReducer</h1>
      <UserProvider>
        <UserForm />
        <DisplayUsers />
      </UserProvider>
    </div>
  );
}

export default App;
