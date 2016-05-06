import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {StravaTimePipe} from './strava-time-pipe';


describe('StravaTimePipe Pipe', () => {

  beforeEachProviders(() => [StravaTimePipe]);


  it('should transform the input', inject([StravaTimePipe], (pipe:StravaTimePipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
