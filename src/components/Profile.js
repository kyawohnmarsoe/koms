import React from 'react'

const Profile = ({koms}) => {
    return (
        <>
            <div className="home py-5" >       
                <div className=" container text-center ">
                    <div className="text-right"> 
                        <a href="resume.html" target="_blank"><button type="button" className="btn">Go To Resume</button></a>
                        </div>
                        <div className="profile m-auto p-3 ">
                            <img src={koms.profile.pic} alt="Profile" className="rounded-circle img-fluid" />
                        </div>
                        <h1 className="d-none d-md-block">{koms.profile.name}</h1>
                        <h1 className="d-block d-md-none">{koms.profile.mobile_name}</h1>
                        <h6>{koms.profile.title}</h6>
                        <h6>{koms.profile.country}</h6> 
                        <div className="social">
                            { koms.profile.social.map(soc=>(
                                    <a href={soc.link} target="_blank" rel="noreferrer" key={soc.name}><img src="../assets/img/icon/001-facebook.svg" alt={soc.name} className="img-fluid m-4" /></a>
                                ))}
                                
                        </div>
                        <p className="summary mx-auto">{koms.profile.summary}</p>
                        <div className="education">
                            { koms.profile.education.map((edu,index)=>(
                                <h6 className="p-2" key={index}> <img src="assets/img/icon/mortarboard.svg" alt="" className="img-fluid" /> {edu}</h6>
                                ))}
                         </div>
                </div>
            </div>
        </>
    )
}

export default Profile
