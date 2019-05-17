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
const PrinciplesSection = props => (
  <section className={`bx--row ${props.className} principles-section`}>
    <h2 className="bx--col bx--no-gutter bx--col-sm-4">
      <strong>{props.heading}</strong>
    </h2>
    {props.children}
  </section>
);

/**
 * The cards inside the page's section. Containing headers and short body paragraphs
 */
const PrinciplesSectionCard = props => {
  const splitHeading = createArrayFromPhrase(props.heading);

  return (
    <div className="section-card bx--col bx--col-4">
      <h3 className="section-card__heading">
        {`${splitHeading[0]} `}
        <strong>{splitHeading[1]}</strong>
      </h3>
      <p className="section-card__body">{props.body}</p>
      {props.icon}
    </div>
  );
};

export { PrinciplesSection, PrinciplesSectionCard };
