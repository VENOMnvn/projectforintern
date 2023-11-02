const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost',(err,connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }
        
        let queuename = "messageQueue";
        let message = "TestServer by Naveen Chaudhary";

        channel.assertQueue(queuename,{durable:false}); 

        channel.consume(queuename,(msg)=>{
            console.log(message);
            channel.ack(msg);
        });

    })
})