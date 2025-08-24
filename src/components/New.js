import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const New = (props) => {
  const [artical, setArtical] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [TotalArticls, setTotalArticls] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [hasMore, setHasMore] = useState(true); // Track if more data is available

  const updateNews = async () => {
    props.setProgress(10);

    try {
      let url = '';
      
      // Use different endpoints for crypto vs regular news
      if (props.category === 'crypto') {
        // NewsData.io Crypto endpoint
        url = `https://newsdata.io/api/1/crypto?apikey=${props.apiKey}`;
      } else {
        // NewsData.io Latest news endpoint
        url = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}`;
        
        // Add category if not general
        if (props.category && props.category !== 'general') {
          url += `&category=${props.category}`;
        }
      }
      
      // Add country if specified (not applicable for crypto endpoint)
      if (props.country && props.category !== 'crypto') {
        url += `&country=${props.country}`;
      }
      
      // Add size parameter (articles per page)
      url += `&size=${props.pagesize}`;
      
      // Add image filter to get articles with images
      url += `&image=1`;
      
      setLoading(true);
      console.log('Fetching NewsData.io URL:', url);
      
      let data = await fetch(url);
      let parsData = await data.json();
      
      console.log('NewsData.io API Response:', parsData);
      
      if (parsData.status === 'success') {
        setArtical(parsData.results || []);
        setTotalArticls(parsData.totalResults || parsData.results?.length || 0);
        
        // Set nextPage and hasMore status
        if (parsData.nextPage) {
          setNextPage(parsData.nextPage);
          setHasMore(true);
        } else {
          setNextPage(null);
          setHasMore(false); // No more data available
        }
        
        console.log('NextPage token:', parsData.nextPage);
        console.log('Has more data:', parsData.nextPage ? true : false);
      } else {
        console.error('API Error:', parsData);
        setArtical([]);
        setTotalArticls(0);
        setNextPage(null);
        setHasMore(false);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setArtical([]);
      setTotalArticls(0);
      setNextPage(null);
      setHasMore(false);
    }
    
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - DailyPulse`;
    // Reset all states when country or category changes
    setPage(1);
    setNextPage(null);
    setHasMore(true);
    setArtical([]);
    updateNews();
  }, [props.country, props.category]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      let url = `https://newsapi.org/v2/top-headlines?`;
      if (props.country) {
        url += `country=${props.country}&`;
      }
      url += `category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pagesize}`;
      
      let data = await fetch(url);
      let parsData = await data.json();
      
      if (parsData.status === 'ok' && parsData.articles) {
        setArtical(artical.concat(parsData.articles || []));
        setTotalArticls(parsData.totalResults || 0);
      }
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  return (
    <>
      <h1 className="main-heading">
        Top {props.category} Headlines
      </h1>
      {loading && <Spinner />}

      {!loading && artical.length === 0 && (
        <div className="no-articles-container text-center" style={{marginTop: '50px', padding: '40px'}}>
          <h3 style={{color: '#6b7280', marginBottom: '20px'}}>
            No articles found for this category.
          </h3>
          <p style={{color: '#9ca3af', fontSize: '1.1rem', marginBottom: '10px'}}>
            This could be due to:
          </p>
          <ul style={{color: '#9ca3af', fontSize: '0.95rem', listStyle: 'none', padding: 0}}>
            <li>• No recent articles available for this category/country</li>
            <li>• API rate limit reached</li>
            <li>• Try selecting a different category or country</li>
          </ul>
        </div>
      )}

      <InfiniteScroll
        dataLength={artical.length}
        next={fetchMoreData}
        hasMore={hasMore && artical.length > 0}
        loader={<Spinner />}
        endMessage={
          !loading && artical.length > 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
              <h4>🎉 You've reached the end!</h4>
              <p>No more articles available for this category.</p>
            </div>
          ) : null
        }
      >
        <div className="news-container">
          <div className="row news-row">
            {artical.map((e, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 news-card-wrapper">
                  <NewsItem
                    title={e.title ? e.title.slice(0, 80) : ""}
                    description={e.description ? e.description.slice(0, 120) : ""}
                    ImageUrl={e.image_url}
                    NewsUrl={e.link}
                    author={e.creator ? e.creator[0] : null}
                    time={e.pubDate}
                    source={e.source_id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

New.defaultProps = {
  country: "us",
  pagesize: 10,
  category: "general",
  TotalArticls: 0,
};

New.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default New;