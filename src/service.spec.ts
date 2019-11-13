import service from './service';

describe('test service', () => {
  it('should export default string', () => {
    expect(service).toEqual('Hello world!');
  });
});
