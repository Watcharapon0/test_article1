import './css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './components/Profile';
import Register from './components/Register'
import VerifyEmail from './components/VerifyEmail';
import Login from './components/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './components/AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './components/PrivateRoute'
import {Navigate} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])


  
  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
          <Route path='*' element={<PageNotFound/>} /> 
        </Routes>  
      </AuthProvider>
  </Router>
  );
}

export default App;
