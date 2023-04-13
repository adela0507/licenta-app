import React,{ useState,useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import "./HeroStyle.css";
import data from './user-data';



function Review(){
    const[camin,setCamin]=useState(data);
    const[index,setIndex]=useState(0);

useEffect(() => {
    const lastIndex = camin.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, camin]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
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
            {camin.map((cazare,cazareIndex)=>{
                const{id,image,image2,title,description}=cazare;

                let position='nextSlide';
                if(cazareIndex===index)
                {
                    position='activeSlide';
                }
                if(cazareIndex===index-1 || index===0 && cazareIndex===camin.length-1)
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
              <img className="image2" src={image2} alt={title} />
              <br /> <br />
              </div>
            </article>
          );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
                 <FiChevronLeft /> </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
                  <FiChevronRight /></button>
        <br />
        </div> <br /><br /><br />
                <button>add a review</button>
        </section>
    );
}

export default Review;