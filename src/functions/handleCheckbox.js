function handleArrayCheckbox(array, setArray, index) {
  const newArray = [...array];
  newArray[index].checked = !newArray[index].checked;
  setArray(newArray);
}
export default handleArrayCheckbox;
