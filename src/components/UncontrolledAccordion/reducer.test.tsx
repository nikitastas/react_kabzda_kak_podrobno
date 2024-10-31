import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('collapsed should be true', () => {
    const state: StateType = {collapsed: false}
    const action = {type: TOGGLE_COLLAPSED}
    const newState = reducer(state, action)

    expect(state).not.toBe(newState)
    expect(state.collapsed).not.toBe(newState.collapsed)
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    const state: StateType = {collapsed: true}
    const action = {type: TOGGLE_COLLAPSED}
    const newState = reducer(state, action)

    expect(state).not.toBe(newState)
    expect(state.collapsed).not.toBe(newState.collapsed)
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw an error, because action type is incorrect', () => {
    const state: StateType = {collapsed: true}
    const action = {type: 'FAKE'}

    expect(() => reducer(state, action)).toThrowError()
})