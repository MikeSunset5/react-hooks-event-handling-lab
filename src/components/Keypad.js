import React from 'react';

function Keypad () {
    function passwordEntry() {
        console.log("Entering password...");
      }
    return (
        <div>
          <input type="password" onChange={passwordEntry} />
        </div>
    );
}

export default Keypad;