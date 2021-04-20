import { StyleSheet } from 'react-native'
import { Colors } from '../../../utils';
import ResponsivePixels from '../../../utils/ResponsivePixels';

export default styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.Defaultwhite
    },
    ContainView:{
        marginHorizontal:ResponsivePixels.size16,
        marginTop:ResponsivePixels.size20
    },
    btnView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:ResponsivePixels.size16
    },
    leftbtn:{
        flex:1,
        marginEnd:ResponsivePixels.size4
    },
    rightbtn:{
        flex:1,
        marginStart:ResponsivePixels.size4
    }
});