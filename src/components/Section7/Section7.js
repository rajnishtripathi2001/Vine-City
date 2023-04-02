import {React,useEffect, useState} from 'react'
import axios from 'axios'
import './Section7.css'

const Section7 = () => {

  const [data, setData] = useState([])

  const getNews = async()=>{
    
    await axios.get("https://vine-city-api.up.railway.app/vc/news/")
      .then((res) => {
        setData(res.data.news_list);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    getNews();
  },[])

  return (
    <div className='sec-7'>
        <h1>Latest News</h1>
        <div className='news-grid'>

          {data.map((news)=>{
            return(
                <div className='news-banner' style={{backgroundImage: `url(${news.thumbnail})`,backgroundSize:'cover'}}> 
                <p>{news.title}</p>
                <div className='btn-container'>
                  <button>&gt;</button>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}
export default Section7;
