import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Props {
  open: boolean;
  closeModal: () => void;
}

const ProfileModal = (props: Props) => {
  const { open, closeModal } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSubmitProfile = () => {
    closeModal();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal onRequestClose={closeModal} visible={open} transparent={true}>
          <View style={styles.modalCeneterView}>
            <View style={styles.modalWrapper}>
              <View className="mb-4">
                <Text className="font-rubik-medium text-black-300 mb-2">
                  First Name
                </Text>
                <TextInput
                  placeholder="Enter first name"
                  className="font-rubik-medium border border-primary-300 px-4 rounded-lg"
                  value={firstName}
                  onChangeText={(value: string) => setFirstName(value)}
                />
                <Text className="font-rubik-medium text-black-300 my-2">
                  Last Name
                </Text>
                <TextInput
                  placeholder="Enter last name"
                  className="font-rubik-medium border border-primary-300 px-4 rounded-lg"
                  value={lastName}
                  onChangeText={(value: string) => setLastName(value)}
                />
                <Text className="font-rubik-medium text-black-300 my-2">
                  Phone Numner
                </Text>
                <TextInput
                  placeholder="Enter phone number"
                  className="font-rubik-medium border border-primary-300 px-4 rounded-lg"
                  value={phoneNumber}
                  keyboardType="numeric"
                  onChangeText={(value: string) => setPhoneNumber(value)}
                />
                <View className="flex flex-row items-center my-2">
                  <Text className="font-rubik-medium text-black-300 mr-2">
                    Profile Enabled
                  </Text>
                  <Switch
                    value={toggle}
                    trackColor={{ true: "#0061FF1A" }}
                    thumbColor={toggle ? "#0061FF" : "white"}
                    onValueChange={(value: boolean) => setToggle(value)}
                  />
                </View>
              </View>
              <Button
                title="Submit"
                color={"#0061FF"}
                onPress={() => handleSubmitProfile()}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  modalCeneterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalWrapper: {
    padding: 16,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
  },
});

export default ProfileModal;
