import React from 'react';

export const SavedMessages = (props) => {

  const uid = props.uid
                ? `${props.uid}`
                : '';

  const saved = props.completed
                ? 'Bookmark this page now, and use it to track your progress on subsequent games.'
                : 'Welcome back.  We\'ll track your click progress.';

  // const completed = props.completed
  //               ? 'Book '

  return (
    <div className="animate">
      <div>
        <span>User Id: </span><span>{uid}</span>
      </div>
      <div>
        <span>{saved}</span>
      </div>
    </div>
  )
}

export default SavedMessages;
