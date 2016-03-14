import Tweets from '../lib/tweets'
import {insertNewTweet, insertNewTweets} from './tweet_factory'

Meteor.startup(() => {
  if (Tweets.find().count()  === 0) {
    insertNewTweets(1000, true)
  }
})