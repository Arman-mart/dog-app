import { useParams, useHistory } from 'react-router-dom';
import './Pages.css';
import { IParams, DogBreed, ImageResponse, ListAllResponse } from '../../types/types';
import { MouseEvent } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';




const Subtypes = () => {
    const { type }: IParams = useParams();
    const [subBreeds, setSubBreeds] = useState([]);
    const  history = useHistory();

    const fetchSubBreeds = async () => {


        const { data: { message: allBreeds } } = await axios.get<ListAllResponse>(
            "https://dog.ceo/api/breeds/list/all"
        );
        const currentDogSubBreeds: any = await Promise.all(allBreeds[type].map(async (el: string) => {
            const { data: { message: value } } = await axios.get<ImageResponse>(
                `https://dog.ceo/api/breed/${type}/${el}/images/random`
            )

            return {value, el}
        }))
        setSubBreeds(currentDogSubBreeds);
    }

    useEffect(() => {
        fetchSubBreeds();
    }, []);


    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        const subType = event.currentTarget.getAttribute("data-name") as string;
         history.push(`/random/${type}/${subType}`)
    }

    return (
        <div className='row'>
        {subBreeds.map((element:any) => {
            return <div className="card-item"
                data-name={element.el}
                key={Math.random()}
                onClick={clickHandler}>
                <div className="card-inner" >
                    <img src={element.value} />
                    <div className="breed-name">
                        <h3>{element.el}</h3>
                    </div>
                </div>
            </div>
         })}
        </div>
    )
}



export default Subtypes