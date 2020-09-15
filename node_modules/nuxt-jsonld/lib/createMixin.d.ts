declare type Required<T> = {
    [P in keyof T & keyof any]: T[P];
};
declare type UserOptions = {
    space?: number | string;
};
export declare type Options = Required<UserOptions>;
declare type JsonldMixin = {
    beforeCreate: () => void;
};
declare const _default: (_options?: UserOptions) => JsonldMixin;
export default _default;
