import fs from 'fs';
import path from 'path';

export const createHtmlFile = (name: string, data: string) => {
  const filePath = path.join(__dirname, '../../public', name);
  fs.writeFileSync(filePath, data);
};

export const applyStyleFromFile = (name: string) => {
  const filePath = path.join(__dirname, '../../public/template', name);
  if (filePath.endsWith('.css')) {
    return fs.readFileSync(filePath).toString();
  } else {
    return '';
  }
};

export const getFile = (name: string) => {
  const filePath = path.join(__dirname, '../../public', name);
  const file = fs.createReadStream(filePath);
  const stat = fs.statSync(filePath);
  return { file, stat };
};
