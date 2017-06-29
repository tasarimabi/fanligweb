import { Injectable } from '@angular/core';

@Injectable()
export class EncodeFileService {
  model: any = {};
  private fileReader: FileReader;
  private base64Encoded: string;

  constructor() {
    this.fileReader.onload = (file) => {
              this.model.image = this.fileReader.result;
              console.log("Encoded file!");
          }
  }

  encodeFile(file : File) {
        this.fileReader.readAsDataURL(file)
      }

}
