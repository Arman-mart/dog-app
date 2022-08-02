import { useParams } from 'react-router-dom';
import './Pages.css';

const Subtypes = () => {
    const params = useParams();
    console.log(params)


    return (
        <div>Subtypes page</div>
    )
}

export default Subtypes