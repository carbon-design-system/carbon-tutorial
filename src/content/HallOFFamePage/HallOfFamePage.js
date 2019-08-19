import React, { useState } from 'react';
import HallOfFameList from './HallOfFameList';
import { Tile } from 'carbon-components-react';

const HallOfFamePage = () => {
  const [filter, setFilter] = useState(
    'org:carbon-design-system type:pr is:closed step+5+Hursley'
  );

  return (
    <div className="bx--grid bx--grid--full-width">
      <div className="hof-page__banner">
        <div className="bx--row">
          <div className="bx--col-lg-16">
            <h1 className="hof-page__heading">
              Carbon Developer Essentials Hall of Fame
            </h1>
          </div>
        </div>
        <div className="bx--row">
          <Tile className="bx--col-lg-4">
            <p>These folks got one of these...</p>
            <img
              className="hof-page__image"
              src={`${process.env.PUBLIC_URL}/carbon-badge.png`}
              alt="Carbon developer essentials react badge"
            />
          </Tile>
          <Tile className="bx--col-lg-4">
            <img
              className="hof-page__image"
              src={`${process.env.PUBLIC_URL}/carbon-tee.png`}
              alt="Carbon t-shirt"
            />
            <p>...and one of these.</p>
          </Tile>
        </div>
        <div className="bx--row">
          <div className="bx--col-lg-8">
            <label>
              Filter:
              <input
                type="text"
                value={filter}
                onChange={e => {
                  setFilter(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <HallOfFameList filter={filter} />
    </div>
  );
};

export default HallOfFamePage;
