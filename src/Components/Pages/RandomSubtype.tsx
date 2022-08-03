import { IParams, ImageResponse } from "../../types/types";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomSubType = () => {
    const {type}: IParams = useParams();
    const [data, setData] = useState([]);
    

    const fetchImages = async () => {
        const { data: { message: value } }: any = await axios.get<ImageResponse>
            (`https://dog.ceo/api/breed/${type}/images/random/20`);

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
                            <h3>{type}</h3>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default RandomSubType