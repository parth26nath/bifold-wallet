import { TouchableOpacity, Text, Platform } from 'react-native';
export const FONT_STYLE_1 = {
    fontFamily: 'plus-jakarta-sans',
    fontWeight: '500',
};

export const FONT_STYLE_2 = {
    fontFamily: 'plus-jakarta-sans',
    fontWeight: '700',
};
export const FONT_STYLE_3 = {
    fontFamily: 'plus-jakarta-sans',
    fontWeight: '500',
};
export const BOX_SHADOW_STYLE = {
    shadowColor: '#2122281A',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowOpacity: 1,
};
export const BUTTON_STYLE1 = {
    ...Platform.select({
        ios: {
            shadowColor: '#212228',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
        },
        android: {
            elevation: 4,
        },
    }),
    // ... other styles
};

export const BUTTON_STYLE2 = {
    ...Platform.select({
        ios: {
            shadowColor: '#212228',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
        },
        android: {
            elevation: 4,
        },
    }),
    // ... other styles
};
