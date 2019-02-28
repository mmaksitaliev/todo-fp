import { v1 } from 'uuid';

export const create = (title, comment) => {
  title = title || 'Default title';
  return { id: v1(), title, comment };
};

export const update = (oldId, title, comment) => {
  title = title || 'Default title';
  return { id: oldId, title, comment };
};
