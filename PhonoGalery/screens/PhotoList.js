import React, { useEffect, useState } from "react";
import { Button, Image, View, StyleSheet, StatusBar, ScrollView, SafeAreaView, TouchableWithoutFeedback} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos,fetchPhotosId } from "../redux/operations";
import { selectPhotos } from "../redux/selectors";
import { Title } from 'react-native-paper';

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
  const onPressLearnBack = () => {
    setPage(page-1)
  }

  const photos = useSelector(selectPhotos);
  return (
     <View style={styles.container}>
      <SafeAreaView style={styles.containerScroll}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardContainer}>
          {photos.map(({urls,user,id}) =>
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
          <View style={styles.buttonBox}>
            <View style={styles.button}>
              <Button title="Back" onPress={onPressLearnBack} />
            </View>
            <View style={styles.button}>
              <Button title="Go" onPress={onPressLearnMore}/>
            </View>
          </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "auto"
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
    height: 135,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContainer: {
    height: 160,
    width: 150,
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#404040"
  },
  cardContainer: {
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
  },
  title: {
    fontSize: 10,
    color: "white",
    padding: 0,
    marginTop: -5,
  },
  contactContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    margin: 10,
    width: 60
  },
  buttonBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center"
  }

});



export default PhotoList;