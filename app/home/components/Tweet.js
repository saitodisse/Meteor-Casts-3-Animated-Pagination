import React, { PropTypes } from 'react';
import moment from 'moment';

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet" key={this.props.tweet._id}>
        <div className="avatar">
          <img src={this.props.tweet.tweeter.avatar} alt={this.props.tweet.tweeter.name}/>
        </div>

        <div className="content">
          <div className="header">
            <p>{this.props.tweet.tweeter.name}
              <span className="value">
                {this.twitterHandle(this.props.tweet.tweeter.name)}
              </span>
            </p>

            <p><span className="value">{moment(this.props.tweet.created_at).fromNow()}</span></p>
          </div>
          <div className="main">
            <p>{this.props.tweet.content}</p>
          </div>
          <div className="meta">
            <p>
              <i className="fa fa-heart"> </i>
              <span className="value">{this.props.tweet.likes}</span>
            </p>
            <p>
              <i className="fa fa-retweet"> </i>
              <span className="value">{this.props.tweet.retweets}</span>
            </p>
          </div>

        </div>
      </div>
    );
  }
  twitterHandle(name) {
    return `@${name.replace(' ', '').toLowerCase()}`;
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object,
};

export default Tweet;
