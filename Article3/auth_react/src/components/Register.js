import {useState} from 'react'
import '../css/forms.css'
import {auth} from '../firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './AuthContext'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    

      <div className='center' >
          <div class='bold-line'></div>
              <div class='container'>
                <div class='window'>
                  <div class='overlay'></div>
                  <div class='content'>
                    <div class='welcome'>Hello There!</div>
                    <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>

                    <div class='input-fields'>
                    
                        <form onSubmit={register} name='registration_form'>
                                    <input class='input-line full-width'
                                      type='email' 
                                      value={email}
                                      placeholder="Enter your email"
                                      required
                                      onChange={e => setEmail(e.target.value)}/>

                                    <input 
                                      class='input-line full-width'
                                      type='password'
                                      value={password} 
                                      required
                                      placeholder='Enter your password'
                                      onChange={e => setPassword(e.target.value)}/>

                                      <input 
                                      class='input-line full-width'
                                      type='password'
                                      value={confirmPassword} 
                                      required
                                      placeholder='Confirm password'
                                      onChange={e => setConfirmPassword(e.target.value)}/>
                                      
                                      <br />
                                      <br />
                                      <br />

                          
                           <div><button  class='ghost-round full-width' type='submit'>Register</button></div>
                         </form>
                    </div>
                    
       <div class='spacing'>Already have an account?   <span class='highlight'><Link to='/login'>login</Link></span></div>       
               
                  </div>
                </div>
              </div>

      </div>

   
   
      
   
  )
}

export default Register