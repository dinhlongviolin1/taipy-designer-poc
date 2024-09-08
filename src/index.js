const removeAll = () => {
  window.taipyApp.removeAll();
};
const addControl = (controlType, valueType) => {
  window.taipyApp.addControl(controlType, valueType);
};
const resetDefault = () => {
  window.taipyApp.resetDefault();
};

const bindGroup = (btn, id, valueType) => {
  const groupList = ["text", "input", "button"];
  btn.addEventListener("click", () => {
    window.taipyApp.addControl(groupList[id], valueType);
  });
};

document
  .querySelector("#reset-default-btn")
  .addEventListener("click", resetDefault);
document.querySelector("#remove-all-btn").addEventListener("click", removeAll);

document.querySelectorAll("#number-group button").forEach((btn, id) => {
  bindGroup(btn, id, "number");
});

document.querySelectorAll("#string-group button").forEach((btn, id) => {
  bindGroup(btn, id, "number");
});
