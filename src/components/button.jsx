export const SwapButton = ({ colores, colorSetter, selectedColor }) => {
  const currentIndex = colores.indexOf(selectedColor);
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        colorSetter(
          colores[currentIndex + 1 >= colores.length ? 0 : currentIndex + 1],
        );
      }}
    >
      Swap
    </button>
  );
};
