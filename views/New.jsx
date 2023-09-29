

import React from 'react';

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Log page</h1>
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title" /><br />
                    Entry: <textarea name="entry"></textarea><br />
                    Ship is Broken: <input type="checkbox" name="shipIsBroken" value="true" /><br />
                    <input type="submit" value="Create Log" />
                </form>
                <a href="/logs">Back to Logs</a>
            </div>
        );
    }
}

export default New;