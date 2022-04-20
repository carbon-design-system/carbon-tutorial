import React from 'react';

const InfoSection = (props) => (
  <section className={`cds--row ${props.className} info-section`}>
    <div className="cds--col-md-8 cds--col-lg-4 cds--col-xlg-3">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

const InfoCard = (props) => {
    return (
      <article className="info-card cds--col-md-4 cds--col-lg-4 cds--col-xlg-3 cds--offset-xlg-1">
        <h4 className="info-card__heading">{props.heading}</h4>
        <p className="info-card__body">{props.body}</p>
        {props.icon}
      </article>
    );
  };