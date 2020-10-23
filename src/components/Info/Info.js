import React from 'react';

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

const createArrayFromHeading = heading => {
  const splitHeading = heading.split(' ');
  const lastWord = splitHeading.pop();
  return [splitHeading.join(' '), lastWord];
};

const Infocard = props => {
  return (
    <article className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">
        {createArrayFromHeading(props.heading)[0]}
        <strong>{` ${createArrayFromHeading(props.heading)[1]} `}</strong>
      </h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </article>
  );
};

export { InfoSection, Infocard };
