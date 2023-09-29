import React from 'react';
import DefaultLayout from './Layouts/Default';

class Edit extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <DefaultLayout title={"Edit Log"}>
                <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={log.title} /><br />
                    Entry: <textarea name="entry" defaultValue={log.entry}></textarea><br />
                    Ship is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} /><br />
                    <input type="submit" value="Update Log" />
                </form>
            </DefaultLayout>
        );
    }
}

export default Edit;