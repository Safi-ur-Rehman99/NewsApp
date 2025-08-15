import React from 'react'
 const NewsItem = (props) => {
 
    let { title, description, ImageUrl, NewsUrl, author, time, source } = props;

    return (
      <div className='container my-5 mx-5'>
        <div className="card " >
          <div className="d-flex absolute justify-content-end " style={{ position: "absolute", zIndex: 1, right: 0 }}>
            <span className="badge rounded-pill bg-danger" >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
             </div>
          <img src={ImageUrl? ImageUrl: "/images/default-news-image.png"} className="card-img-top" alt="..." />
         
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unkown"} on {new Date(time).toUTCString()}</small></p>
            <a href={NewsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Learn more</a>
          </div>
        </div>

      </div>
    )
  
}
export default NewsItem;