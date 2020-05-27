/*
 * @description:icon
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-05-25 10:10
*/
import React, { FC } from 'react';
import './importAllSvg';
import { classNames } from '../utils';

interface IProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: FC<IProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg>
      <use
        className={classNames('ash-icon', className)}
        xlinkHref={`#${name}`}
        {...restProps}
      />
    </svg>
  );
};

export default Icon;
