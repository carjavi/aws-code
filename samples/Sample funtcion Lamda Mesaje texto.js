'use strict';

const AWS = require('aws-sdk');

const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });
const PHONE_NUMBER = '1-xxx-xxx-xxxx'; // change it to your phone number

exports.handler = (event, context, callback) => {
    
    const momMessages = ['Mom message one','Mom message two'];
    const dadMessages = ['Dad message one','Dad message two'];
    const siblingMessages = ['Sibling message one','Sibling message two'];
    
    console.log('Received event:', event);

    console.log(`Sending SMS to ${PHONE_NUMBER}`);
    
    //uses randomizer to select one of the predefined messages
    var singleClick = momMessages[Math.floor(Math.random()*momMessages.length)];
    var doubleClick = dadMessages[Math.floor(Math.random()*dadMessages.length)];
    var longClick = siblingMessages[Math.floor(Math.random()*siblingMessages.length)];
    var randomMessage = singleClick;
    
    if(event.clickType == "DOUBLE"){
        randomMessage = doubleClick;
    }
    if(event.clickType == "LONG"){
        randomMessage = longClick;
    }
    
    const params = {
        PhoneNumber: PHONE_NUMBER,
        Message: randomMessage,
    };
    // result will go to function callback
    SNS.publish(params, callback);
};