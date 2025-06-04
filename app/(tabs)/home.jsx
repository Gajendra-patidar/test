import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import messaging from "@react-native-firebase/messaging";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomCard } from "../../components/CustomCard";
import { ExtraBox } from "../../components/ExtraBox";
import { MessageModal } from "../../components/MessageModal";
import { SearchBar } from "../../components/SearchBar";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationData, setNotificationData] = useState(null);
  const [notifyCount, setNotifyCount] = useState(0);
  const rotation = useRef(new Animated.Value(0)).current;

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  const swing = () => {
    Animated.sequence([
      Animated.timing(rotation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: -1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotate = rotation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-15deg", "0deg", "15deg"],
  });

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
    <View style={styles.box}>
      <View>
        <SearchBar />
      </View>
      <View style={styles.mainBox}>
        <Text style={styles.heading}>Welcome! to my home page</Text>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        >
          <Animated.View style={{ transform: [{ rotate }] }}>
            <FontAwesome5
              name="bell"
              size={50}
              color="#ff0d05"
              style={styles.searchIcon}
            />
          </Animated.View>
          <View style={styles.badge}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {notifyCount}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.notifyBtn}
            onPress={() => {
              setNotifyCount(notifyCount + 1);
              swing();
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Notify</Text>
          </TouchableOpacity>
          <View>
          <ExtraBox/>
        </View>
        </View>
        <ScrollView horizontal={true} style={{marginHorizontal:10}} >
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <View key={index}  >
                <CustomCard />
              </View>
            );
          })}
        </ScrollView>
        
      </View>
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
  box: {
    width: "100%",
    height: "100%",
    backgroundColor: "#94d0d8",
  },
  mainBox: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: 165,
    zIndex: 1,
    backgroundColor: "#ff0d05",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  notifyBtn: {
    width: 100,
    height: 40,
    padding: 10,
    backgroundColor: "#05eeff",
    borderRadius: 20,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
