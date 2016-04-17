import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angularfire2ProjectApp} from '../app/angularfire2-project';

beforeEachProviders(() => [Angularfire2ProjectApp]);

describe('App: Angularfire2Project', () => {
  it('should have the `defaultMeaning` as 42', inject([Angularfire2ProjectApp], (app: Angularfire2ProjectApp) => {
    
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angularfire2ProjectApp], (app: Angularfire2ProjectApp) => {
      
    }));
  });
});

