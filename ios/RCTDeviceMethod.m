//
//  RCTNativeModules.m
//  alami
//
//  Created by Eko Prasetiyo on 15/09/22.
//

#import <React/RCTLog.h>
#import "RCTDeviceMethod.h"

@implementation RCTDeviceMethod

// To export a module named RCTDeviceMethod
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
//  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(uniqueIdentifier);
}
@end
