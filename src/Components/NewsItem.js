import React from 'react'
import LoadingBar from 'react-top-loading-bar'

const NewsItem =(props) => {
  
    let {title,description,imageUrl,newsUrl,author,date,source} =props;
    return (
      <div>
        <div className="card my-3">
  <img src={imageUrl} className="card-img-top" alt="NEWS!!!"/>
  <div className="card-body">
  <span className="badge badge-pill badge-danger">{source}</span>
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
