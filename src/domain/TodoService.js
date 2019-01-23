import { v1 } from "uuid";

const create = (goal = "", deadline = null, tags = []) => {
  return { id: v1(), goal, deadline, tags, date_created: Date.now() };
};

const update = (old, toUpdate) => {
  return { ...toUpdate, id: old.id };
};

export default { create, update };
