export interface DogBreed {
    subBreeds: Array<string>
    key: string,
    value: string
  }
  
  export interface ListAllResponse {
    message: {
      [ key: string ]: string[]
    }
  }
  
  export interface ImageResponse {
    message: string
  }
  
  export interface IParams{
    type: string
  }