/*
 * @description:icon
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-05-25 10:10
*/
import React, { FC } from 'react';
import './importAllSvg';

interface IProps {
  name: string
}

const Icon: FC<IProps> = (props) => {

  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;
