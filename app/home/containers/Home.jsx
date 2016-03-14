import React from 'react'
import {composeWithTracker} from 'react-komposer'
import Home from '../components/Home'
import Tweets from '../../../lib/tweets'

const RECORDS_PER_PAGE = 5
const startAt = new Date()
const pageNumber = new ReactiveVar(1)
const loadMore = () => {
  pageNumber.set(pageNumber.get() + 1)
}

function compose(props, onData) {
  var sub = Meteor.subscribe("tweets", RECORDS_PER_PAGE * pageNumber.get(), startAt)
  if(sub.ready()){
    const tweets = Tweets.find({}, {sort: {created_at: -1}}).fetch();

    onData(null, {tweets, loadMore})
  }
}

export default composeWithTracker(compose)(Home)
