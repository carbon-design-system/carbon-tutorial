import React from 'react';
import { createArrayFromPhrase } from './Info';

const InfoCard = ({ heading, body, icon }) => {
  const splitHeading = createArrayFromPhrase(heading);

  return (
    <>
      <article className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
        <h4 className="info-card__heading">
          {`${splitHeading[0]} `}
          <strong>{splitHeading[1]}</strong>
        </h4>
        <p className="info-card__body">{body}</p>
        {icon}
      </article>
    </>
  );
};

export default InfoCard;
