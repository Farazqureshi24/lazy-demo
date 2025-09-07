import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormDialog } from './post-form-dialog';

describe('PostFormDialog', () => {
  let component: PostFormDialog;
  let fixture: ComponentFixture<PostFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
