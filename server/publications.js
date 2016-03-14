Meteor.publish("tweets", () => {
  return Tweets.find({}, {sort: {created_at: -1}})
})