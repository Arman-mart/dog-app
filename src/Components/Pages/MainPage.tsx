import { useEffect, useState, MouseEvent } from 'react';
import './Pages.css';
import axios from 'axios'
import { DogBreed, ListAllResponse, ImageResponse } from '../../types/types';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const [breeds, setBreeds] = useState<DogBreed[]>([]);
    const history = useHistory();

    const fetchBreedsList = async () => {
        const { data: { message: allBreeds } } = await axios.get<ListAllResponse>(
            "https://dog.ceo/api/breeds/list/all"
        );

        const keys = Object.keys(allBreeds);
        const values = Object.values(allBreeds);

        const dogBreeds = await Promise.all(keys.map(async (key, idx) => {
            const { data: { message: value } } = await axios.get<ImageResponse>(
                `https://dog.ceo/api/breed/${key}/images/random`
            )
            return { key, value, subBreeds: values[idx] }
        }))
        setBreeds(dogBreeds);
    };


    useEffect(() => {
        fetchBreedsList();
    }, [])

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        const dogName = event.currentTarget.getAttribute("data-name") as string;
        const haseSubBreeds = breeds.some((e) => e.key === dogName && e.subBreeds.length !== 0)

        haseSubBreeds
            ? history.push(`/types/${dogName}`)
            : history.push(`/random/${dogName}`)


    }

    return (
        <div className='row'>
            {breeds.map(el => {
                return <div className="card-item"
                    data-name={el.key}
                    key={Math.random()}
                    onClick={clickHandler}>
                    <div className="card-inner" >
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