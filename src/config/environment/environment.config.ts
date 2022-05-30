import { IEnvironment, NodeEnvAllowedValuesMap } from './environment.interface';

export const environments = (): IEnvironment => ({
  nodeEnv: NodeEnvAllowedValuesMap.get(process.env.NODE_ENV || 'development'),
  databaseUrl: process.env.DATABASE_URL,
});
