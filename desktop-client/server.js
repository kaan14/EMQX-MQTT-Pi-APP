const mqtt = require('mqtt'); 



//ip and port connection 
const broker = {
    port: '1883',
    host: '192.168.0.20'
}; 
const client = mqtt.connect(broker); 


client.on('connect', () =>{
    client.subscribe('pub/data'); 
    console.log("\r\n desktop-client mqtt is connected to broker \r\n"); 
}); 

client.on('message', (topic, message) => {

    if(topic == 'pub/data'){
        console.log('data from pi-client: ' + message.toString()); 
        client.publish('sub/ack', 'Ack: Success ....!!!'); 
        console.log('Ack: data sent to pi-client success'); 
    }; 



}); 
