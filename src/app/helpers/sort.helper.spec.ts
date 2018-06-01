import { TestBed, inject } from '@angular/core/testing';

import { SortHelper } from './sort.helper';


const testBuildings = [{
  'id': 50048,
  'name': 'Northwestern University, Kellogg School of Management',
  'location': ' Chicago, IL, USA',
  'architectId': '18441',
  'description': '<p>Blah blah blah</p>',
  'dateBuilt': '2005-01-01T06:00:00.000Z',
  'isCompleted': true,
  'createdDate': '2017-11-09T16:34:19.572Z',
  'modifiedDate': null,
  'modifiedBy': null,
  'createdBy': 'HUB',
  'category': [{
    'id': 6,
    'name': 'Education',
    'sortOrder': null,
    'createdDate': '2017-11-09T16:07:35.729Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB',
    'BuildingCategory': {
      'id': 12,
      'CategoryId': 6,
      'BuildingId': 50048,
      'createdDate': '2017-11-09T16:37:08.753Z',
      'modifiedDate': null,
      'modifiedBy': null,
      'createdBy': 'HUB'
    }
  }
  ],
  'architect': {
    'id': '18441',
    'firstName': 'Odell',
    'lastName': 'Trantow',
    'createdDate': '2017-11-09T06:00:00.000Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB'
  }
}, {
  'id': 50058,
  'name': 'University of Illinois, Temple Hoyne Buell Hall',
  'location': ' Champaign, IL, USA',
  'architectId': '18441',
  'description': '<p>Lots of words</p>',
  'dateBuilt': '1996-08-01T05:00:00.000Z',
  'isCompleted': true,
  'createdDate': '2017-11-09T16:34:19.572Z',
  'modifiedDate': null,
  'modifiedBy': null,
  'createdBy': 'HUB',
  'category': [{
    'id': 6,
    'name': 'Education',
    'sortOrder': null,
    'createdDate': '2017-11-09T16:07:35.729Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB',
    'BuildingCategory': {
      'id': 13,
      'CategoryId': 6,
      'BuildingId': 50058,
      'createdDate': '2017-11-09T16:37:08.753Z',
      'modifiedDate': null,
      'modifiedBy': null,
      'createdBy': 'HUB'
    }
  }
  ],
  'architect': {
    'id': '18441',
    'firstName': 'Odell',
    'lastName': 'Trantow',
    'createdDate': '2017-11-09T06:00:00.000Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB'
  }
}, {
  'id': 50063,
  'name': 'Wright State University, Campus Master Plan',
  'location': ' Dayton, OH, USA',
  'architectId': '18441',
  'description': 'a bloo blaa blooo',
  'dateBuilt': '2015-01-01T06:00:00.000Z',
  'isCompleted': true,
  'createdDate': '2017-11-09T16:34:19.572Z',
  'modifiedDate': null,
  'modifiedBy': null,
  'createdBy': 'HUB',
  'category': [{
    'id': 6,
    'name': 'Education',
    'sortOrder': null,
    'createdDate': '2017-11-09T16:07:35.729Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB',
    'BuildingCategory': {
      'id': 14,
      'CategoryId': 6,
      'BuildingId': 50063,
      'createdDate': '2017-11-09T16:37:08.753Z',
      'modifiedDate': null,
      'modifiedBy': null,
      'createdBy': 'HUB'
    }
  }
  ],
  'architect': {
    'id': '18441',
    'firstName': 'Odell',
    'lastName': 'Trantow',
    'createdDate': '2017-11-09T06:00:00.000Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB'
  }
}, {
  'id': 50065,
  'name': 'Wright State University, Student Union',
  'location': ' Dayton, Ohio, USA',
  'architectId': '18441',
  'description': 'Blah blah blah blah blah',
  'dateBuilt': null,
  'isCompleted': false,
  'createdDate': '2017-11-09T16:34:19.572Z',
  'modifiedDate': null,
  'modifiedBy': null,
  'createdBy': 'HUB',
  'category': [{
    'id': 6,
    'name': 'Education',
    'sortOrder': null,
    'createdDate': '2017-11-09T16:07:35.729Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB',
    'BuildingCategory': {
      'id': 15,
      'CategoryId': 6,
      'BuildingId': 50065,
      'createdDate': '2017-11-09T16:37:08.753Z',
      'modifiedDate': null,
      'modifiedBy': null,
      'createdBy': 'HUB'
    }
  }
  ],
  'architect': {
    'id': '18441',
    'firstName': 'Odell',
    'lastName': 'Trantow',
    'createdDate': '2017-11-09T06:00:00.000Z',
    'modifiedDate': null,
    'modifiedBy': null,
    'createdBy': 'HUB'
  }
}
];




describe('SortHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortHelper]
    });
  });

  it('should be created', inject([SortHelper], (service: SortHelper) => {
    expect(service).toBeTruthy();
  }));

  it( 'should sort an array by name', inject( [SortHelper], (service: SortHelper) => {

    // test forward sort
    SortHelper.prototype.By(testBuildings, eventPayload => eventPayload.name, {order: 1});
    expect(testBuildings[0].name).toEqual('Northwestern University, Kellogg School of Management');

    // test reverse sort
    SortHelper.prototype.By(testBuildings, eventPayload => eventPayload.name, {order: -1});
    expect(testBuildings[0].name).toEqual('Wright State University, Student Union');

  }));

  it( 'should sort an array by date', inject( [SortHelper], (service:SortHelper) =>{

    // test forward sort
    SortHelper.prototype.By(testBuildings, eventPayload => eventPayload.dateBuilt, {order: 1});
    expect(testBuildings[0].name).toEqual( 'University of Illinois, Temple Hoyne Buell Hall');
    // push nulls to the end
    expect(testBuildings[testBuildings.length - 1].name).toEqual('Wright State University, Student Union');

    // test reverse sort
    SortHelper.prototype.By(testBuildings, eventPayload => eventPayload.dateBuilt, {order: -1});
    expect(testBuildings[0].name).toEqual( 'Wright State University, Campus Master Plan');
    // push nulls to the end
    expect(testBuildings[testBuildings.length - 1].name).toEqual('Wright State University, Student Union');

  }));


});
