import { Router } from '@angular/router';
import { FileService } from './../../services/file/file.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css'],
})
export class ImportFileComponent implements OnInit {
  file!: File;

  constructor(private fileService: FileService, private router: Router) {}

  ngOnInit(): void {}

  importFile(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    const formData = this.createFormData(this.file);
    this.fileService.post('file/import-excel', formData).subscribe(
      (response) => {
        this.router.navigate(['result']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private createFormData(file: File): FormData {
    const formData = new FormData();
    formData.append('file', file);
    return formData;
  }
}
