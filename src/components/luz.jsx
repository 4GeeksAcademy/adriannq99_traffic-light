export const Luz = ({ color, colorSetter, selectedColor }) => {
  return (
    <div
      className={
        "light m-1 rounded-circle " +
        color +
        (selectedColor === color ? " selected" : "")
      }
      onClick={() => {
        colorSetter(color);
      }}
    ></div>
  );
};
