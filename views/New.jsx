import React from 'react';

function New() {
  return (
    <form action="/logs" method="POST">
      <div>
        <label>Title:</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label>Entry:</label>
        <textarea name="entry"></textarea>
      </div>
      <div>
  <label>Ship is Broken:</label>
  <input type="checkbox" name="shipIsBroken" value="true" />
</div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default New;