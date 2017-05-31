import deepFreeze from 'deep-freeze'
import {addOrReplace} from 'modules/arrays'


describe('arrays', () => {
  describe.only('addOrReplace', () => {
    it('should add new item', () => {
      const array = [{id: 2, name: 'number 2'}]

      deepFreeze(array)

      const newArray = addOrReplace(array, {id: 1, name: 'number 1'})

      expect(newArray.length).to.equal(2)
    })

    it('should replace existing item', () => {
      const array = [{id: 2, name: 'number 2'}]

      deepFreeze(array)

      const newArray = addOrReplace(array, {id: 2, name: 'new number 2'})

      expect(newArray.length).to.equal(1)
    })
  })

})
