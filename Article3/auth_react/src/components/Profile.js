import '../css/profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../firebase'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
        <div className='center'>
          

        <div className='profile'>
        <div class="card" style={{width: "18rem; "}}>
          <h1 className=' text-center'>Profile</h1>
          <center><img className="card-img-top  profile-img  p-1 "  style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg" alt="Card image cap" /></center>

           <div className="card-body">
            <p className="card-text"></p>
            <p><strong>Email: </strong>{currentUser?.email}</p>
      
            <p>
              <strong>Email verified: </strong>
              {`${currentUser?.emailVerified}`}
            
            </p>

          
          
          <button className=' btn btn-outline-primary' onClick={() => signOut(auth)} >Sign Out</button>
         
        </div>
         
        </div>

        </div>
        </div>

  )
}

export default Profile
