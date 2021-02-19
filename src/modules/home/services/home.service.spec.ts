import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('ErrorService', () => {
    let homeService: HomeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HomeService],
        });
        homeService = TestBed.inject(HomeService);
    });

    describe('getError$', () => {
        it('should return Observable<Error>', () => {
            homeService.getError$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
