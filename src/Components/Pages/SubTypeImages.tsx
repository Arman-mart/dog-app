import './Pages.css';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { ImageResponse, IParams } from '../../types/types';
import { useEffect, useState } from 'react';

const SubTypeImages = () => {
    const params: IParams = useParams();
    const [data, setData] = useState([]);

    const fetchImages = async () => {
        const { data: { message: value } } : any = await axios.get<ImageResponse>
            (`https://dog.ceo/api/breed/${params.type}/images/random/20`);

        setData(value);

    };

    useEffect(() => {
        fetchImages();
    }, [])

    return (
        <div className='row'>
        {data.map(el => {
            return <div className="card-item"
                key={Math.random()}>
                <div className="card-inner" >
                    <img src={el} />
                    <div className="breed-name">
                        <h3>{params.type}</h3>
                    </div>
                </div>
            </div>
        })}
    </div>
    )
}

export default SubTypeImages