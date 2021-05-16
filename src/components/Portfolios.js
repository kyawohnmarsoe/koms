import React from 'react'

const Portfolios = ({koms}) => {
    return (
       <>
         <div className="portfolios py-5">
       <div className="container">
           <h3 className="text-center">Portfolios</h3>
           <div className="project py-5 py-md-0">
            <div className="project-img px-5 p-md-5">
                <a target="_blank" href="http://www.pokka.com.sg/"><img src="assets/img/portfolios/pokka.jpg" alt="POKKA" className="img-fluid"/></a>      
            </div>
            <div className="project-text  px-5 p-md-5 pt-3">
                <h5>POKKA</h5>
                <p>POKKA is a leading total beverage company with No.1 standing in various categories in the ready-to-drink market.
                </p>
                <p> <a target="_blank" href="http://www.pokka.com.sg/">http://www.pokka.com.sg/</a></p>
                <p>Front-End : Bootstrap, Javascript</p>
                <p>Back-End : Laravel</p>
            </div>
        </div>
        <div className="clearfix"></div>
        <div className="project project-bg py-5 py-md-0">
         <div className="project-img2 px-5 p-md-5 ">
            <a target="_blank" href="https://kuhlmann.com.sg/"><img src="assets/img/portfolios/kuhlmann.jpg" alt="Kuhlmann" className="img-fluid"/></a>                                  
         </div>
         <div className="project-text2  px-5 p-md-5 pt-3">
             <h5>Kuhlmann International</h5>
             <p>Founded in Germany in 1923, Kuhlmann has at least 97 years of experience in craftsmanship and innovation. With a breath of fresh air to renovation, they extract the industry-leading standards of German manufacturing and Italian design to suit the needs and desires of their clients. Currently, Kuhlmann offers a total residential and commercial solution to clients from all over the world.
             </p>
             <p> <a target="_blank" href="https://kuhlmann.com.sg/">https://kuhlmann.com.sg/</a></p>
                <p>CMS : Wordpress</p>
         </div>
         </div>
         <div className="clearfix"></div>
           <div className="project py-5 py-md-0">
               <div className="project-img px-5 p-md-5">
                   <a target="_blank" href="https://www.yeos.com.sg"><img src="assets/img/portfolios/yeosome.jpg" alt="Yeosome" className="img-fluid"/></a>                                  
               </div>
               <div className="project-text  px-5 p-md-5 pt-3">
                   <h5>Yeo's</h5>
                   <p>Yeo Hiap Seng Limited is a Singaporean beverage company. It operates as an investment holding company as well as a drink manufacturer in Singapore and Malaysia.
                   </p>
                   <p> <a target="_blank" href="https://www.yeos.com.sg">https://www.yeos.com.sg</a></p>
                   <p>Front-End : Bootstrap</p>
                   <p>Back-End : CodeIgniter</p>
               </div>
           </div>
           <div className="clearfix"></div>
       </div>
   </div>
       
       </>
    )
}

export default Portfolios
