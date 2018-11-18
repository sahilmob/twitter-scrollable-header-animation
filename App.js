import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header} />
				<ScrollView style={styles.headerScrollView}>
					<View style={styles.imgContainer}>
						<Image style={styles.img} source={require("./assets/img.png")} />
					</View>
					<View style={styles.name}>
						<Text>Sahil H. Mobaidin</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#F5FCFF"
	},
	header: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: "lightskyblue",
		height: HEADER_MAX_HEIGHT
	},
	headerScrollView: {
		flex: 1
	},
	imgContainer: {
		height: PROFILE_IMAGE_MAX_HEIGHT,
		width: PROFILE_IMAGE_MAX_HEIGHT,
		borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
		borderColor: "white",
		borderWidth: 3,
		overflow: "hidden",
		marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
		marginLeft: 10
	},
	img: {
		flex: 1,
		width: null,
		height: null
	},
	name: {
		fontWeight: "bold",
		fontSize: 26,
		paddingLeft: 10
	}
});
