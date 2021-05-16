import React from 'react'

const Modal = ({modal}) => {
   
    return (
        <>
         <button data-toggle="modal" data-target="#seagamesModal">Click</button>
             <div className="modal fade" id={modal.id} tabIndex="-1" role="dialog" aria-labelledby={modal.label} aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">            
                  <div className="modal-body">
                          <div className="bd-example">
                                  <div id={modal.captionId} className="carousel slide" data-ride="carousel" data-interval="false" >
                                    <div className="carousel-inner">
                                      {modal.images.map((image,index)=>(
                                        <div className="carousel-item active" key={index}>
                                          <img src="http://127.0.0.1:5501/assets/img/activities/seagames/1.jpg" className="d-block" alt=""/>
                                        </div>
                                      ))}
                                    </div>
                                    <a className="carousel-control-prev" href={`#${modal.id}`} role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href={`#${modal.id}`} role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
            </div>
        </>
    )
}

export default Modal
