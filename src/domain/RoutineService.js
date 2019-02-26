import { v1 } from 'uuid';

export const create = (title, description) => {
  title = title || 'Default title';
  description = description || 'Default description';
  return { id: v1(), title, description };
};
