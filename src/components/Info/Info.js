import React from 'react';

function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();

  return [splitPhrase.join(' '), thirdWord];
}

const InfoSection = props => {
  return (
    <section className={`bx--row ${props.className} info-section`}>
      <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
        <h3 className="info-section__heading">{props.heading}</h3>
      </div>
      {props.children}
    </section>
  );
};

const InfoCard = props => {
  const [firstWord, secondWord] = createArrayFromPhrase(props.heading);

  return (
    <article className="info-card bx--col-md-4 bx--col-lg-4 bx--offset-xlg-1">
      <h4 className="info-card__heading">
        {`${firstWord} `}
        <strong>{secondWord}</strong>
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </article>
  );
};

export { InfoSection, InfoCard };
