import gql from 'graphql-tag';
import { ICar, ITask } from 'pages/home/interface';

export const GET_CAR = gql`
  {
    car(id:"e2de24e6-a7db-431e-8230-4ea5638cd19b"){
      id,
      make,
      model,
      trim,
      engineType,
      physicalStatus,
      legalStatus,
      sellingStatus,
      financialDetails{
        purchasePrice,
        purchaseDate,
        purchaseLocation,
        paymentDonePercentage,
        sellingPrice,
        sellingDate,
        sellingLocation,
        sellingDonePercentage,
        margin,
      }
    }
  }
`;
export const GET_TASK = gql`
  {
    tasks(carId:"e2de24e6-a7db-431e-8230-4ea5638cd19b"){
      id,
      taskType,
      comment,
      completed
    }
  }
`;

export const GET_MAKE = gql`
  {
    make
  }
`;

export const GET_MODEL = gql`
  query ($make:String!){
    model(make:$make)
  }
`;

export const GET_TRIM = gql`
  query ($model:String!, $make: String!){
    trim(model:$model, make: $make)
  }
`;


export interface IGetCarResponse {
  car: ICar;
}

export interface IGetTaskResponse {
  tasks: ITask[];
}