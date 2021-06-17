import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import LikeCard from "../components/LikeCard";
import Loading from "../components/Loading";
import Constants from "expo-constants";
import { firebase_db } from "../firebaseConfig";

export default function LikePage({ navigation, route }) {
  const [tip, setTip] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "Favorite",
    });
    const user_id = Constants.installationId;
    firebase_db
      .ref("/like/" + user_id)
      .once("value")
      .then((snapshot) => {
        console.log("파이어베이스에서 데이터 가져왔습니다!!");
        let tip = snapshot.val();
        console.log(tip);
        let tip_list = Object.values(tip);
        if (tip_list.length > 0) {
          setTip(tip_list);
          setReady(false);
        }
      });
  }, []);

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      {tip.map((content, i) => {
        return (
          <View>
            <LikeCard key={i} content={content} navigation={navigation} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
