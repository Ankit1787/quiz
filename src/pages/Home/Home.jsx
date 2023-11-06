import React from 'react'
import { Wrapper } from './Utils'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <>
     <Wrapper>
        <div className="home-body">
            <div className="home-heading">
                <h1>Welcome to the <span>Smart Quiz</span> Tracker</h1>
            
          
               
            </div>
            <button className='btn' onClick={()=>navigate(`/quiz/new`)}>
                  Start
                </button>
            
        </div>
     </Wrapper>
    
    </>
  )
}

export default Home