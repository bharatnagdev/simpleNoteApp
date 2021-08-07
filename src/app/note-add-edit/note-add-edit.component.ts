import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { LocalstorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-note-add-edit',
  templateUrl: './note-add-edit.component.html'
})
export class NoteAddEditComponent implements OnInit {
  loading = false;
  submitted = false;
  isShow = false;
  notesForm: FormGroup;
  notes: any = []
  appstate$: any = undefined
  action = 'add'
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalstorageService,
    private commonService: CommonService,
  ) {
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get form() { return this.notesForm.controls; }
  
  ngOnInit(): void {
    if (this.localStorage.getStorageData('notes')) {
      this.notes = JSON.parse(this.localStorage.getStorageData('notes'));
    }
    this.appstate$ = this.activatedRoute.paramMap.pipe(() => window.history.state);
    if (this.appstate$?.queryParams?.action == 'edit' || this.appstate$?.queryParams?.action == 'view') {
      this.action = this.appstate$?.queryParams?.action
      const note = this.appstate$?.queryParams?.note
      let formValues = this.form
      formValues.title.setValue(note.title)
      formValues.description.setValue(note.description)
    }
  }
  
  onSubmit(): void {
    let formValues = this.form
    this.notes.push({
      id: this.notes.length + 1,
      title: formValues.title.value,
      description: formValues.description.value
    })
    this.localStorage.setStorageData('notes', this.notes)
    this.router.navigateByUrl('/note-list')
  }
}
