import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { QandA } from '../../components'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

interface Props {}

const Networks: React.FC<Props> = () => {
const navigation = useNavigation();

return (
<SafeAreaView style={{flex:1, backgroundColor:'#F0F5FF'}}>
<LinearGradient
colors={['#F0F5FF', '#FFFFFF']}
style={{ flex: 1 }}
start={{ x: 0, y: 0 }}
end={{ x: 0.3, y: 0.3 }}
>
<View style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
<View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'90%'}} >
<TouchableOpacity style={{height:48,width:48,backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:20,margin:'8%',marginRight:'4%'}}>
<MaterialCommunityIcons name="arrow-left" size={24} color="black" onPress={() => { navigation.navigate("Settings") }} />
</TouchableOpacity>
<Text style={{ fontFamily: 'plus jakarta sans', fontWeight: 800,fontSize:20 }} >Network</Text>
</View>
<MaterialIcons name="add" size={24} color="blue" />
</View>
<View className="ml-[3%]">
<ScrollView showsVerticalScrollIndicator={false} >
<QandA question={'custom Network'} />
<QandA question={'Preconfigured network'} />
</ScrollView>
</View>
</LinearGradient>
</SafeAreaView >
)
}

export default Networks