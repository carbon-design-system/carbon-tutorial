import React from 'react';
import { Grid, Column } from '@carbon/react';

// Take in a phrase and separate the third word (the last one) in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' '); // splitPhrase = ["word1", "word2", "word3"]
  const thirdWord = splitPhrase.pop(); // thirdWord = word3 (aka splitPhrase[2])
  return [splitPhrase.join(' '), thirdWord]; //return ["word1 word2", "word3"] -> Becomes a 2 terms array (splitPhrase[0] and [1] become only one word)
}

export const InfoSection = props => (
  // Info header components
  <Grid className={`${props.className} info-section`}>
    <Column md={8} lg={4} xlg={3}>
      <h3 className="info-section__heading">{props.heading}</h3>
    </Column>
    {props.children}
  </Grid>
);

export const InfoCard = props => {
  const splitHeading = createArrayFromPhrase(props.heading);

  return (
    // Info content component
    <Column sm={4} md={8} lg={4} className="info-card">
      <h4 className="info-card__heading">
        {splitHeading[0]} <strong>{splitHeading[1]}</strong>
        {/* <b> doesn't work */}
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon()}
    </Column>
  );
};
