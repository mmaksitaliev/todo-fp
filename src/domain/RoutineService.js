import { v1 } from 'uuid';

export const create = (title, comment) => {
  title = title || 'Default title';
  return { id: v1(), title, comment };
};
