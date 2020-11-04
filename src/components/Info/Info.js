import React from 'react';

export const InfoSection = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-2 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

export const InfoCard = props => {
  const splitHeading = createArrayFromPhrase(props.heading);

  return (
    <article className="info-card bx--col-md-2 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">
        {`${splitHeading[0]} `}
        <strong>{splitHeading[1]}</strong>
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </article>
  );
};

function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

// export { InfoSection,  InfoCard };
// it looks like only works in class for exporting.photos
// function need to prefix "export const Func"
