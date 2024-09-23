#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NoteFormModule, NSObject)

RCT_EXTERN_METHOD(
  showNoteForm:(RCTPromiseResolveBlock)resolve
  rejecter:(RCTPromiseRejectBlock)reject
);
@end


