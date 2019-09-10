import { HumidityPercentPipe } from './humidity-percent.pipe';

describe('HumidityPercentPipe', () => {
  it('create an instance', () => {
    const pipe = new HumidityPercentPipe();
    expect(pipe).toBeTruthy();
  });
});
