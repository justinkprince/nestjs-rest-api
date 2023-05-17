import { QueryParams } from './types/query-params.interface';
import { DEFAULT_PAGE, DEFAULT_NUM_PER_PAGE } from './constants';

export const extractParams = (params: any): QueryParams => {
  const {
    page = DEFAULT_PAGE,
    numPerPage = DEFAULT_NUM_PER_PAGE,
    ...filters
  } = params;

  const pagination = {
    page,
    numPerPage,
  };

  return {
    pagination,
    filters,
  };
};

export function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);

  return enumValues[randomIndex];
}
