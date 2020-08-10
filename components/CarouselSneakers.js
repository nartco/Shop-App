import React from 'react'
import { View, SafeAreaView, Text, Image } from 'react-native' 
import Carousel from 'react-native-snap-carousel';

const CarouselSneakers = props => {

    const renderItem = dataItem => {
        return (
          <View style={{
              }}>
            <Image
              source={{ uri: dataItem.item.imageUrl }}
              style={{
                width: 250,
                height: 250
              }}
              resizeMode='contain'
            />
          </View>

        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  data={props.data}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={renderItem}
                   />
            </View>
          </SafeAreaView>
    )
}

export default CarouselSneakers
