import React from 'react';

const InfoSection = ({ className, heading, children }) => {
  return (
    <seciton className={`bx--row ${className} info-section`}>
      <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
        <h3 className="info-section__heading">{heading}</h3>
      </div>
      {children}
    </seciton>
  );
};

export default InfoSection;
