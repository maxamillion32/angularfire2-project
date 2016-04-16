import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angularfire2ProjectApp} from '../app/angularfire2-project';

beforeEachProviders(() => [Angularfire2ProjectApp]);

describe('App: Angularfire2Project', () => {
  it('should have the `defaultMeaning` as 42', inject([Angularfire2ProjectApp], (app: Angularfire2ProjectApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angularfire2ProjectApp], (app: Angularfire2ProjectApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

