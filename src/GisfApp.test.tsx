import { describe, expect, test}  from 'vitest'
import { render } from '@testing-library/react'
import { GisfApp } from './GisfApp'


describe('', () => {
  test('should ', () => {
    const {container} = render(<GisfApp />)

    expect(container).toMatchSnapshot();
  })
})
