import React from 'react';
import DefaultLayout from '../Layouts/Default';

class Show extends React.Component {
    render() {
        const log = this.props.log;
        return (
            <DefaultLayout title={"Logs Show Page"}>
                <div>
                    Title: {log.title}<br />
                    Entry: {log.entry}<br />
                    Ship is Broken: {log.shipIsBroken ? 'Yes' : 'No'}<br />
                    <a href='/logs'>Home</a>
                </div>
            </DefaultLayout>
        );
    }
}

export default Show;
