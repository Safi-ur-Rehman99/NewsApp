import React from 'react';

const NewsItem = (props) => {
  let { title, description, ImageUrl, NewsUrl, author, time, source } = props;

  return (
    <div className="news-card card">
      <div className="source-badge">
        {source || 'DailyPulse'}
      </div>
      
      <img 
        src={ImageUrl && ImageUrl !== 'null' ? ImageUrl : "/images/default-news-image.png"} 
        className="card-img-top" 
        alt="News thumbnail"
        onError={(e) => {
          e.target.src = "/images/default-news-image.png";
        }}
      />
      
      <div className="card-body">
        <h5 className="card-title">{title || 'No Title Available'}</h5>
        <p className="card-text">{description || 'No description available for this article.'}</p>
        <p className="card-meta">
          <strong>By:</strong> {author || "DailyPulse Team"} <br />
          <strong>Published:</strong> {time ? new Date(time).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }) : 'Recently'}
        </p>
        <a 
          href={NewsUrl || '#'} 
          target="_blank" 
          rel="noreferrer" 
          className="btn btn-news"
          aria-label={`Read more about ${title}`}
          onClick={(e) => {
            if (!NewsUrl || NewsUrl === '#') {
              e.preventDefault();
              alert('Article link not available');
            }
          }}
        >
          Read Full Story
        </a>
      </div>
    </div>
  );
};

export default NewsItem;