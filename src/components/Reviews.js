import React,{ useState,useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import "./HeroStyle.css";
import rev from './user-data.js';



function Review(){
    const[review,setReview]=useState(rev);
    const[index,setIndex]=useState(0);

useEffect(() => {
    const lastIndex = review.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, review]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

    return(
      
        <section className="section">
        <div className="title">
            <h2> <span className="white">Reviews</span></h2>
        </div>
        <div className="section-center">
            {review.map((reviews,reviewsIndex)=>{
                const{id,image,title,description}=reviews;

                let position='nextSlide';
                if(reviewsIndex===index)
                {
                    position='activeSlide';
                }
                if(reviewsIndex===index-1 || index===0 && reviewsIndex===review.length-1)
                {
                    position='lastSlide';
                }
                return (
                  
            <article className={position} key={id}>
              <div >
              <img src={image} alt={title} className="person-img" /><br />
              <h3>{title}</h3>
              <br />
              <h5><p className="desc">{description}</p></h5>
              <br />
              </div>
            </article>
          );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
                 <FiChevronLeft /> </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
                  <FiChevronRight /></button>
        <br />
        </div> 
        </section>
    );
}

export default Review;