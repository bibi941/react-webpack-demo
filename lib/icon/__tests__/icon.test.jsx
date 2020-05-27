/*
 * @description:icon.test
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-05-27 17:26
*/
import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../icon'

describe('icon', () => {
  it('xxxx', () => {
    const json = renderer.create(<Icon name={'browse'}/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
