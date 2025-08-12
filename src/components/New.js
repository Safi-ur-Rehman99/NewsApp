import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class New extends Component {

  artical = []

  static defaultProps = {
    country: 'us',
    pagesize: 7,
    category: 'general',
    TotalArticls: 0
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      artical: this.artical,
      loading: true,
      page: 1
    }
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
  }

  async updateNews() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3296fae0d3c433e91c9e18b49b6a30c&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      artical: parsData.articles,
      TotalArticls: parsData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();

  }

  handlePreviousClick = async () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
      this.updateNews();

    }
  }


  handleNextClick = async () => {

    const maxPage = Math.ceil(this.state.TotalArticls / this.props.pagesize);
    console.log("Total Articles:", this.state.TotalArticls);
    console.log("Max Page:", maxPage);
    console.log("Current Page:", this.state.page);
    if (this.state.page < maxPage) {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();

    } else {
      alert("No more news to show");
    }
  }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a3296fae0d3c433e91c9e18b49b6a30c&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      artical: this.state.artical.concat(parsData.articles),
      TotalArticls: parsData.totalResults,
 
    });

  };

  render() {
    console.log("Articles on this page:", this.state.artical);
    console.log("Number of articles:", this.state.artical.length);
    return (
      <>
        <h1 className="text-center">Top {this.props.category} headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.artical.length}
          next={this.fetchMoreData}
          hasMore={this.state.artical.length < this.state.TotalArticls}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.artical.map((e, index) => {
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
}
