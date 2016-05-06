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
import {StravaService} from './strava-service';


describe('StravaService Service', () => {

  beforeEachProviders(() => [StravaService]);


  it('should ...', inject([StravaService], (service: StravaService) => {

  }));

});
