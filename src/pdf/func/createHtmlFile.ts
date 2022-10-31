import fs from 'fs';
import path from 'path';

const createHtmlFile = (name: string, data: string) => {
  const filePath = path.join(__dirname, '../public', name);
  fs.writeFileSync(filePath, data);
};

export default createHtmlFile;
