var mandrill = require('mandrill-api');

var mandrill_client = new mandrill.Mandrill('T8HrN10GxIeYda9cfxjzXw');
const sendTheMail= () =>{
  mandrill_client.messages.send({
      "message": {
          "from_email": "robert.ramirez@omni.cr",
          "from_name": "Robert",
          "to":[{"email": "gabohernand123@gmail.com", "name": "Gabriel"}], // Array of recipients
          "subject": "Test Email Mandrill",
          "text": "node email test" // Alternatively, use the "html" key to send HTML emails rather than plaintext
      }
  });
}

sendTheMail();