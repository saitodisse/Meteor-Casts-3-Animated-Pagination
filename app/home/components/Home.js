import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import ReactTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
  render() {
    return (
      <div className="tweets-container">
        <ReactTransitionGroup element="div"
                              className="tweets"
                              transitionName="tweets"
                              transitionEnterTimeout={500}
                              transitionLeaveTimeout={500}>

          {this.props.tweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet}/>
          ))}

        </ReactTransitionGroup>
        <div className="load-more-tweets">
          <button onClick={this.props.loadMore} className="btn">Load More</button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  tweets: PropTypes.array,
  tweet: PropTypes.object,
  loadMore: PropTypes.func,
};

export default Home;
