import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import newsDefault from './news-default.png'
import InfiniteScroll from 'react-infinite-scroll-component';



const News= (props)=> {

    
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setArticles] =useState([]);
    const [loading, setLoading] =useState(true);
    const [page, setPage] =useState(1);
    const [totalResults, setTotalResults] =useState(0);
    

    const updateNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      setLoading(true);
      let data = await fetch(url);
      let parsedData= await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);


    }

    useEffect( () => {
      document.title=`${capitalizeFirstLetter(props.category)}- NewsKangaroo`
      updateNews();

    },[])

    
   
   
    const fetchMoreData = async () => {
        
          
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
          setPage(page+1)
            let data = await fetch(url);
            let parsedData= await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            
          
       
      };
  
    return (
      <div className="container my-3">
        <h1 style={{marginTop : "90px", marginBottom: "30px"}} className="text-center">Top HeadLines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
        <div className="row">
            
            {articles.map((element)=> {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} source={element.source.name} date={element.publishedAt} description ={element.description?element.description.slice(0,88):""} author={element.author?element.author:"unknown"} imageUrl={element.urlToImage?element.urlToImage:newsDefault} newsUrl={element.url}/>
            </div>
            })}
           
        </div>
        </div>
        </InfiniteScroll>
       
      </div>
    )
  
}

News.defaultProps = {
  country : "in",
  pageSize :8,
  category : 'general',
  apiKey : "9f5d0153e76c47c08b63c52966f2f681"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string
}

export default News
