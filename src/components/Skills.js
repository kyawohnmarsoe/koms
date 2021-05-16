import React from 'react'

const Skills = ({koms}) => {
    return (
        <>
             <div className="services py-5">
                <div className="container text-center py-3">
                    <div className="row">
                        { koms.skills.map((skill,index)=>(
                            <div className="col-md-4 py-3" key={index}>
                            <div className="service-wapper px-3 py-5">
                                <h4>{skill.name}</h4>
                                <img src="assets/img/icon/001-responsive-design-symbol.svg" alt="" className="img-fluid"/>                       
                                <ul className="pt-3">
                                    { skill.data.map((dt,index)=>(<li key={index}>{dt}</li>)) }
                                </ul>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
