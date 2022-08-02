import { useEffect, useState } from 'react';
import './Pages.css';
import axios from 'axios'
import { DogBreed, ListAllResponse, ImageResponse } from '../../types/types';

const MainPage = () => {

    const [breeds, setBreeds] = useState<DogBreed[]>([]);

    const fetchBreedsList = async () => {
        const { data: { message: allBreeds } } = await axios.get<ListAllResponse>(
            "https://dog.ceo/api/breeds/list/all"
        );

        const keys = Object.keys(allBreeds)

        const dogBreeds = await Promise.all(keys.map(async key => {
            const { data: { message: value } } = await axios.get<ImageResponse>(
                `https://dog.ceo/api/breed/${key}/images/random`
            )
            return { key, value }
        }))
        setBreeds(dogBreeds);
    };


    useEffect(() => {
        fetchBreedsList();
    }, [])


    return (
        <div className='row'>
        {breeds.map(el => {
           return <div className="card-item" data-name={el.key} key={Math.random()}>
                <div className="card-inner">
                    <img src={el.value} />
                    <div className="breed-name">
                        <h3>{el.key}</h3>
                    </div>
                </div>
            </div>
        })}
    </div> 
    )
}


export default MainPage