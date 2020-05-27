/*
 * @description:classNames
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-05-27 11:37
*/
/**
 * 合并 classname
 * @param names class
 */
export const classNames = (...names: (string | undefined | false | null)[]) => {
  return names.filter(v => v).join(' ');
};

