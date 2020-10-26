import { AliOSSConfig, ParamOptions, Assets } from './types';
declare class AliOSS {
    protected config: AliOSSConfig;
    protected paramOptions?: ParamOptions;
    protected uploadSum: number;
    protected client: any;
    protected assets: Assets;
    constructor(options?: ParamOptions);
    static getFormat(format?: string): string;
    getFormat(format?: string): string;
    init(options?: ParamOptions): Promise<void>;
    upload(): Promise<void>;
    delFilterAssets(prefix: string): Promise<void>;
    delCacheAssets(): Promise<void>;
    asyncForEach(arr: Array<any>, cb: Function): Promise<void>;
    delAllAssets(): Promise<void>;
    uploadAssets(): Promise<void>;
    filterFile(name: string): boolean;
    getFileName(name: string): string;
    update(name: string, content: any): Promise<void>;
    uploadLocale(dir: string): Promise<void>;
}
export default AliOSS;