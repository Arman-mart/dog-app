export interface DogBreed {
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
  