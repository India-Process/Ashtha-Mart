
import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { Transitioning, Transition } from 'react-native-reanimated';
const transition = (
  <Transition.Together>
    <Transition.Out
      type="fade"
      durationMs={200}
      // interpolation="easeOut"
    />
    <Transition.Change />
    <Transition.In
      type="fade"
      durationMs={200}
      // interpolation="easeIn"
    />
  </Transition.Together>
);

const colors = [
  {
    bg: '#A8DDE9',
    color: '#3F5B98',
    category: 'Healthcare',
    subCategories: ['Skincare', 'Personal care', 'Health', 'Eye care'],
  },
  {
    bg: '#086E4B',
    color: '#FCBE4A',
    category: 'Food & Drink',
    subCategories: [
      'Fruits & Vegetables',
      'Frozen Food',
      'Bakery',
      'Snacks & Desserts',
      'Beverages',
      'Alcoholic beverages',
      'Noodles & Pasta',
      'Rice & Cooking oil',
    ],
  },
  {
    bg: '#FECBCA',
    color: '#FD5963',
    category: 'Beauty',
    subCategories: ['Skincare', 'Makeup', 'Nail care', 'Perfume'],
  },
  {
    bg: '#193B8C',
    color: '#FECBCD',
    category: 'Baby & Kids',
    subCategories: [
      'Toys',
      'Trolleys',
      'LEGO®',
      'Electronics',
      'Puzzles',
      'Costumes',
      'Food',
      'Hygiene & Care',
      "Child's room",
      'Feeding accessories',
    ],
  },
  {
    bg: '#FDBD50',
    color: '#F5F5EB',
    category: 'Homeware',
    subCategories: ['Air purifiers', 'Stoves, hoods & ovens', 'Refrigerators', 'Coffee & Tea', 'Air conditioning', 'Grilling', 'Vacuum cleaners'],
  },
];

export default function App() {
  const ref = React.useRef();
  const [selectedColor, setSelectedColor] = React.useState('');
  
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}>
      <StatusBar hidden/>
      {colors.map(({ bg, color, category, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            activeOpacity={.9}
            onPress={() => {
              ref.current.animateNextTransition();
              setSelectedColor(bg === selectedColor ? '' : bg);
            }}
            style={styles.cardContainer}>
            <View
              style={[styles.card, { backgroundColor: bg }]}>
              <Text style={[styles.category, { color }]}>{category}</Text>
              {selectedColor === bg && (
                <View style={{ marginTop: 20 }}>
                  {subCategories.map((i) => {
                    return (
                      <Text style={[styles.topic, { color }]} key={i}>
                        {i}
                      </Text>
                    );
                  })}
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  cardContainer: {
    flexGrow: 1
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  category: {
    fontSize: 42,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: -2
  },
  topic: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18 * 1.5
  },
});
