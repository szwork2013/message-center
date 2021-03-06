module.exports = {
  port: 20001,
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
  mongodb: process.env.NODE_ENV === 'development' ?
    'mongodb://127.0.0.1/message_center' :
    'mongodb://h1.mongo.nosql/message_center',
  pusher: 'tcp://127.0.0.1:20002',
  logDir: `${__dirname}/logs`,
};
