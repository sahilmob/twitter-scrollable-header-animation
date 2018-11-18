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
					<View>
						<Text style={styles.name}>Sahil H. Mobaidin</Text>
					</View>
					<View>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
							velit quis metus aliquam sodales. Mauris varius bibendum nulla, a
							faucibus ligula rhoncus et. Nulla eget tempus mi. Nullam at semper
							leo. Nulla facilisi. Sed in tellus id turpis placerat venenatis at
							at augue. Ut sit amet laoreet nulla, eget fermentum orci.
							Pellentesque sed lacus diam. Sed et enim nisl. Phasellus luctus
							sodales velit, non hendrerit eros ornare at. Sed sapien dolor,
							vestibulum a quam nec, auctor gravida leo. Quisque ac nulla vitae
							lorem ultricies posuere. Fusce viverra dignissim commodo.
							Vestibulum at accumsan leo, in dictum purus. Fusce pulvinar dictum
							fringilla. Morbi auctor scelerisque enim non gravida. Sed
							ultricies ipsum in viverra commodo. Maecenas pharetra sem nisi, id
							blandit urna maximus sit amet. Proin consequat magna id nunc
							vestibulum rutrum. Etiam a dignissim orci. Fusce quis diam nec
							purus fringilla sodales id eu nisi. Orci varius natoque penatibus
							et magnis dis parturient montes, nascetur ridiculus mus. Donec
							sagittis eros ante, sit amet sodales neque fermentum a. Donec
							volutpat id risus at pulvinar. Integer id libero cursus,
							vestibulum quam eget, rhoncus lectus. Fusce eu sagittis lorem.
							Nullam vel nibh suscipit, luctus ligula sed, egestas leo. Cras
							accumsan orci elit, eu auctor magna finibus et. Nulla id urna at
							nisi consectetur tempor. Nam nec imperdiet purus. Pellentesque
							convallis in augue ac convallis. Nullam sodales blandit libero
							eget porttitor. Proin dignissim vestibulum finibus. Cras ornare a
							urna tempus feugiat. Vestibulum facilisis sed metus eu rutrum.
							Morbi elementum eros sed auctor eleifend. Nullam suscipit arcu
							sapien, sed aliquam nulla sagittis non. Nam condimentum arcu vitae
							nulla commodo accumsan. Vivamus a feugiat ipsum. Ut et nulla id
							velit maximus cursus. Quisque mattis eu massa sit amet volutpat.
							Donec ipsum mi, fermentum id rutrum vitae, pulvinar a quam. Cras
							quis laoreet dolor. Maecenas hendrerit lectus in leo sodales
							blandit in sed tellus. Curabitur quis metus eget erat fermentum
							posuere eget eget tortor. Aenean volutpat, ipsum ut hendrerit
							bibendum, ex elit tincidunt ligula, at egestas arcu dolor et enim.
							Integer venenatis elit et dolor euismod ullamcorper. Aliquam erat
							volutpat. Phasellus mauris felis, porttitor a magna vel, pulvinar
							tempor lectus. Morbi non lectus arcu. Etiam venenatis mi vitae mi
							dignissim venenatis. Aliquam fringilla metus massa, efficitur
							ultricies nulla consequat sed. Duis volutpat purus id eros
							pharetra rutrum sit amet quis odio. Nullam porttitor justo in
							lacus ultrices aliquam. Phasellus at nisl eget urna lobortis
							venenatis non vel ante. Praesent et feugiat felis. Proin vulputate
							sem non cursus tincidunt. Fusce eleifend sed ante et mollis.
							Praesent condimentum justo leo, sit amet finibus arcu sodales
							quis. Aenean congue dolor efficitur massa lobortis imperdiet. Sed
							dignissim massa vel porttitor finibus. Nullam efficitur odio eget
							quam accumsan tincidunt. Fusce sollicitudin, turpis in placerat
							condimentum, erat ex porta odio, nec dignissim mi felis sit amet
							justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Nullam vel ipsum dui. Fusce gravida efficitur erat, vel finibus mi
							dignissim ac. Vestibulum a lacus nisl. Sed in venenatis metus.
							Integer euismod nibh a convallis rutrum. Donec rutrum ipsum quis
							velit aliquam, sed eleifend ligula malesuada. Nullam et nulla non
							metus condimentum malesuada eu vel orci. Maecenas ultricies
							accumsan neque, in vestibulum tellus tincidunt et.
						</Text>
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
