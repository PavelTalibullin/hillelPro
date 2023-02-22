const Button = (props) => {
  console.log(props.children);
  const { onClick, children = "Default" } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
