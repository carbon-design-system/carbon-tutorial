import React from 'react';

function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

export const InfoSection = props => {
  return (
    <section className={`bx--row ${props.className} info-section`}>
      <div className="bx--col--md-8 mx--col-lg-4 bx--col-xlg-3">
        <h3>{props.heading}</h3>
      </div>
      {props.children}
    </section>
  );
};

export const InfoCard = props => {
  const splitHeading = createArrayFromPhrase(props.heading);
  return (
    <div className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--pffset-xlg-1">
      <h4 className="info-card__heading">
        {`${splitHeading[0]} `}
        <strong>{splitHeading[1]}</strong>
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </div>
  );
};
