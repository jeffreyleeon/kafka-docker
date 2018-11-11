var kafka = require('kafka-node');

var consumerGroup = new kafka.ConsumerGroup({
  kafkaHost: 'localhost:9092,localhost:9093',
  fromOffset: 'latest',
  commitOffsetsOnFirstJoin: true,
  groupId: 'ExampleTestGroup'
}, ['test']);

consumerGroup.on('message', function (message) {
    console.log(message);
});
