import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1171,
  login: 'Fj',
};

export const sampleWithPartialData: IUser = {
  id: 22556,
  login: 'G`5P@07R7SF\\*DO6lw\\4eqf\\8x\\ZtrQ\\=J',
};

export const sampleWithFullData: IUser = {
  id: 28447,
  login: 'u',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
