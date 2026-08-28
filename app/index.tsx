import { Link } from "expo-router";
import { Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App=()=>{
    return(
      <SafeAreaView>
        <View className="mt-6 mx-2.5 bg-zinc-100">
          <Text className="text-xl font-bold text-zinc-800 ">
          ANASHEIIIII
          </Text>

          <Text className="text-2xl text-zinc-400 font-work-black">
          GOOOOOD
          </Text>

          <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-lg py-3 px-4 text-zinc-700" href="./products">
            Productos
          </Link>
      
        </View> 
      </SafeAreaView>

    ) 
}
export default App