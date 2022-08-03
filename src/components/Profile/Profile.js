import React from 'react'
import './Profile.css'
import arrowUp from '../../assets/Images/arrowUp.svg'
import todo from '../../assets/Images/todo.svg'
import calender from '../../assets/Images/calender.svg'
import reminders from '../../assets/Images/reminders.svg'
import planning from '../../assets/Images/planning.svg'
import image1 from '../../assets/Images/image1.png'
import image2 from '../../assets/Images/image2.png'
import audiophile from '../../assets/Images/audiophile.svg'
import meet from '../../assets/Images/meet.svg'
import databiz from '../../assets/Images/databiz.svg'
import maker from '../../assets/Images/maker.svg'
const Profile = () => {

  return (
 <>
    <nav className ="navbar navbar-expand-lg bg-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">snap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " src={arrowUp} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features  <img id='arrow' src={arrowUp} alt="" />
          </a>
          <ul className="dropdown-menu active">
            <li><a className="dropdown-item" href="#"> <img src={todo} alt="" /> <span id='dropdown-text'>Todo List</span> </a></li>
            <li><a className="dropdown-item" href="#">  <img src={calender} alt="" /><span id='dropdown-text'> Calendar</span> </a></li>
            <li><a className="dropdown-item" href="#"> <img src={reminders} alt="" /> <span id='dropdown-text' >  Reminders </span> </a></li>
            <li><a className="dropdown-item" href="#"> <img src={planning} alt="" /> <span id='dropdown-text' >Planning</span> </a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company  <img id='arrow' src={arrowUp} alt="" />
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#" id='dropdown-text'>History</a></li>
            <li><a className="dropdown-item" href="#" id='dropdown-text'>Our Team</a></li>
           
            <li><a className="dropdown-item" href="#" id='dropdown-text'>Blog</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search" style={{padding:'2rem'}}>
      <button className="btn btn-outline-success" id="myBtn1" type="submit">Login</button>
        <button className="btn btn-outline-success" id="myBtn2" type="submit">Register</button>
      </form>
    </div>
  </div>
</nav>

<div className="main-container">
  <div className="container row gx-4 justify-content-center">
 
    <div className="context  col-md-6">
<h1>
  Make <br id='br-head'/>
  Remote Work
</h1>

<p >
<span>
  Get your team in sync, no matter your location . 
  Streamline processes, create team rituals, and 
  watch productivity soar.
</span> 

</p>
<br />
<br />
<button className="btn btn-outline-success" id="myBtn2" type="submit" style={{float:'left'}}>Learn more</button>
<br />
<br />
<br />
<br />
<div className="logos d-flex">
<div className="logo-imgs">
<img src={databiz} alt="" className='img-fluid' />
  <img src={audiophile} alt="" className='img-fluid' style={{padding:'2rem'}} /> 
  <img src={maker} alt="" className='img-fluid' style={{padding:'2rem'}} />
  <img src={meet} alt="" className='img-fluid' />
  </div>

</div>
    </div>
  
  <div className="img  col-md-6">
<div className="img-1"><img src={image1} alt="" className='img-fluid ' width={'500px'} /></div>

<div className="img-2"><img src={image2} alt="" className='img-fluid ' /></div>


  </div>


  </div>
</div>

 </>
    )
}

export default Profile