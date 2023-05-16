export interface Filter<T> {
  apply: (items: T[], filters: any) => T[];
};
