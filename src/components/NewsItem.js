import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let{title,description,ImageUrl,NewsUrl,author, time,source}=this.props;

    return (
      <div className='container my-5 mx-5'>
    <div className="card">
    <img src={ImageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <span className="position-absolute top-0 z-1 p-2 translate-middle badge rounded-pill bg-danger" style={{left:'90%'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unkown"} on {new Date(time).toUTCString()}</small></p>
    <a href={NewsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Learn more</a>
  </div>
</div>

      </div>
    )
  }
}
