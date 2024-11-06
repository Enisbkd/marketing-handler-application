import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8a434b31-c64c-42aa-a984-ddd6dd64aa0d',
};

export const sampleWithPartialData: IAuthority = {
  name: '1ebb375f-ada7-4752-b913-4985c95a4868',
};

export const sampleWithFullData: IAuthority = {
  name: '5c33ee90-a306-4278-bd71-ac2c0cb4fd9b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
