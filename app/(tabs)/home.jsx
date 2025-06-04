import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { MessageModal } from "../../components/MessageModal";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationData, setNotificationData] = useState(null);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => {
          console.log("FCM Token:", token);
        });
    } else {
      console.log("User did not grant permission for notifications.");
    }

    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification opened app from background state:",
        remoteMessage.notification
      );
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const imageUrl = remoteMessage.notification?.android?.imageUrl;
      console.log("Checked data", imageUrl);
      setNotificationData(remoteMessage.notification);
      setModalVisible(true);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.mainBox}>
      <Text>Demo for notification feature</Text>
      {modalVisible && (
        <MessageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          notificationData={notificationData}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#94d0d8",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
