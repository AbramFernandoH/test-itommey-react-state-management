import { useContext } from 'react';
import ExampleContext from '../context/contextSetup';
import { Link } from 'react-router-dom';

function Homepage() {
    const { people, removePerson } = useContext(ExampleContext);
    
    return (
        <>
            {people.map(data => {
                return(
                    <div key={data.id}>
                        <h1>{data.id}</h1>
                        <button onClick={() => removePerson(data.id)}>Remove</button>
                    </div>
                )
            })}
            <Link to='/show'>See lists of people</Link>
        </>
    );
}

export default Homepage;