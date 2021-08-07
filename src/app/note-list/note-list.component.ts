import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { LocalstorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html'
})
export class NoteListComponent implements OnInit {

  notes: any = []
  constructor(
    private localStorage: LocalstorageService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    if (this.localStorage.getStorageData('notes')) {
      this.notes = JSON.parse(this.localStorage.getStorageData('notes'));
    }
    
  }

  addNoteHandler() {
    this.commonService.selectedNote.next('')
    this.router.navigateByUrl('/note-add-edit')
  }

  viewNote(note: any, action: string) {
    if (action == 'delete') {
      this.notes.map((item: any, index: number) => {
        if (item.id == note.id) {
          this.notes.splice(index,1)
        }
      })
      this.localStorage.setStorageData('notes', this.notes)
      
    } else {
      this.commonService.selectedNote.next(note.id)
        this.router.navigate(['/note-add-edit'], {
          state: {
            queryParams: {
              action: action,
              note: note
            }
            
          }
      })
    }
    
  }
}
