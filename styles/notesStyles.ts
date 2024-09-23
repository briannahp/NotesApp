import { StyleSheet } from "react-native";

const notesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282a36",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#44475a",
    padding: 10,
  },
  headerTitle: {
    color: "#f8f8f2",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noteTimestamp: {
    color: "#6272a4",
    fontSize: 12,
    marginTop: 4,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  noteItem: {
    backgroundColor: "#6272a4",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  selectedNoteItem: {
    borderColor: "#50fa7b",
    borderWidth: 2,
  },
  noteTitle: {
    color: "#f8f8f2",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#50fa7b",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    marginTop: 10,
  },
  detailsContainer: {
    flex: 2,
    backgroundColor: "#282a36",
    padding: 15,
  },
  addNoteForm: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#3b3c4f",
    color: "#f8f8f2",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  addNoteContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#6272a4",
  },
  textArea: {
    height: 60,
  },
  saveButton: {
    backgroundColor: "#50fa7b",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#282a36",
    fontWeight: "bold",
  },
  noteDetails: {
    flexGrow: 1,
    justifyContent: "center",
  },
  noteDetailTitle: {
    color: "#f8f8f2",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noteDetailContent: {
    color: "#f8f8f2",
    fontSize: 16,
  },
  placeholderText: {
    color: "#6272a4",
    textAlign: "center",
    marginTop: 20,
  },
});

export default notesStyles;
