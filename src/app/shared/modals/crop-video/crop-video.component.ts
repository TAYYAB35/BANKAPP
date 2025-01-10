import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { PagesService } from '@services/pages.service';
import { SharedService } from '@services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crop-video',
  templateUrl: './crop-video.component.html',
  styles: ``
})
export class CropVideoComponent {
  videoFile: File | null = null;
  videoData: { image: any; imageName: any; name: string; size: string; loading: boolean }[] = [];
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fileInput2', { static: false }) fileInput2!: ElementRef<HTMLInputElement>;

  @Output() imageChange = new EventEmitter<any>();
  @Input() fileData: string = '';
  @Input() filePath: string = '';
  @Input() fileName: string = '';
  @Input() fileSize: string = '';
  videoPath = environment.imagePath;
  videoThumbnail: any;

  videoName: string = '';
  isLoading: boolean = false;
  editImageIndex: number = -1;

  sharedService = inject(SharedService);
  pagesService = inject(PagesService);
  videoPreviewUrl: any;

  ngOnInit() {
    if (this.fileData) {
      const imageDetails = JSON.parse(this.fileData)
      if (imageDetails) {
        this.filePath = imageDetails?.image;
        this.fileName = imageDetails?.name;
        this.fileSize = imageDetails?.size;
      }
    }
    if (this.filePath) {
      this.checkVideo(this.filePath);
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileChangeV1(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const allowedExtensions = ['mp4', 'mov', 'avi']; // Allowed video extensions

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        // Bind the video file for later use
        this.videoFile = file;
        this.videoName = file.name;

        // Validate file size (example: max 1 GB)
        const maxFileSize = 4 * 1024 * 1024 * 1024; // 1 GB
        if (file.size > maxFileSize) {
          this.sharedService.createNotification('error', 'File size exceeds the maximum limit of 1 GB.');
          fileInput.value = ''; // Reset file input
          return;
        }

        // Use FileReader to preview the video
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.videoPreviewUrl = e.target.result; // Set the video preview URL

          // Automatically trigger upload after preview
          const sizeString = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
          // this.updatePicture(sizeString, this.videoFile, this.videoName, 'video'); // Call updatePicture for upload
        };
        reader.readAsDataURL(file);
      } else {
        this.sharedService.createNotification('error', "Invalid file type. Please select a valid video (mp4, mov, avi).");
      }

      fileInput.value = ''; // Reset file input
    }
  }
  onFileChange(event: Event): void {
    debugger
    const fileInput = event.target as HTMLInputElement;
    const allowedExtensions = ['mp4', 'mov', 'avi']; // Allowed video extensions

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        // Bind the video file for later use
        this.videoFile = file;
        this.videoName = file.name;

        const maxFileSize = 16 * 1024 * 1024; // 16 MB
        if (file.size > maxFileSize) {
          this.sharedService.createNotification('error', 'File size exceeds the maximum limit of 16 MB.');
          fileInput.value = ''; // Reset file input
          return;
        }
        const reader = new FileReader();
        reader.onload = async (e: any) => {
          this.videoPreviewUrl = e.target.result; // Set the video preview URL

          // Automatically trigger upload after preview
          const sizeString = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
          await this.updatePicture(sizeString, this.videoFile, this.videoName, 'video'); // Call updatePicture for upload

          const videoElement = document.createElement('video');
          videoElement.src = URL.createObjectURL(file);
          videoElement.muted = true;
          videoElement.playsInline = true;
          videoElement.crossOrigin = 'anonymous'; // Ensures the canvas can capture frames if the video is from another origin

          // Ensure the video is fully loaded
          videoElement.addEventListener('loadeddata', () => {
            // Set a specific time to capture the thumbnail (e.g., 2 seconds)
            videoElement.currentTime = Math.min(2, videoElement.duration / 2); // Avoid seeking beyond video duration
          });

          videoElement.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            const context = canvas.getContext('2d');
            if (context) {
              // Draw the current frame of the video onto the canvas
              context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
              this.videoThumbnail = canvas.toDataURL('image/png'); // Convert the canvas content to a Base64 image
              this.updatePicture('1', this.dataURLToBlob(this.videoThumbnail), `thumbnail.png`, 'thumbnail');
              // Cleanup
              URL.revokeObjectURL(videoElement.src);

              // Display or use the thumbnail as needed
              // this.sharedService.createNotification('success', 'Thumbnail generated successfully.');
            }
          });

          videoElement.addEventListener('error', () => {
            this.sharedService.createNotification('error', 'Failed to load the video.');
            fileInput.value = ''; // Reset file input
          });

          videoElement.load(); // Load the video
        };
        reader.readAsDataURL(file);
        // Generate a thumbnail

      } else {
        this.sharedService.createNotification('error', "Invalid file type. Please select a valid video (mp4, mov, avi).");
      }

      fileInput.value = ''; // Reset file input
    }
  }


  deleteImage(index: any) {
    this.videoData.splice(index, 1);
    this.imageChange.emit('');
  }

  async updatePicture(sizeString: any, file: any, name: any, type: string) {
    if (file) {
      this.isLoading = true;
      this.sharedService.showLoader();
      const formData = new FormData();

      // Append the video file to the form data
      formData.append('file', file, name || 'video.mp4');

      try {
        const response: any = await this.pagesService
          .update(type == 'video' ? 'VIDEO_UPLOAD_FILE' : 'UPLOAD_FILE', formData)
          .toPromise(); // Convert Observable to Promise

        this.isLoading = false;
        this.sharedService.hideLoader();

        if (response?.result?.successFlag) {
          if (type == 'video') {
            const uploadedVideoData = {
              image: response?.result.data,
              name: name,
              imageName: this.videoThumbnail,
              size: sizeString,
              loading: false,
            };

            // Handle response data as needed
            if (this.videoData?.length > 0) {
              this.videoData = [uploadedVideoData];
            } else {
              if (this.editImageIndex !== -1) {
                this.videoData[this.editImageIndex] = uploadedVideoData;
                this.editImageIndex = -1;
              } else {
                this.videoData.push(uploadedVideoData);
                console.log(this.videoData);
              }
            }
          } else {
            this.videoData[0].imageName = response?.result.data;
            this.imageChange.emit(this.videoData[0]);
          }
        } else {
          this.sharedService.createNotification('error', response.message);
        }
      } catch (error: any) {
        this.isLoading = false;
        this.sharedService.hideLoader();
        console.error('Failed to upload video', error?.message);
        this.sharedService.createNotification('error', error?.message);
      }
    } else {
      console.log('No video file to upload.');
      this.sharedService.createNotification('error', 'No video file selected.');
    }
  }

  dataURLToBlob(dataURL: string): Blob {
    const parts = dataURL.split(',');
    const mime = parts[0].match(/:(.*?);/)?.[1] || 'image/png';
    const byteString = atob(parts[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([uint8Array], { type: mime });
  }

  handleFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.onFileChange({ target: { files: event.dataTransfer.files } } as unknown as Event);
    }
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  checkVideo(videoPath: string): void {
    const obj: any = {
      image: this.filePath,
      name: this.fileName, // Adjust path as needed
      size: this.fileSize,
      loading: true
    };

    this.videoData.push(obj); // Assuming you have a `croppedVideo` array
    // fetch(this.videoPath + videoPath)
    //   .then(async response => {
    //     const contentType: string | null = response.headers.get('Content-Type');
    //     const contentLength: string | null = response.headers.get('Content-Length');

    //     // Convert contentLength to bytes
    //     const sizeInBytes = parseInt(contentLength || '0', 10);
    //     const sizeInMB = sizeInBytes / (1024 * 1024); // Convert bytes to MB
    //     const sizeInKB = sizeInBytes / 1024; // Convert bytes to KB

    //     // Validate file type
    //     const validTypes = ['video/mp4', 'video/avi', 'video/mov']; // Add more types as needed
    //     if (!contentType || !validTypes.includes(contentType)) {
    //       console.error('Invalid file type. Only MP4, AVI, and MOV are allowed.');
    //       return;
    //     }

    //     // Create a video element to extract metadata
    //     const videoBlob = await response.blob();
    //     const videoUrl = URL.createObjectURL(videoBlob);
    //     const videoElement = document.createElement('video');

    //     videoElement.src = videoUrl;

    //     videoElement.onloadedmetadata = () => {
    //       const { videoWidth, videoHeight, duration } = videoElement;

    //       // Metadata validation
    //       // if (videoWidth < 600 || videoHeight < 600) {
    //       //   console.error('Video resolution must be at least 600x600 pixels.');
    //       //   return;
    //       // }

    //       // if (duration > 240 * 60) {
    //       //   console.error('Video duration exceeds the maximum limit of 240 minutes.');
    //       //   return;
    //       // }

    //       // Create object with video metadata

    //       console.log('Video validated and added:', obj);
    //     };

    //     videoElement.onerror = () => {
    //       console.error('Error loading video metadata. Please check the video file.');
    //     };
    //   })
    //   .catch(error => {
    //     console.error('Error fetching the video:', error);
    //   });
  }

  triggerEdit(index: number): void {
    this.editImageIndex = index;

    setTimeout(() => {
      if (this.fileInput2?.nativeElement) {
        this.fileInput2.nativeElement.click();
      } else {
        console.error('fileInput2 is still not available after rendering.');
      }
    }, 0); // Use a short delay to let Angular render the DOM
  }


}
