import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ExampleContext from '../context/contextSetup';

function Show({ name }) {
    const { people } = useContext(ExampleContext);

    return (
        <>
            {people.map(data => {
                return(
                    <div key={data.id}>
                        <h1>{data.name}</h1>
                    </div>
                )
            })}
            <Link to='/'>Back to home</Link>
        </>
    );
}

export default Show;