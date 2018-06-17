import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-stepper-upload',
  templateUrl: './stepper-upload.component.html',
  styleUrls: ['./stepper-upload.component.css']
})
export class StepperUploadComponent implements OnInit {
  linear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public files: UploadFile[] = [];
  segs = [
    {value: 'method', viewValue: 'Method'},
    {value: 'class', viewValue: 'Class'},
    {value: 'package', viewValue: 'Package'}
  ];
  qualities = [
    {value: '0', viewValue: 'Control structures'},
    {value: '1', viewValue: 'Operands and operators'},
    {value: '2', viewValue: 'LOC'},
    {value: '3', viewValue: 'Exception handling'},
    {value: '4', viewValue: 'Memory consumption'},
    {value: '5', viewValue: 'Commented lines'},
    {value: '6', viewValue: 'Composite Complexity'},
    {value: '7', viewValue: 'Blank lines'},
    {value: '8', viewValue: 'Coupling'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  isLinear() {
    return this.linear;
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
