import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={require("./images/pic.png")} // static image
        />
        <Text style={styles.name}>Angelo Maldora</Text>
        <Text style={styles.course}>Information Technology 3</Text>
      </View>
      <Text style={styles.subject}>My Subjects</Text>
      <View style={styles.row}>
        <Text style={styles.sub1}>ELEC 2</Text>
        <View style={styles.row1}>
          <Text style={styles.caption}>Web Development/Web Enterprise</Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub1}>ELEC 3</Text>
        <View style={styles.row1}>
          <Text style={styles.caption}>Mobile Application</Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub1}>IT 311</Text>
        <View style={styles.row1}>
          <Text style={styles.caption}>Software Engineering</Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub1}>IT 312</Text>
        <View style={styles.row1}>
          <Text style={styles.caption}>
            Information Assurance and Security 2
          </Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.sub1}>IT 313</Text>
        <View style={styles.row1}>
          <Text style={styles.caption}>Quantitative Methods</Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.more}>
        <Text style={styles.mores}>Click here to see more</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  profile: {
    height: 210,
    width: 320,
    backgroundColor: "#23459c",
    marginTop: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    padding: 10,
    flexDirection: "column",
  },
  maintext: {
    color: "white",
    marginTop: 20,
  },
  name: {
    fontSize: 30,
    color: "white",
  },
  course: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  subject: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
  },
  sub1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  caption: {
    marginLeft: 38,
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  row: {
    backgroundColor: "#EEE",
    borderRadius: 10,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    width: 320,
    padding: 10,
  },
  more: {
   
    width: 320,
    alignItems:'flex-end'
  },
  mores: {
    color: "#23459c",
    
  },
  row1: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
