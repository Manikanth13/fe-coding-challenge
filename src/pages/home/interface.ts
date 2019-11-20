export interface ICar {
  engineType: string;
  id: string;
  legalStatus: string;
  make: string;
  model: string;
  physicalStatus: string;
  sellingStatus: string;
  trim: string;
  financialDetails: IFinancialDetail
}

export interface IFinancialDetail {
  margin: number;
  paymentDonePercentage: number;
  purchaseDate: number;
  purchaseLocation: string;
  purchasePrice: number;
  sellingDate: string;
  sellingDonePercentage: number;
  sellingLocation: string;
  sellingPrice: number;
}

export interface ITask {
  id: string;
  taskType: 'ADD_DOCUMENT' | 'WASH_CAR' | 'ADD_PAYMENT_DETAILS';
  comment: string;
  completed: boolean;
}