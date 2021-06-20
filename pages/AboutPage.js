import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import main from "../assets/main.png";
import * as Linking from "expo-linking";
import aboutImage from "../assets/aboutImage.png";

import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";

export default function AboutPage() {
  const link = () => {
    Linking.openURL("https://www.linkedin.com/in/hoseokhan/");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.introText}>Welcome to my Portfolio!!</Text>
      <View style={styles.introView}></View>
      <View style={styles.introContainer}>
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
        <Image style={styles.aboutImage} source={aboutImage} />
        <Text style={styles.bodyText}>
          This page will be updated soon. Thanks for your understanding.
        </Text>
        <Text style={styles.bodyTextSub}>My projects will be updated.</Text>
        <TouchableOpacity style={styles.aboutButton} onPress={() => link()}>
          <Text style={styles.aboutButtonText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202b6d",
  },
  introText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
    marginTop: 50,
    marginLeft: 20,
  },
  introView: {
    width: "90%",
  },
  introContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 10,
    height: 500,
  },
  aboutButton: {
    width: 150,
    height: 50,
    // padding: 15,
    backgroundColor: "#fdc453",
    alignSelf: "center",
    borderRadius: 35,
    // borderColor: "#000",
  },
  aboutButtonText: {
    color: "#fff",
    fontSize: 20,
    margin: 10,
    fontWeight: "700",
    alignSelf: "center",
  },
  aboutImage: {
    //컨텐츠의 넓이 값
    width: "40%",
    //컨텐츠의 높이 값
    height: 100,
    //컨텐츠의 모서리 구부리기
    borderRadius: 10,
    marginTop: 100,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf: "center",
  },
  bodyText: {
    fontSize: 20,
    margin: 30,
    color: "#000",
    fontWeight: "700",
    alignSelf: "center",
  },
  bodyTextSub: {
    fontSize: 15,
    margin: 30,
    color: "#000",
    fontWeight: "700",
    alignSelf: "center",
  },
});
