import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, Dimensions, View, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingTxt}>My Profile</Text>
      <ScrollView style={styles.scrollView}>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    flex: 1
  },
  headingTxt: {
    fontSize: 40,
    padding: 10
  },
 
});

const IMG_ARRAY = [
  "https://media.istockphoto.com/photos/show-room-display-with-variation-of-choices-on-type-of-carpet-picture-id1281913432?b=1&k=20&m=1281913432&s=170667a&w=0&h=F-Pl4yLFn_eeIIo4C8_6k0g8vuU9Vp9OlnqNrbi6OeE=",
  "https://media.istockphoto.com/photos/closeup-of-two-women-choosing-samples-of-wall-paint-interior-designer-picture-id1291484089?b=1&k=20&m=1291484089&s=170667a&w=0&h=gtWY29g4W1JdouTtyG-jnc5JRTUQ5OGTiwvzpFe9sN8=",
  "https://media.istockphoto.com/photos/analyzing-samples-in-test-tube-backgrounds-picture-id1290116527?b=1&k=20&m=1290116527&s=170667a&w=0&h=51bfejWaiLIK8ZeeP7u7q0b1UINUwx3dbH86HZNNuPA=",
  "https://media.istockphoto.com/photos/rainbow-colored-fan-picture-id172980469?b=1&k=20&m=172980469&s=170667a&w=0&h=bSNBtG3-KriLLL5_-rmIH7bQqUU7hOCgqgkDhs_SqWE=",
  "https://media.istockphoto.com/photos/cream-smears-isolated-on-white-background-picture-id1316209435?b=1&k=20&m=1316209435&s=170667a&w=0&h=KErr1VBrghgWUJPoiwlonoeEAPSvjfTT0qzmBRGm7xs=",
  "https://media.istockphoto.com/photos/two-graphic-designer-brainstorming-meeting-and-drawing-on-graphics-picture-id1269045922?b=1&k=20&m=1269045922&s=170667a&w=0&h=d8-cBD03aH6DjWvLCGDfJKEG2fzPwataSKTDzUKfx38=",
  "https://media.istockphoto.com/photos/red-lipstick-smear-smudge-swatch-picture-id1270406960?b=1&k=20&m=1270406960&s=170667a&w=0&h=Ne4byhMMwDtfbip9DUOLFq5Osq9mt9m2f93j6L6x_qI=",
  "https://media.istockphoto.com/photos/makeup-foundation-swatches-picture-id1271524557?b=1&k=20&m=1271524557&s=170667a&w=0&h=06ZMwKsiqrJVUh-x16dGvg4T-UbXVguggBEDAA0RdbI=",
  "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1558383331-f520f2888351?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://media.istockphoto.com/photos/show-room-display-with-variation-of-choices-on-type-of-carpet-picture-id1281913432?b=1&k=20&m=1281913432&s=170667a&w=0&h=F-Pl4yLFn_eeIIo4C8_6k0g8vuU9Vp9OlnqNrbi6OeE=",
  "https://media.istockphoto.com/photos/closeup-of-two-women-choosing-samples-of-wall-paint-interior-designer-picture-id1291484089?b=1&k=20&m=1291484089&s=170667a&w=0&h=gtWY29g4W1JdouTtyG-jnc5JRTUQ5OGTiwvzpFe9sN8=",
  "https://media.istockphoto.com/photos/analyzing-samples-in-test-tube-backgrounds-picture-id1290116527?b=1&k=20&m=1290116527&s=170667a&w=0&h=51bfejWaiLIK8ZeeP7u7q0b1UINUwx3dbH86HZNNuPA=",
  "https://media.istockphoto.com/photos/rainbow-colored-fan-picture-id172980469?b=1&k=20&m=172980469&s=170667a&w=0&h=bSNBtG3-KriLLL5_-rmIH7bQqUU7hOCgqgkDhs_SqWE=",
  "https://media.istockphoto.com/photos/cream-smears-isolated-on-white-background-picture-id1316209435?b=1&k=20&m=1316209435&s=170667a&w=0&h=KErr1VBrghgWUJPoiwlonoeEAPSvjfTT0qzmBRGm7xs=",
  "https://media.istockphoto.com/photos/two-graphic-designer-brainstorming-meeting-and-drawing-on-graphics-picture-id1269045922?b=1&k=20&m=1269045922&s=170667a&w=0&h=d8-cBD03aH6DjWvLCGDfJKEG2fzPwataSKTDzUKfx38=",
  "https://media.istockphoto.com/photos/red-lipstick-smear-smudge-swatch-picture-id1270406960?b=1&k=20&m=1270406960&s=170667a&w=0&h=Ne4byhMMwDtfbip9DUOLFq5Osq9mt9m2f93j6L6x_qI=",
  "https://media.istockphoto.com/photos/makeup-foundation-swatches-picture-id1271524557?b=1&k=20&m=1271524557&s=170667a&w=0&h=06ZMwKsiqrJVUh-x16dGvg4T-UbXVguggBEDAA0RdbI=",
  "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1558383331-f520f2888351?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
]
