import React from 'react';
import DefaultLayout from '../Layouts/Default';

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Logs Index Page"}>
                <nav>
                    <a href="/logs/new">Create a New Log</a>
                </nav>
                <ul>
                    {this.props.logs.map((log) => (
                        <li key={log._id}>
                            <a href={`/logs/${log._id}`}>{log.title}</a>
                        </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

export default Index;
