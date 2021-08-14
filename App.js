import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, Pressable, TouchableOpacity } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Pressable style={styles.outsideModal}
          onPress={(event) => { if (event.target == event.currentTarget) { 
            setModalVisible(false); } }} >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderContent}><Text>Other header content</Text></View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalHeaderCloseText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <Text>
                Popup content.
              </Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    margin: 50,
    padding: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  /* The content of the modal takes all the vertical space not used by the header. */
  modalContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black"
  },
  modalHeader: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black"
  },
  /* The header takes up all the vertical space not used by the close button. */
  modalHeaderContent: {
    flexGrow: 1,
  },
  modalHeaderCloseText: {
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  outsideModal: {
    backgroundColor: "rgba(1, 1, 1, 0.2)",
    flex: 1,
  }
});
