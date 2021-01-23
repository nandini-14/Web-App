import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadToS3Service {

  BUCKET = 'elasticbeanstalk-us-east-2-109370915501'
  FOLDER = 'resync_portal_document_upload/'

  private getS3Bucket(): any {
    const bucket = new S3(
      {
        accessKeyId: 'AKIARS5YDXKWWIHHVOVK',
        secretAccessKey: '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',
        region: 'us-east-2'
      }
    );

    // const bucket = new S3();

    return bucket;
  }

  uploadfile(file) {
    const params = {
      Bucket: this.BUCKET,
      Key: this.FOLDER + file.name,
      Body: file,
      ACL: 'public-read'
    };

    return new Promise((resolve, reject) => {


      this.getS3Bucket().upload(params, function (err, data) {
        if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
        }

        console.log('Successfully uploaded file.', data);
        resolve(true);
        return true;

      });
    });
  }

  getFiles(): Promise<Array<any>> {
    const params = {
      Bucket: this.BUCKET,
      Prefix: this.FOLDER
    };

    // return of(fileUploads);
    return new Promise((resolve, reject) => {

      this.getS3Bucket().listObjects(params, function (err, data) {
        if (err) {
          console.log('There was an error getting your files: ' + err);
          return;
        }

        console.log('Successfully get files.', data);

        const fileData = data.Contents;

        resolve(fileData);
      });

    });
  }
}
