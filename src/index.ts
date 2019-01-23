import { plus } from './lib'

import { AppApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { AppApplication };



export async function main(options: ApplicationConfig = {}) {

  console.log('hello', plus(1, 2))
  const app = new AppApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
