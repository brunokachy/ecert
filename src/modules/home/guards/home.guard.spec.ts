import { TestBed } from '@angular/core/testing';

import { HomeGuard } from './home.guard';

describe('Error Guards', () => {
    let homeGuard: HomeGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [HomeGuard],
        });
        homeGuard = TestBed.inject(HomeGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            homeGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
