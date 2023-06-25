import React from 'react'


function Info(){
    return(
        <div className='infoContainer'>
            <img src='./images/self.JPG' alt="" />
            <h1>Miguel C</h1>
            <h3 className='occupation'>Frontend Developer</h3>
            <a href='index.html'>My Website</a>
            <div className='btnContainer'>
                <button><a href = "mailto: miguel.ganoza@yahoo.com">📧 Email</a></button>
            </div>
        </div>
    )
}
 
export default Info