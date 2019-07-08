import React from 'react';

const InfoSection = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const lastWord = splitPhrase.pop();
  return [splitPhrase.join(' '), lastWord];
}

const InfoCard = props => {
  const [headingLeading, headingLastWord] = createArrayFromPhrase(
    props.heading
  );

  return (
    <div className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">
        {`${headingLeading} `}
        <strong>{headingLastWord}</strong>
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </div>
  );
};

export { InfoSection, InfoCard };
