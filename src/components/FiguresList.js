import Figure from "./Figure";

const FiguresList = ({ figuresData }) => {
  const allFigures = figuresData.map((figure) => (
    <Figure key={figure.id} {...figure} />
  ));

  return <div className="figuresContainer">{allFigures}</div>;
};
export default FiguresList;
