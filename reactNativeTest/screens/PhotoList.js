import React, { useEffect, useState } from "react";
import { Button, Image, View, StyleSheet, StatusBar, ScrollView, SafeAreaView, TouchableWithoutFeedback} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos,fetchPhotosId } from "../redux/operations";
import { selectPhotos } from "../redux/selectors";
import { Title, Paragraph } from 'react-native-paper';


const PhotoList = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [dispatch,page]);

  const onPress = (id) => {
    navigation.navigate("PhotoItem");
    dispatch(fetchPhotosId({id}));
  };
  const onPressLearnMore = () => {
    setPage(page+1)
  }

  const photos = useSelector(selectPhotos);
  return (
    <View onPress={() => navigation.navigate("PhotoItem")} style={styles.container}>
      <SafeAreaView style={styles.containerScroll}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardContainer}>
          {photos.map(({urls,user,description,id}) =>
            <TouchableWithoutFeedback  key={id} onPress={() => onPress(id)}>
              <View style={styles.imageContainer} > 
                  <Image style={styles.image}  source={{ uri: urls.regular }} />
                  <View style={styles.contactContainer}>
                    <Title style={styles.title} >{user.name}</Title>
                  </View>
              </View>
            </TouchableWithoutFeedback>
            )}
          </View>
          <Button style={styles.goButton} title="go" onPress={onPressLearnMore}/>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  containerScroll: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "black",
  },
  image: {
    width: 148,
    height: 130,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContainer: {
    height: 170,
    width: 150,
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white"
  },
  cardContainer: {
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
  },
  title: {
    fontSize: 10,
    color: "white"
  },
  contactContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  paragraph: {
    fontSize: 10,
    color: "white"
  },
  goButton: {
    color: "black"
  }
});


export default PhotoList;