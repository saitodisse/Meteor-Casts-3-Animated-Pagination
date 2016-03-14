Meteor.publish("tweets", (limit, startAt) => {
  new SimpleSchema({
    limit: {type: Number},
    startAt: {type: Date}
  }).validate({limit, startAt})

  return Tweets.find({created_at: {$lte: startAt}}, {sort: {created_at: -1}, limit: limit})
})