import React from 'react';

/**
 * The main content is devided into three main sections. Each one containing one or more cards.
 */
const Section = ({ sectionTitle, className, children }) => (
  <section className={`bx--row ${className} section`}>
    <h2 className="bx--col bx--no-gutter">
      <strong>{sectionTitle}</strong>
    </h2>
    {children}
  </section>
);

/**
 * The cards inside the page's section. Containing headers and short body paragraphs
 */
const SectionCard = ({ cardTitle, cardBody, cardIcon }) => (
  <div className="section-card bx--col">
    <h3 className="section-card__heading">
      {`${cardTitle[0]} `}
      <strong>{cardTitle[1]}</strong>
    </h3>
    <p className="section-card__body">{cardBody}</p>
  </div>
);

export { Section, SectionCard };
