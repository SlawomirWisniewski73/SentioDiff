import { parseSentio } from '../src/parser';

describe('parseSentio', () => {
  it('should parse a valid Sentio document', () => {
    const doc = {
      version: '1.0-sentio',
      entities: {
        a: { typeRef: 'GeomRect', props: {}, tracks: {} }
      }
    };
    const parsed = parseSentio(doc);
    expect(parsed.version).toBe('1.0-sentio');
  });
});
