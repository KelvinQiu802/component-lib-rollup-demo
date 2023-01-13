import React from 'react';
import '../../tailwind.css';

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return <button className='text-3xl bg-orange-200'>{text}</button>;
};

export default Button;
