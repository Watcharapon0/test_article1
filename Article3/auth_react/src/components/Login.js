import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'


function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
      
      <div className='center' >
          <div class='bold-line'></div>
              <div class='container'>
                <div class='window'>
                  <div class='overlay'></div>
                  <div class='content'>
                    <div class='welcome'>LOGIN</div>
                    <div class='subtitle'>wellcome to website</div>

                    <div class='input-fields'>

                        <form onSubmit={login} name='login_form'>
                        <input  class='input-line full-width'
                          type='email' 
                          value={email}
                          required
                          placeholder="Enter your email"
                          onChange={e => setEmail(e.target.value)}/>

                        <input 
                          class='input-line full-width'
                          type='password'
                          value={password}
                          required
                          placeholder='Enter your password'
                          onChange={e => setPassword(e.target.value)}/>
                                      
                                      <br />
                                      <br />
                                      <br />

                        <button class='ghost-round full-width'  type='submit'>Login</button>
                          
                         </form>
                    </div>
                    
       <div class='spacing'>  Don't have and account?   <span class='highlight'><Link to='/register'>Create one here</Link></span></div>       
               
                  </div>
                </div>
              </div>

      </div>
    

    


   
    
  )
}

export default Login