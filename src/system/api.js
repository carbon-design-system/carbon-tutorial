let request = require('request');

const credentials = {
  username: 'hugo',
  password: 'dh4hsi2pk5kcu48dicklei4c2oop3',
  url: 'https://common-api.w3ibm.mybluemix.net/',
};

// THIS IS AN EXAMPLE, HOW TO SEND MESSAGE TO HUGO CHATBOT.
// RESPONSE RETURNS YOU MANY DIFFERENT PARAMS, THE MOST IMPORTANTA ARE:
// discovery_answer - answer to the question from our knowledge base.
// answer - answer from Watson Assistant to not knowledge related user input like 'Hello', 'Who are you?', 'How are you?.
// questionId - the generated ID which will be used for questions rating.
// answerId - the generated ID which will be used for questions rating.
// topClass - the knowledge base which will be used for questions rating.
// token - a token which keeps track of conversation history. Please use it and send it as a parameter when received.

// Below is a working example:

sendMessageToHugo('what is prom?', 'paul.dolan1@ibm.com', '', function(
  response
) {
  console.log('Message received:');
  let message;
  let questionId = response.questionID;
  let answerId = response.answerID;
  let topClass = response.topClass;
  let token = response.token;

  if (response.discovery_answer) {
    // we user enableImageZoom to update <img> tags so that they could be zoomed from UI via bootstrap.
    message = enableImageZoom(response.discovery_answer);
  } else if (response.answer) {
    message = response.answer;
  }

  console.log(message);
});

// THIS IS AN EXAMPLE, HOW YOU SHOULD RATE ANSWERS.
// THE RATING SCALE IS 1 OR 0.
// 1 - LIKE, 0 - DISLIKE.
// JUST PASS THE  rating, questionId, answerId, topClass retrieved from sendMessageToHugo() to rateAnswer() function and you will be able to rate.

rateAnswer(1, 'UQ-00006-000021395', 'KB-00006-000000353', 'prom', function(
  response
) {
  console.log(response);
});

function getRatingEndpoint(instance) {
  return (
    'https://cognitive-advisor-help.w3ibm.mybluemix.net/api/v3/external/instances/' +
    instance +
    '/rate'
  );
}

function getHeaders() {
  return {
    Authorization:
      'Basic ' +
      new Buffer(credentials.username + ':' + credentials.password).toString(
        'base64'
      ),
  };
}

function rateAnswer(rating, questionId, answerId, topClass, callback) {
  console.log('Rating Hugo answer...');
  console.log('questionId=%s', questionId);

  const form = {
    userQuestionId: questionId,
    answerId: answerId,
    evaluation: rating,
  };

  let url = getRatingEndpoint(topClass);
  const headers = getHeaders();

  makePostRequest(url, form, headers, function(err, response) {
    if (err) throw err;
    console.log('Rating Hugo answer... Done.');
    callback(response);
  });
}

function sendMessageToHugo(question, email, token, callback) {
  console.log('Sending message to Hugo...');
  console.log('question=%s', question);

  const url = credentials.url;
  const form = {
    question: question,
    email: email,
    system: 'hugo',
    token: token,
  };

  const headers = getHeaders();

  makePostRequest(url, form, headers, function(err, response) {
    if (err) throw err;
    console.log('Sending message to Hugo... Done.');
    callback(response);
  });
}

function enableImageZoom(answer) {
  let imageNeedle = '<img ';
  let addClass = "class='popImage'";
  return answer.replace(new RegExp(imageNeedle, 'g'), imageNeedle + addClass);
}

// We use this in frontend to show time.
function getTimeforChatbot() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return 'Today at ' + strTime;
}

// You can get uuid from W3 api.
function getPictureURL(uid) {
  let rootURL =
    'https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/';
  return rootURL + uid + '?s=90';
}

function makePostRequest(url, form, headers, callback) {
  console.log('Generating Post request.');
  console.log('URL: ' + url);
  console.log('Body: %j', form);
  console.log('Headers: %j', headers);

  request.post({ url: url, form: form, headers: headers }, function(
    error,
    response,
    body
  ) {
    callback(error, JSON.parse(body));
  });
}
