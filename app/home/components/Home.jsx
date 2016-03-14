import React from 'react'
import Tweet from './Tweet'

class Home extends React.Component {
  render() {
    return (
      <div className="tweets-container">
        <div className="tweets">
          {this.props.tweets.map((tweet) => {
            return (
              <Tweet tweet={tweet}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home