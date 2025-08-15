import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const New = (props) => {


  const [artical, setArtical] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [TotalArticls, setTotalArticls] = useState(0)

    
  

   const updateNews=async() =>{
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsData = await data.json();
    setArtical(parsData.articles);
    setTotalArticls(parsData.totalResults);
    setLoading(false);

  
    props.setProgress(100);
  }

  useEffect(() => {
document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`;
    updateNews();
  }, []);


  const fetchMoreData = async () => {
    const nextPage = page + 1;
     setPage(nextPage);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsData = await data.json();
    setArtical(artical.concat(parsData.articles));
    setTotalArticls(parsData.totalResults);

  };



    return (
      <>
        <h1 className="text-center" style={{marginTop:'90px'}}>Top {props.category} headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={artical.length}
          next={fetchMoreData}
          hasMore={artical.length < TotalArticls}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {artical.map((e, index) => {
                return <div key={index} className="col-md-4">
                  <NewsItem title={e.title ? e.title.slice(0, 48) : ""} description={e.description ? e.description.slice(0, 88) : ""} ImageUrl={e.urlToImage} NewsUrl={e.url} author={e.author} time={e.publishedAt} source={e.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>

      </>
    );
}


  New.defaultProps = {
    country: 'us',
    pagesize: 7,
    category: 'general',
    TotalArticls: 0
  }

  New.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

export default New;