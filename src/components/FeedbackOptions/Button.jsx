const Button = ({key,  color, onClick}) => (<button type="button" onClick={() => onClick(key)} style = {{backgroundColor: color}}>{key}</button>);
export default Button;