/*
 * @description:icon.test
 * @author : Fineley.R.Fang(方欣芮)
 * @LastEditors: Fineley.R.Fang(方欣芮)
 * @LastEditTime: 2020-05-27 17:26
*/
import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('icon', () => {
  it('icon-快照', () => {
    const json = renderer.create(<Icon name={'browse'}/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('点击', () => {
    const fn = jest.fn()
    const component = mount(<Icon name={'browse'} onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled
  })
})
