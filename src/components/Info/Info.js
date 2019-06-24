import React from 'react';

/**
 * Separate the last word of a phrase from the others.
 *
 * @param {string} phrase The phrase to be changed.
 *
 * @returns {string[]} First element is a string without last word, second element is a last word of a phrase.
 */
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const lastWord = splitPhrase.pop();

  return [splitPhrase.join(' '), lastWord];
}

const InfoSection = ({ children, className, heading }) => (
  <section className={`bx--row ${className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="info-section__heading">{heading}</h3>
    </div>
    {children}
  </section>
);

const InfoCard = ({ body, heading, icon }) => {
  const splitHeading = createArrayFromPhrase(heading);

  return (
    <div className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">
        {`${splitHeading[0]} `}
        <strong>{splitHeading[1]}</strong>
      </h4>
      <p className="info-card__body">{body}</p>
      {icon}
    </div>
  );
};

export { InfoSection, InfoCard };
