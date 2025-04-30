import { writeFileSync } from 'fs';

const apiUrl = process.env['NG_APP_API_URL'] || '';

const content = `
export const environment = {
  production: true,
  apiUrl: '${apiUrl}'
};
`;

writeFileSync('./src/environments/environment.prod.ts', content);
