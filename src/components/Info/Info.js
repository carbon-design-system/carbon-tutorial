import React from 'react';

export const InfoSection = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

export const InfoCard = props => {
  return (
    <div className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">{props.heading}</h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </div>
  );
};
