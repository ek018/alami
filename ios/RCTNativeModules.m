//
//  RCTNativeModules.m
//  alami
//
//  Created by Eko Prasetiyo on 15/09/22.
//

#import <Foundation/Foundation.h>

#import "RCTNativeModules.h"

@implementation RCTNativeModules

// To export a module named RCTNativeModules
RCT_EXPORT_MODULE(RCTNativeModules);

RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
//  NSUUID *deviceID = [[UIDevice currentDevice] identifierForVendor];
  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(deviceName);
}
@end
