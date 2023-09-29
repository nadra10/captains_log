import React from 'react';
import DefaultLayout from './Layouts/Default';

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
                            <a href={`/logs/${log._id}/edit`}>Edit</a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
            </form>
                        </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

export default Index;
