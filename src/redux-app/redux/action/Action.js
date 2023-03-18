const onAdd = (e) => {
  const { id, music, year } = e;
  return {
    type: "onAdd",
    payload: { id, music, year },
  };
};
const onDelete = (id) => {
  return {
    type: "onDelete",
    id,
  };
};

const onEdit = (e) => {
  return {
    type: "onEdit",
    payload: e,
  };
};

const onUpdate = (id) => {
  return {
    type: "onUpdate",
    payload: id,
  };
};

export { onAdd, onDelete, onUpdate, onEdit };
