import { CurrencyFormatPipe } from './currency-format.pipe'

describe('currencyFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyFormatPipe()
    expect(pipe).toBeTruthy()
  })
})
