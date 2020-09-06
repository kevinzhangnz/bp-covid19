import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

import { CovidComponent } from './covid.component';

describe('Component: Covid', () => {
    let component: CovidComponent;
    let fixture: ComponentFixture<CovidComponent>;
    let controller: ApolloTestingController;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [CovidComponent],
            imports: [ApolloTestingModule],
        })
            .compileComponents();
    });

    beforeEach(() => {
        controller = TestBed.inject(ApolloTestingController);
        fixture = TestBed.createComponent(CovidComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        controller.verify();
    });

    // TO DO
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

});
