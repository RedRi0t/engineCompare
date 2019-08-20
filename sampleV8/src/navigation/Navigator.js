import {StackNavigator} from 'react-navigation';
import routerConfig from './routerConfig';
import stackConfig from './stackConfig'

const Navigator = StackNavigator(routerConfig,stackConfig);

export default Navigator;
