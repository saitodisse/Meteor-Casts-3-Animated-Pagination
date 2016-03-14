import React from 'react'
import {composeWithTracker} from 'react-komposer'
import Home from '../components/Home'
import Tweets from '../../../lib/tweets'


function compose(props, onData) {
  var sub = Meteor.subscribe("tweets")
  if(sub.ready()){
    const tweets = Tweets.find({}, {sort: {created_at: -1}}).fetch();

    onData(null, {tweets})
  }
}

export default composeWithTracker(compose)(Home)
