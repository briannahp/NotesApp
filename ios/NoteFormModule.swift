import Foundation
import UIKit

@objc(NoteFormModule)
class NoteFormModule: NSObject {

    @objc func showNoteForm(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        DispatchQueue.main.async {
            guard let rootViewController = UIApplication.shared.keyWindow?.rootViewController else {
                reject("no_view_controller", "Could not find the root view controller.", nil)
                return
            }

            let noteFormVC = NoteFormViewController()

            noteFormVC.onSave = { title, body in
                resolve(["title": title, "body": body])
            }

            noteFormVC.onCancel = {
                resolve(nil)
            }

            rootViewController.present(noteFormVC, animated: true, completion: nil)
        }
    }


    private func getTopViewController() -> UIViewController? {
        if let rootViewController = UIApplication.shared.windows.first?.rootViewController {
            var topController = rootViewController
            while let presentedViewController = topController.presentedViewController {
                topController = presentedViewController
            }
            return topController
        }
        return nil
    }
}

