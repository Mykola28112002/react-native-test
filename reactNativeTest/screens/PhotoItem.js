import React from "react";
import { TouchableWithoutFeedback,Image, View, StyleSheet} from "react-native";
import { selectPhotoId,selectPhotos } from "../redux/selectors";
import { useSelector } from "react-redux";


const PhotoItem = ({ navigation }) => {
  const id = useSelector(selectPhotoId);
  let result = '';
  const photos = useSelector(selectPhotos);
  photos.filter(photo => {
    if (photo.id === id) {
      result = photo.urls.regular
    }
  })
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("PhotoList")}>
      <View style={styles.container}>
      <Image style={styles.image}  source={{ uri: result }} />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  image: {
    width: 390,
    height: 390,
  }

});

export default PhotoItem;
