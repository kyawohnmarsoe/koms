import React from 'react'

const Activities = ({koms}) => {
    const modalHandler=(target)=>{
        console.log(target)
    }
    return (
        <>
            <div className="blog py-5">
                <h3 className="text-center" >Activities</h3>
                        <div className="row py-3">
                            { koms.activities.map((activity,index)=>(
                                    <div key={index} className="col-sm-4 post py-3 mb-5 mb-sm-0">
                                    <img src={activity.image} alt="" className="img-fluid"/>
                                    <div className="post-title text-center " onClick={()=>modalHandler(activity.target)} data-toggle="modal" data-target={activity.target}>
                                        <h5>{activity.title1} 
                                            <br/>
                                            <span>{activity.title2} </span>
                                        </h5>
                                    </div>
                                </div> ))}                    
                        </div>     
                </div>
        </>
    )
}

export default Activities
