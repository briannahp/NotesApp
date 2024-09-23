import UIKit

class NoteFormViewController: UIViewController {

  var onSave: ((String, String) -> Void)? 
  var onCancel: (() -> Void)?

  private let titleField = UITextField()
  private let bodyField = UITextView()
  private let saveButton = UIButton(type: .system)
  private let cancelButton = UIButton(type: .system)

  override func viewDidLoad() {
    super.viewDidLoad()
    view.backgroundColor = .white
    setupUI()
  }

  private func setupUI() {
    titleField.placeholder = "Enter note title"
    titleField.borderStyle = .roundedRect
    view.addSubview(titleField)

    bodyField.layer.borderColor = UIColor.gray.cgColor
    bodyField.layer.borderWidth = 1
    bodyField.layer.cornerRadius = 5
    view.addSubview(bodyField)

    saveButton.setTitle("Save", for: .normal)
    saveButton.addTarget(self, action: #selector(saveNote), for: .touchUpInside)
    view.addSubview(saveButton)

    cancelButton.setTitle("Cancel", for: .normal)
    cancelButton.addTarget(self, action: #selector(cancelNote), for: .touchUpInside)
    view.addSubview(cancelButton)

    titleField.translatesAutoresizingMaskIntoConstraints = false
    bodyField.translatesAutoresizingMaskIntoConstraints = false
    saveButton.translatesAutoresizingMaskIntoConstraints = false
    cancelButton.translatesAutoresizingMaskIntoConstraints = false

    NSLayoutConstraint.activate([
      titleField.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 20),
      titleField.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
      titleField.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
      bodyField.topAnchor.constraint(equalTo: titleField.bottomAnchor, constant: 20),
      bodyField.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
      bodyField.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
      bodyField.heightAnchor.constraint(equalToConstant: 200),
      
      saveButton.topAnchor.constraint(equalTo: bodyField.bottomAnchor, constant: 20),
      saveButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
      
      cancelButton.topAnchor.constraint(equalTo: bodyField.bottomAnchor, constant: 20),
      cancelButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
    ])
  }
  @objc private func saveNote() {
          guard let title = titleField.text, !title.isEmpty,
                let content = bodyField.text, !content.isEmpty else {
              return
          }
          onSave?(title, content)
          dismiss(animated: true, completion: nil)
      }

      @objc private func cancelNote() {
          onCancel?()
          dismiss(animated: true, completion: nil)
      }
}
