import React from 'react';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

/**
 * The main content is devided into three main sections. Each one containing one or more cards.
 */
const Section = ({ heading, className, children }) => (
  <section className={`bx--row ${className}`}>
    <h2 className="bx--col bx--no-gutter bx--col-sm-4">
      <strong>{heading}</strong>
    </h2>
    {children}
  </section>
);

/**
 * The cards inside the page's section. Containing headers and short body paragraphs
 */
const PrinciplesSectionCard = ({ heading, body, cardIcon, icon }) => {
  const splitHeading = createArrayFromPhrase(heading);

  return (
    <div className="section-card bx--col bx--col-4">
      <h3 className="section-card__heading">
        {`${splitHeading[0]} `}
        <strong>{splitHeading[1]}</strong>
      </h3>
      <p className="section-card__body">{body}</p>
      {icon}
    </div>
  );
};

export { Section, PrinciplesSectionCard };
