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

import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";

export default function LikePage({ navigation, route }) {
  const [tip, setTip] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "Favorite",
    });
    const user_id = Constants.installationId;
    firebase_db.ref("/like/" + user_id).on("value", (snapshot) => {
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
      {Platform.OS === "ios" ? (
        <AdMobBanner
          bannerSize="fullBanner"
          servePersonalizedAds={true}
          adUnitID="ca-app-pub-3940256099942544/2934735716" // test ID
          // adUnitID="ca-app-pub-1523024783956163/3658729477"
          style={styles.banner}
        />
      ) : (
        <AdMobBanner
          bannerSize="fullBanner"
          servePersonalizedAds={true}
          adUnitID="ca-app-pub-3940256099942544/6300978111" // test ID
          // adUnitID="ca-app-pub-1523024783956163/6814487803"
          style={styles.banner}
        />
      )}
      {tip.map((content, i) => {
        return (
          <View>
            <LikeCard key={i} content={content} navigation={navigation} />
          </View>
        );
      })}
      {Platform.OS === "ios" ? (
        <AdMobBanner
          bannerSize="fullBanner"
          servePersonalizedAds={true}
          adUnitID="ca-app-pub-3940256099942544/2934735716" // test ID
          // adUnitID="ca-app-pub-1523024783956163/3658729477"
          style={styles.banner}
        />
      ) : (
        <AdMobBanner
          bannerSize="fullBanner"
          servePersonalizedAds={true}
          adUnitID="ca-app-pub-3940256099942544/6300978111" // test ID
          // adUnitID="ca-app-pub-1523024783956163/6814487803"
          style={styles.banner}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
