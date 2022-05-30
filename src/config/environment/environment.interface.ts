export enum INodeEnvAllowedValues {
  DEVELOPMENT = 'DEVELOPMENT',
  PRODUCTION = 'PRODUCTION',
}

export const NodeEnvAllowedValuesMap: Map<string, INodeEnvAllowedValues> =
  new Map<string, INodeEnvAllowedValues>([
    ['development', INodeEnvAllowedValues.DEVELOPMENT],
    ['production', INodeEnvAllowedValues.PRODUCTION],
  ]);

export interface IEnvironment {
  NODE_ENV: INodeEnvAllowedValues;
}
