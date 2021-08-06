import { Component, OnInit } from '@angular/core';
import { EventData, GestureStateTypes, ImageSource, PanGestureEventData, View } from '@nativescript/core';
import { fromData } from '@nativescript/core/image-source';

import { Image } from "@nativescript/core/ui/image"

import * as SocialShare from "nativescript-social-share";

// import { fromFile } from '@nativescript/core/image-source';
// import * as BitmapFactory from "nativescript-bitmap-factory";

// import * as plugin from "nativescript-screenshot";
// import * as KnownColors from "color/known-colors";
// import * as SocialShare from "nativescript-social-share";
// var resultImage: ImageSource;

// export function navigatingTo(args: EventData) {

//     var myImage = fromFile("~/images/cosmos.jpg");
//     var bmp = BitmapFactory.asBitmap(myImage.toBase64String("jpg", 100));

//     var myImage2 = fromFile("~/images/another.png");
//     var bmp2 = BitmapFactory.asBitmap(myImage2.toBase64String("jpg", 100));

//     bmp.dispose(() => {

//         // write to x 100 and y 100 in blue color and with 48 font-size (can provide font as well)
//         bmp.writeText("TEST!", "100,100", {
//             color: '#0000ff',
//             size: 48
//         });

//         //crop bmp2
//         var tmpBmp = bmp2.crop( {x:128,y:0}, {width:128, height:128} );
//         //insert cropped bmp2 to bmp
//         bmp.insert(tmpBmp, "25,50");

//         // ... and as ImageSource
//         var resultImage = bmp.toImageSource();

//         SocialShare.shareImage(resultImage);
//     });

// }


@Component({
  selector: "app-take-screenshot ",
  moduleId: module.id,
  templateUrl: './take-screenshot.component.html',
  styleUrls: ['./take-screenshot.component.scss']

})


export class TakeScreenshotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTap(args: EventData) {
    // console.log(args);
    const view = args.object as View;
    
    const targetView = view.page.getViewById('layout') as View;
    // const img = view.page.getViewById('img') as Image;

    console.log(targetView);
    const screenShot = getImage(targetView);

    // let image = ImageSource.fromFile("~/path/to/myImage.jpg");
    SocialShare.shareImage(screenShot);

    // img.imageSource = screenShot;

    // img.visibility = 'visible';

  }

  // onLoaded(args: EventData) {
  //   const imageSource = plugin.getImage(args.object);
  //   console.log(imageSource);
  //   // return imageSource;
  // }

  onPan(args: PanGestureEventData) {
    const view = args.object as View;
    if(args.state === GestureStateTypes.changed) {
      view.translateX =  args.deltaX;
      view.translateY = args.deltaY;
    }
  }


}

function getBitmapFromView(view: View) {
  const height = view.android.getMeasuredHeight();
  const width = view.android.getMeasuredWidth();
  var bitmap = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
  // const bitmap =  androidx.core.view.drawToBitmap(view, android.graphics.Bitmap.Config.ARGB_8888)
  // bitmap = view.android.drawToBitmap(view, android.graphics.Bitmap.Config.ARGB_8888);
  var canvas = new  android.graphics.Canvas(bitmap);
  view.android.draw(canvas)
  return bitmap;
}

// function checkIfViewRendered() {
//   setTimeout(function() {
//       height = view.getMeasuredHeight()
//   }, 100)
//   if (height === 0) checkIfViewRendered()
//   else console.log('rendered height is', height)
// }


// export function onPan(args: PanGestureEventData) {
//   const view = args.object as View;
//   if(args.state === GestureStateTypes.changed) {
//     view.translateX =  args.deltaX;
//     view.translateY = args.deltaY;
//   }
// }


export function getImage(view: View) {
  if (view.ios) {
    // ios logic
    UIGraphicsBeginImageContextWithOptions(view.ios.frame.size, false, 0);
    view.ios.drawViewHierarchyInRectAfterScreenUpdates(CGRectMake(0, 0, view.ios.frame.size.width,
      view.ios.frame.size.height), true);
    var imageFromCurrentImageContext = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return fromData(UIImagePNGRepresentation(imageFromCurrentImageContext));

  } else if (view.android) {
    // android logic  
    
    // view.android.setDrawingCacheEnable(true);
    // const bmp = android.graphics.Bitmap.createBitmap(view.android.getDrawingCache());
    const bmp = getBitmapFromView(view);
    // var canvas = new android.graphics.Canvas();
    // view.android.setDrawingCacheEnable(false);
    const source = new ImageSource();
    source.setNativeSource(bmp);
    console.log(source);
    return source;
    // var bmp = BitmapFactory.create(640, 480);

    // // work with bitmap and
    // // keep sure to free memory
    // // after we do not need it anymore
    // bmp.dispose(() => {
    //     // draw an oval with a size of 300x150
    //     // and start at position x=0, y=75
    //     // and use
    //     // "red" as border color and "black" as background color.
    //     bmp.drawOval("300x150", "0,75");
          
                      
    //     // set a yellow point at x=160, y=150
    //     bmp.setPoint("160,150", "ff0");
        
    //     // draws a line from (0|150) to (300|75)
    //     // with blue color
    //     bmp.drawLine("0,150", "300,75", '#0000ff');
        
    //     // writes a text in yellow color
    //     // at x=100, y=100
    //     // by using "Roboto" as font
    //     // with a size of 10
    //     bmp.writeText("This is a test!", "100,100", {
    //         size: 10,
    //         name: "Roboto"
    //     });
        
    //     // returns the current bitmap as data URL
    //     // which can be used as ImageSource
    //     // in JPEG format with a quality of 75%
    //     var data = bmp.toDataUrl(BitmapFactory.OutputFormat.JPEG, 75);
        
    //     // ... and in Base64 format
    //     var base64JPEG = bmp.toBase64(BitmapFactory.OutputFormat.JPEG, 75);
        
    //     // ... and as ImageSource
    //     var imgSrc = bmp.toImageSource();
    //     console.log(imgSrc)
    //     return imgSrc;
    // });
  }

  return undefined;
}

