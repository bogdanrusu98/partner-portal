const fs = require('fs');

const apiUrl = process.env.NG_APP_API_URL || '';

const content = `
export const environment = {
  production: false,
  apiUrl: '${apiUrl}'
};
`;

fs.writeFileSync('./src/environments/environment.ts', content);
fs.writeFileSync('./src/environments/environment.prod.ts', content);
