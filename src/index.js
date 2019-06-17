import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//people=[60, 80, 40]
//stops=[2, 3, 5]
//totalFloors=5
//maxPeople=2
//maxWeight=200
//output = 5

window.stopsRemaining = function(
  people,
  stops,
  totalFloors,
  maxPeople,
  maxWeight
) {
  var stopCount = 0;
  var currentWeight = 0;
  var peopleCount = 0;

  //hash table of journeys to be made
  var nextStops = {};

  var letPersonIn = function(person) {
    if (person.destination < 1 || person.destination > totalFloors) {
      throw new Error('Invalid floor: ' + person.destination);
    }
    if (peopleCount < maxPeople) {
      let tempTotalWeight = currentWeight + person.weight;
      if (tempTotalWeight < maxWeight) {
        currentWeight = tempTotalWeight;
        peopleCount++;

        if (nextStops[person.destination]) {
          nextStops[person.destination].push(person);
        } else {
          nextStops[person.destination] = [person];
        }

        console.log(
          'Added: ' + person.weight + 'kg for floor: ' + person.destination
        );
        return true;
      } else {
        console.log('Lift at ' + maxWeight + 'kg capacity');
      }
    } else {
      console.log('Lift at ' + maxPeople + ' person capacity');
    }
    return false;
  };

  var letPersonOut = function(person) {
    currentWeight -= person.weight;
    peopleCount--;
    console.log(
      'Removed: ' + person.weight + 'kg for floor: ' + person.destination
    );
  };

  var letPeopleIn = function() {
    for (let i = 0; i < people.length; ) {
      let person = {
        weight: people[i],
        destination: stops[i],
      };
      let added = letPersonIn(person);
      if (added) {
        people.splice(i, 1);
        stops.splice(i, 1);
      } else {
        break;
      }
    }
  };

  var goToStops = function() {
    var orderedStops = Object.keys(nextStops).sort();
    for (let j = 0; j < orderedStops.length; j++) {
      let floor = orderedStops[j];
      console.log('On floor: ' + floor);
      stopCount++;

      let peopleForFloor = nextStops[floor];
      peopleForFloor.forEach(function(person) {
        letPersonOut(person);
      });

      delete nextStops[floor];
    }
    console.log('Going back to ground floor');
    stopCount++;
  };

  while (people.length) {
    letPeopleIn();
    goToStops();
  }

  return stopCount;
};

//const stockPrices = [10, 7, 5, 8, 11, 9];
// Returns 6 (buying for $5 and selling for $11)

window.getMaxProfit = function(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Need alteast two prices to calculate profit');
  }

  var minPrice = stockPrices[0];
  var profit = stockPrices[1] - minPrice;

  for (var i = 0; i < stockPrices.length; i++) {
    let price = stockPrices[i];
    var tempProfit = price - minPrice;
    if (tempProfit > profit) {
      profit = tempProfit;
    }
    if (price < minPrice) {
      minPrice = price;
    }
  }

  return profit;
};

//input: ABBA, CBBC
//output: BB

//input: iamnice, iamtired
//output: iamie

window.commonSequence = function(a, b) {
  var output = '';

  var strA = a;
  var strB = b;

  //set strA to the longest argument
  //so we can find the longest subssequence
  if (b.length > strA.length) {
    strA = b;
    strB = a;
  }

  //slower as indexOf() will internally have another for loop, so time complexity is O(n^2)
  /*var strBArr = strB.split("");

  for (var i=0; i<strA.length; i++) {
    let charA = strA[i];

    let charBIndex = strBArr.indexOf(charA);
    if (charBIndex > -1) {
      //console.log(charA + " exists in " + a + " and " + b);
      output += charA;
      strBArr.splice(charBIndex, 1);
    }
  }*/

  var uniqueCharMap = {};

  for (var i = 0; i < strA.length; i++) {
    let charA = strA[i];
    let charB = strB[i];

    uniqueCharMap[charA] = true;

    //strA could be longer so strB may not always be defined
    if (charB && uniqueCharMap[charB]) {
      output += charB;
      //remove from map as it could appear again
      delete uniqueCharMap[charB];
    }
  }

  return output;
};
