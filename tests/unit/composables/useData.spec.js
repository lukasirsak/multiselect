import { createSelect } from 'unit-test-helpers'

describe('useData', () => {
  it('should emit input, change & update:modelValue event on `update`', () => {
    const select = createSelect({
      options: [1,2,3],
    })

    select.vm.update({value: 1})

    expect(select.emitted('input')[0][0]).toEqual(1)
    expect(select.emitted('change')[0][0]).toEqual(1)
    expect(select.emitted('update:modelValue')[0][0]).toEqual(1)
  })
})