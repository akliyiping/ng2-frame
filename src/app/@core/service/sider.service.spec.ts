import { TestBed, inject } from '@angular/core/testing';

import { SiderService } from './sider.service';

describe('SiderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiderService]
    });
  });

  it('should be created', inject([SiderService], (service: SiderService) => {
    expect(service).toBeTruthy();
  }));
});
