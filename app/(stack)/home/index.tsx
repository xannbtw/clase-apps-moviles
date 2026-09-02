import CustomButton from '@/components/shared/CustomButton';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Text className="text-2xl font-work-black text-primary mb-1">
          Tipografía Work Sans
        </Text>
        <Text className="text-base font-work-light mb-6">
          Ejemplo de estilos con Nativewind
        </Text>

        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push('/(stack)/products')}
        >
          Productos
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
