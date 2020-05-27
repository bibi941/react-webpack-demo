/*
 * @description:index.test
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-05-27 15:04
*/
import { classNames } from '../index';

describe('classNames', () => {
  it('接受1个classNames', () => {
    const result = classNames('a');
    expect(result).toEqual('a');
  });
  it('接受2个classNames', () => {
    const result = classNames('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受一个 undefined,classname 不会出现 undefined', () => {
    const result = classNames('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受null,false,中文', () => {
    const result = classNames('a', undefined, false, null, '中文');
    expect(result).toEqual('a 中文');
  });
});
