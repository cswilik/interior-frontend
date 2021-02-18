import React from 'react'
import ParksProImag from '../../parks-project.jpg'
import SubParPoster from '../../yellowstone.jpg'

function RetailPage() {
 return(
        <>
       <h1 className="trip-title">Shop with our Sponsors!</h1>
       <hr className="hr-line"></hr>
       <div className="retail-div">
              <div className="parks-project-div">
                     <h3>Check out Parks Project for all your cool park gear:</h3>
                     <img className="project-img" src={ParksProImag} alt="parks project logo"/><br/>
                     <a className="link-styling" href='https://www.parksproject.us/'>Parks Project</a>
              </div>
              <div className="parks-project-div">
                     <h3>Had a subpar experience? Grab a poster:</h3>
                     <img  className="project-img" src={SubParPoster} alt="subpar poster"/><br/>
                     <a className="link-styling" href='https://subparparks.com/'>Subpar Parks Tumblr</a> ||
                     <a className="link-styling" href='https://ambersharedesign.com/collections/frontpage/products/subpar-parks-national-park-one-star-review-print?variant=34623788449948'> Purchase A Poster</a>
               </div>
       </div>
       </>
)}

export default RetailPage;