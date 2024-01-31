import { Component, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';
import { AppConfig } from 'src/app/appconfig';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './llist.html',
  styleUrls: [],
})
export class listComponent implements OnInit {
  constructor(private datamanager: DataManagerService) {}

  ngOnInit() {
    this.getList();
  }
  dataList: any = '';
  getList() {
    this.datamanager.APIGenericGetMethod(AppConfig.HELLO).subscribe((data) => {
      if (data) {
        console.log(data);
        this.dataList = data;
      } else {
        console.log('error');
      }
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { DataManagerService } from 'src/app/services/data-manager.service';
// import { AppConfig } from 'src/app/appconfig';
// import { LocalStorageService } from 'src/app/services/local-storage.service';

// @Component({
//   selector: 'app-chatpage',
//   templateUrl: './llist.html',
//   styleUrls: [],
// })
// export class listComponent implements OnInit {
//   constructor(private datamanager: DataManagerService) {}

//   ngOnInit() {
//     this.getList();
//   }
//   dataList: string[] = [];
//   getList() {
//     // Assuming APIGenericGetMethod returns an Observable
//     this.datamanager.APIGenericGetMethod(AppConfig.HELLO).subscribe(
//       (data: any) => {
//         // You might want to replace 'any' with the actual type of your data
//         if (data) {
//           this.dataList = data;
//           console.log(data);
//           // Now you can access properties of the data object, for example:
//           // console.log(data.someProperty);
//         } else {
//           console.log('error');
//         }
//       },
//       (error) => {
//         console.error('Error fetching data:', error);
//       }
//     );
//   }
// }
