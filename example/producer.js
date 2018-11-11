var kafka = require('kafka-node');

var Producer = kafka.Producer;
var client = new kafka.KafkaClient({kafkaHost: 'localhost:9092,localhost:9093'});
var producer = new Producer(client);

function send() {
  var message = new Date();
  var payloads = [
    {
      topic: 'test',
      messages: [message.toString()]
    }
  ];
  producer.send(payloads, () => {
    console.log('sent ', payloads);
  });
}

producer.on('ready', () => {
  console.log('producer ready');
  setInterval(() => {
    send();
  }, 3000);
});
