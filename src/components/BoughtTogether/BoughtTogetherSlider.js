import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './BoughtTogether.styles';
import commonStyles from '../../utils/common.styles';
import {frequentlyBoughtTogether} from '../../utils/enums';

export default function BoughtTogetherSlider() {
  const [data, setData] = useState([]);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    setData(frequentlyBoughtTogether);
  }, []);

  const {
    neomorphBg,
    neomorphBorder,
    neomorphShadow,
    alignCenter,
    justifyCenter,
    borderRadius14,
    f16,
    f11,
    fw500,
    colorBlue,
    colorLightBlue,
    pr24,
    pl24,
    pb20,
    pt20,
    pt12,
    pr12,
    pl12,
    pb8,
    pt4,
    mr24,
    mt20,
    mb20,
  } = commonStyles;

  function _renderItem({item, index}) {
    return (
      <View
        style={[
          styles.card,
          neomorphBg,
          neomorphBorder,
          neomorphShadow,
          borderRadius14,
          alignCenter,
          justifyCenter,
          mr24,
          mt20,
          mb20,
        ]}>
        <View style={[]}>
          <Image
            source={item.image}
            style={[styles.image, pt20, pb20, pr24, pl24]}
          />
        </View>
        <View style={[styles.cardFooter, neomorphBorder, borderRadius14]}>
          <Text style={[f16, fw500, colorBlue, pt12, pr12, pl12]}>
            {item.title}
          </Text>
          <Text style={[f11, colorLightBlue, pr12, pl12, pb8, pt4]}>
            {item.subTitle}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <Carousel
      layout={'default'}
      activeSlideAlignment={'start'}
      data={data}
      sliderWidth={windowWidth}
      itemWidth={228}
      renderItem={_renderItem}
      inactiveSlideScale={1}
    />
  );
}
