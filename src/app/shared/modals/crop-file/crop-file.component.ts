import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PagesService } from '@services/pages.service';
import { SharedService } from '@services/shared.service';
import Cropper from 'cropperjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crop-file',
  templateUrl: './crop-file.component.html',
})
export class CropFileComponent {

  isVisible = false;
  cropper!: Cropper;
  // img upload and crop
  isLoading: boolean = false;
  @ViewChild('image', { static: false }) imageElement!: ElementRef;
  @ViewChild('imageElemen', { static: false }) imageElemen!: ElementRef;
  imageUrl: string | ArrayBuffer | null = null;
  editImageIndex: number = -1;
  croppedImage: { image: string; name: string; size: string; loading: boolean }[] = [];
  imageName: string = '';
  uploadProgress: number = 0;
  @Input() adType: string = '';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Output() imageChange = new EventEmitter<any>();
  imagePath = environment.imagePath;
  @Input() fileData: string = '';
  @Input() filePath: string = '';
  @Input() fileName: string = '';
  @Input() fileSize: string = '';
  constructor(private pagesService: PagesService,
    private sharedService: SharedService,
  ) {

  }
  ngOnInit(): void {
    if (this.fileData) {
      const imageDetails = JSON.parse(this.fileData)
      if (imageDetails) {
        this.filePath = imageDetails?.image;
        this.fileName = imageDetails?.name;
        this.fileSize = imageDetails?.size;
      }
    }
    if (this.filePath) {
      this.checkImage(this.filePath);
    }

  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  croppedImageBlob: any = null; // Add this to store the cropped image Blob
  croppedLoader: boolean = false;

  getCroppedImage(): void {

    this.croppedLoader = true;
    const croppedCanvas = this.cropper.getCroppedCanvas();
    if (croppedCanvas) {
      croppedCanvas.toBlob((blob) => {
        if (blob) {
          const croppedImageSize = blob.size; // Cropped image size in bytes
          const croppedDataURL = croppedCanvas.toDataURL('image/png');
          let sizeInKB = croppedImageSize / 1024;
          let sizeInMB = sizeInKB / 1024;
          let sizeString = sizeInMB >= 1 ? `${sizeInMB.toFixed(2)} MB` : `${sizeInKB.toFixed(2)} KB`;

          // Store the blob for later use in the updatePicture method
          this.croppedImageBlob = blob;
          this.updatePicture(sizeString, croppedDataURL);
          this.isVisible = false;
          // console.log('Cropped Image Details:', this.croppedImage);
        }
      }, 'image/png');
    }
  }


  // Toolbar methods
  zoomIn(): void {
    this.cropper.zoom(0.1);
  }

  zoomOut(): void {
    this.cropper.zoom(-0.1);
  }

  moveLeft(): void {
    this.cropper.move(-10, 0);
  }

  moveRight(): void {
    this.cropper.move(10, 0);
  }

  moveUp(): void {
    this.cropper.move(0, -10);
  }

  moveDown(): void {
    this.cropper.move(0, 10);
  }

  rotateLeft(): void {
    this.cropper.rotate(-45);
  }

  rotateRight(): void {
    this.cropper.rotate(45);
  }

  reset(): void {
    this.cropper.reset();
  }

  clear(): void {
    this.cropper.clear();
  }

  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const allowedExtensions = ['jpg', 'jpeg', 'png']; // Allowed image extensions

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        this.isVisible = true;
        const reader = new FileReader();
        this.imageName = file.name;
        reader.onload = (e: any) => {
          this.imageUrl = e.target.result;
          setTimeout(() => {
            this.initializeCropper();
          }, 100); // Add slight delay to ensure image is loaded
        };
        reader.readAsDataURL(file);
      } else {
        this.sharedService.createNotification('error', "Invalid file type. Please select a valid image (jpg, jpeg, png).");
      }

