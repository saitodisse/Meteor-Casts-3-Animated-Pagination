import Tweets from '../lib/tweets';
import { check } from 'meteor/check';

Meteor.publish('tweets', (limit, startAt) => {
  check(limit, Number);
  check(startAt, Date);

  new SimpleSchema({
    limit: { type: Number },
    startAt: { type: Date },
  }).validate({ limit, startAt });

  return Tweets.find({
    created_at: { $lte: startAt } },
    { sort: { created_at: -1 },
    limit,
  });
});
