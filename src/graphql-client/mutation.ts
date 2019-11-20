import gql from 'graphql-tag';

export const CREATE_TASK = gql`
  mutation($carId: ID!, $comment: String!, $taskType: TaskType!) {
    createTask(carId: $carId, task: { comment: $comment, taskType: $taskType})
  }
`;

export const UPDATE_TAKS = gql`
  mutation ($id: ID!,$completed:Boolean!){
    updateTask(id:$id,completed:$completed){
      id,
      taskType,
      comment,
      completed
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation updateCar($carId:ID!,$make:String,$model:String,$trim:String,$engineType:EngineType,$physicalStatus:PhysicalStatus,$legalStatus:LegalStatus,$sellingStatus:SellingStatus){
    updateCar(car:{id:$carId,make:$make,model:$model,trim:$trim,engineType:$engineType,physicalStatus:$physicalStatus,legalStatus:$legalStatus,sellingStatus:$sellingStatus}){
      id,
      make,
      model,
      trim,
      engineType,
      physicalStatus,
      legalStatus,
      sellingStatus
    }
  }
`;