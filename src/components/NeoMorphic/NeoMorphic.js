import React from 'react';
import {View} from 'react-native';
import styles from './NeoMorphic.styles';

export default function NeoMorphic({
  children,
  width,
  height,
  borderRadius,
  style,
}) {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View
          style={[
            styles.inner,
            {
              borderRadius: borderRadius || 10,
            },
            style,
          ]}>
          {children}
        </View>
      </View>
    </View>
  );
}
