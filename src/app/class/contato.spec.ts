import { Contato } from './contato';

describe('Contato', () => {
  it('should create an instance', () => {
    expect(new Contato("Thais", null, "feminino")).toBeTruthy();
  });
});
