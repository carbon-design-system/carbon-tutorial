import React from 'react';

export function InfoSection({ className, heading, children }) {
  return (
    <section className={`bx--row ${className} info-section`}>
      <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
        <h3 className="info-section__heading">{heading}</h3>
      </div>
      {children}
    </section>
  );
}

function makePhraseArray(phrase) {
  const words = phrase.split(' ');
  const s = words.pop();
  const result = [words.join(' '), s];

  return result;
}

export function InfoCard({ heading, body, icon }) {
  const className =
    'info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1';

  const [phraseStart, phraseEnd] = makePhraseArray(heading);

  return (
    <article {...{ className }}>
      <h4 className="info-card__heading">
        {phraseStart}&nbsp;
        <strong>{phraseEnd}</strong>
      </h4>
      <p className="info-card__body">{body}</p>
      {icon}
    </article>
  );
}
