import React from 'react';

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return <button className='text-3xl bg-orange-200'>{text}</button>;
};

export default Button;
