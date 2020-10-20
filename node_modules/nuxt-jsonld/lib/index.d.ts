import VueT from 'vue';
import { MetaInfo } from 'vue-meta';
import { Thing, WithContext } from 'schema-dts';
declare module 'vue/types/options' {
    interface ComponentOptions<V extends VueT> {
        jsonld?: () => WithContext<Thing> | WithContext<Thing>[] | null;
        head?: MetaInfo | (() => MetaInfo);
    }
}
export declare const Jsonld: (target: {
    options?: import("vue").ComponentOptions<VueT, import("vue/types/options").DefaultData<VueT>, import("vue/types/options").DefaultMethods<VueT>, import("vue/types/options").DefaultComputed, import("vue/types/options").PropsDefinition<Record<string, any>>, Record<string, any>>;
} & import("vue").VueConstructor<VueT>) => void;
declare const _default: {
    install(Vue: any, options: any): void;
};
export default _default;
