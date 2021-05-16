import React from 'react'

const Gallery = ({koms,children}) => {
    return (
        <>
            <div class="favorites py-5">
             <h3 class="text-center" >Gallery</h3>
            <div className="slider py-5">
                <div className="d-flex">  
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(0)"><img src="assets/img/thumbnail/0.jpg" alt=""  className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(1)"><img src="assets/img/thumbnail/1.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(2)"><img src="assets/img/thumbnail/viet1.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(3)"><img src="assets/img/thumbnail/bk2.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(4)"><img src="assets/img/thumbnail/4.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(5)" ><img src="assets/img/thumbnail/5.jpg" alt="" className="img-fluid"/></div>
                </div>
                <div className="d-flex">               
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(6)"><img src="assets/img/thumbnail/6.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(7)"><img src="assets/img/thumbnail/viet2.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(8)"><img src="assets/img/thumbnail/sg1.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(9)"><img src="assets/img/thumbnail/40.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(10)"><img src="assets/img/thumbnail/10.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(11)"><img src="assets/img/thumbnail/11.jpg" alt="" className="img-fluid"/></div>
                </div>
                <div className="d-flex">               
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(12)"><img src="assets/img/thumbnail/cam2.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(13)"><img src="assets/img/thumbnail/13.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(14)"><img src="assets/img/thumbnail/14.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(15)"><img src="assets/img/thumbnail/15.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(16)"><img src="assets/img/thumbnail/16.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(17)"><img src="assets/img/thumbnail/17.jpg" alt="" className="img-fluid"/></div>
                </div>
                <div className="d-flex">   
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(18)"><img src="assets/img/thumbnail/cam1.jpg" alt="" className="img-fluid"/></div>            
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(19)"><img src="assets/img/thumbnail/19.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(20)"><img src="assets/img/thumbnail/20.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(21)"><img src="assets/img/thumbnail/21.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(22)"><img src="assets/img/thumbnail/22.jpg" alt="" className="img-fluid"/></div>
                        <div data-toggle="modal" data-target="#exampleModal" onClick="Myslider(23)"><img src="assets/img/thumbnail/bk1.jpg" alt="" className="img-fluid"/></div>
                </div>
        </div>
            <div className="container">
                {children}
            </div>
        </div>
        </>
    )
}

export default Gallery
