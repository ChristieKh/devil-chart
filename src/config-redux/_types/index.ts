export declare type BaseAction = () => {
  type: string;
};

export declare type Action<T> = (
  payload: T,
) => {
  type: string;
  payload: T;
};
