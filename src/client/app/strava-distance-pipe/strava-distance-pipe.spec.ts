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
import {StravaDistancePipe} from './strava-distance-pipe';


describe('StravaDistancePipe Pipe', () => {

  beforeEachProviders(() => [StravaDistancePipe]);


  it('should transform the input', inject([StravaDistancePipe], (pipe:StravaDistancePipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
