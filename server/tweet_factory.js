import Tweets from '../lib/tweets';

const insertNewTweet = (randomDates = false) => {
  const newTweet = {
    content: faker.hacker.phrase(),
    created_at: randomDates ? faker.date.recent(50) : new Date(),
    likes: faker.random.number(randomDates ? 100 : 10),
    retweets: faker.random.number(randomDates ? 40 : 4),
    tweeter: {
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
    },
  };
  /**/console.log(`inserting new tweet from ${newTweet.tweeter.name}`);/* -debug- */
  Tweets.insert(newTweet);
};

const insertNewTweets = (times, randomDates = false) => {
  _.times(times, () => {
    insertNewTweet(randomDates);
  });
};

export { insertNewTweet, insertNewTweets };
