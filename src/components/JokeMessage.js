import React from 'react';

const JokeMessage = (props) => {
  return (
    <>
      <h6 className="f7 f1-m f-headline-l measure-narrow lh-title mv0 tc">
      { props.jokeline.type === 'single' &&
      <span className="bg-black-90 lh-copy white pa1 tracked-tight">{ props.jokeline.joke }</span> }
      { props.jokeline.type === 'twopart' &&
      <div>
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">{ props.jokeline.setup }</span>
        <br />
        <br />
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">{ props.jokeline.delivery }</span>
      </div> }
      </h6>
    </>
  );
}

export default JokeMessage;
