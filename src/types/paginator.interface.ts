export interface Paginator<T> {
  apply: (items: T[], params: any) => T[];
};
