import { Image } from 'react-native';
import { Asset } from 'expo';
import { images } from '../constant/image';

export function cacheImages(images) {
    return images.map(image => {
        if(typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    })
}