import ReactDOM from "react-dom";

const Portal = ({ id, isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(<div id={id}>{children}</div>, document.body);
};

export default Portal;
