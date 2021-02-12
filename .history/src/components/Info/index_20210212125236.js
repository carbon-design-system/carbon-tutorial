export * from './Info';

const InfoCard = props => {
  return (
    <article className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">{props.heading}</h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </article>
  );
};

export { InfoSection, InfoCard };
