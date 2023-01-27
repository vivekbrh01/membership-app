import React from 'react';
import {View, Text} from 'react-native';
import CarouselPager from 'react-native-carousel-pager';
import LinearGradient from 'react-native-linear-gradient';

import {membershipTypes} from '../../utils/enums';
import styles from './MembershipCards.styles';

export default function MembershipCards(props) {
  return (
    <CarouselPager
      pageStyle={styles.membershipSlider}
      vertical={false}
      onPageChange={page => props.handleSliderPageChange(page)}>
      {membershipTypes?.map((card, i) => {
        return (
          <View key={card.title + i}>
            <LinearGradient
              colors={['#7D92A4', '#4D6881']}
              useAngle={true}
              angle={139.42}
              angleCenter={{x: 0.5, y: 0.5}}
              style={[
                styles.linearGradientSlider,
                {borderColor: card?.cardDetails?.gradientColors[1]},
              ]}>
              {card?.isCurrent && (
                <View style={styles.isCurrrentCard}>
                  <Text style={styles.isCurrrentCardText}>Current Plan</Text>
                </View>
              )}
              <Text style={styles.cardHeading}>{card.title}</Text>
              <View>
                {card?.packageDetails?.map((info, index) => {
                  return (
                    <View style={styles.cardFlex} key={info.subTitle + index}>
                      <Text style={[styles.width60, styles.tableText]}>
                        {info.subTitle}
                      </Text>
                      <Text
                        style={[
                          styles.width40,
                          styles.tableText,
                          styles.fw600,
                        ]}>
                        {info.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
              {card?.cardDetails?.showCard && (
                <>
                  <View
                    style={[
                      styles.currentPlanCard,
                      {borderColor: card?.cardDetails?.gradientColors[1]},
                    ]}>
                    <Text
                      style={[
                        styles.currentPlanCardText,
                        {color: card?.cardDetails?.gradientColors[1]},
                      ]}>
                      Current Plan
                    </Text>
                  </View>
                  <LinearGradient
                    colors={card?.cardDetails?.gradientColors}
                    useAngle={true}
                    angle={139.42}
                    angleCenter={{x: 0.5, y: 0.5}}
                    style={[
                      styles.linearBtnCard,
                      {borderColor: card?.cardDetails?.gradientColors[1]},
                    ]}>
                    <View style={styles.btnCard}>
                      <Text style={styles.btnCardText}>
                        {card?.cardDetails?.amount}
                      </Text>
                      <Text style={styles.btnCardSubText}>
                        {card?.cardDetails?.title}
                      </Text>
                    </View>
                  </LinearGradient>
                </>
              )}
            </LinearGradient>
          </View>
        );
      })}
    </CarouselPager>
  );
}
