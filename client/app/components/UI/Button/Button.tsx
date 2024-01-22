import cn from "classnames";
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from '@mui/material';
import styles from './Button.module.css';
export interface IButtonProps extends MaterialButtonProps {}

const buttonStyles = {
  backgroundColor: '#47500f',
  color: 'green',
  width: '90%',
  transition: '1.7s',
  '&:hover': {
    transition: '1.7s',
    color: 'orange',
    backgroundColor: 'black',
  },
};
const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = '' } = props;
  return (
    // <MaterialButton variant="contained" sx={buttonStyles} {...props}>
    //   {children}
    // </MaterialButton>
     <MaterialButton variant="contained"  {...props} className={cn(styles.button,className)}>
     {children}
   </MaterialButton>
  );
};

export default Button;
