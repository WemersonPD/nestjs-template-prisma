import { IEnvironment, NodeEnvAllowedValuesMap } from './environment.interface';

export const environments = (): IEnvironment => ({
  NODE_ENV: NodeEnvAllowedValuesMap.get(process.env.NODE_ENV || 'development'),
});
