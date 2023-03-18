import {Link} from 'react-router-dom';
const PageNotFound =() => {
    return(
       
            
        <div className='text-center'>
            <div>
                <h2 className=' display-4'>Page Not Found</h2>
                <p>There is no such a page.</p>
            </div>
              

            <div>
                <div>
                <Link to='/'><button className="btn btn-outline-warning me-2 " type="button">Back To Login</button></Link> 
                </div>
               
            </div>
      
        
 
      </div> 
     
    )

}
export default PageNotFound ;