      fileInput.value = ''; // Reset file input
    }
  }

  initializeCropper(): void {
    if (this.cropper) {
      this.cropper.destroy();
    }
    const image = this.imageElement.nativeElement;
    this.cropper = new Cropper(image, {
      aspectRatio: NaN,
      viewMode: 2,
      zoomable: true,
      scalable: true,
      movable: true,
      rotatable: true,
    });
  }

  deleteImage(index: any) {
    this.croppedImage.splice(index, 1);
    this.imageChange.emit('');
    // if (this.campaignDetails.type === 'Snapchat') {
    //   this.contentForm.controls['media'].setValue('');
    // } else {
    //   this.fbMediaControl();
    // }
  }

  editImage(item: any, index: number): void {
    this.editImageIndex = index;
    this.imageUrl = this.imagePath + item.image;
    this.isVisible = true;
    this.imageName = this.imagePath + item.name;
    if (this.cropper) {
      this.cropper.destroy();
    }
    setTimeout(() => {
      this.initializeCropper();
    }, 100); // Add slight delay to ensure image is loaded

  }

  updatePicture(sizeString: any, croppedDataURL: any): void {
    if (this.croppedImageBlob) {
      this.croppedLoader = true
      this.isLoading = true;
      this.sharedService.showLoader();
      const formData = new FormData();
      this.uploadProgress = 0;
      // Use the cropped image Blob and provide a name
      formData.append('file', this.croppedImageBlob, this.imageName || 'cropped-image.png');

      this.pagesService.update('UPLOAD_FILE', formData).subscribe(
        (response) => {
          this.croppedLoader = false;
          if (response?.result?.successFlag) {
            // Push object containing the cropped image and metadata
            if (this.croppedImage?.length > 0) {
              const obj = {
                image: response?.result.data,
                name: this.imageName, // Original file name
                size: sizeString, // Cropped image size
                loading: true
              }
              this.croppedImage = [obj];
              this.sharedService.hideLoader();
            }
            else {
              if (this.editImageIndex != -1) {
                this.croppedImage[this.editImageIndex] = {
                  image: response?.result.data,
                  name: this.imageName, // Original file name
                  size: sizeString, // Cropped image size
                  loading: true
                }
                this.editImageIndex = -1
              } else {
                this.croppedImage.push({
                  image: response?.result.data,
                  name: this.imageName,
                  size: sizeString,
                  loading: true
                });
              }
              this.sharedService.hideLoader();
            }
            this.imageChange.emit(this.croppedImage[0]);
            this.sharedService.hideLoader();

            // if (this.campaignDetails.type === 'Snapchat') {
            //   this.contentForm.controls['media'].setValue('');
            //   this.contentForm.controls['media'].setValue(response?.result.data);
            // } else
            //   this.fbMediaControl();

            this.croppedImageBlob = null; // Reset the Blob after upload
          } else {
            this.sharedService.createNotification('error', response.message);
            this.sharedService.hideLoader();
          }
        },
        (error) => {
          this.croppedLoader = false;
          this.sharedService.hideLoader();
          console.error('Failed to update profile picture', error.message);
          this.sharedService.createNotification('error', error.message);
        },
      );
    } else {
      // this.imageForm.markAllAsTouched();
      this.croppedLoader = false;
      console.log('Form is invalid or cropped image is missing');
    }
  }
  // custom
  triggerFileInput() {
    this.fileInput.nativeElement.click(); // Triggers the file input click
  }

  handleFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.fileInput.nativeElement.files = event.dataTransfer.files; // Assign dropped files to the file input
      // Manually trigger change event
      const changeEvent = new Event('change');
      this.fileInput.nativeElement.dispatchEvent(changeEvent);
    }
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault(); // Prevent default behavior to allow file drop
  }
  checkImage(imageUrl: string) {
    const obj = {
      image: this.filePath,
      name: this.fileName, // Adjust path as needed
      size: this.fileSize,
      loading: true
    }
    this.croppedImage.push(obj);
    // fetch(this.imagePath + imageUrl)
    //   .then(response => {
    //     const contentType: any = response.headers.get('Content-Type');
    //     const contentLength: any = response.headers.get('Content-Length');

    //     // Convert contentLength to bytes
    //     const sizeInBytes = parseInt(contentLength || '0', 10);
    //     const sizeInMB = sizeInBytes / (1024 * 1024); // Convert bytes to MB
    //     const sizeInKB = sizeInBytes / 1024; // Convert bytes to KB

    //     // Check the file type
    //     const validTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add other types as needed
    //     if (!validTypes.includes(contentType)) {
    //       console.error('Invalid file type. Only JPEG, PNG, and GIF are allowed.');
    //       return;
    //     }
    //     const obj: any = {
    //       image: imageUrl,
    //       name: imageUrl.replace("Resources/Images/", ''),
    //       size: 0,
    //       loading: true
    //     }
    //     if (sizeInMB >= 1)
    //       obj.size = sizeInMB.toFixed(2);
    //     else
    //       obj.size = sizeInKB.toFixed(2);

    //     this.croppedImage.push(obj);

    //   })
    //   .catch(error => {
    //     console.error('Error fetching the image:', error);
    //   });
  }
}
