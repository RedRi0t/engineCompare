import LongList from "../view/LongList";
import Entrance from "../view/Entrance";
import Memory from "../view/Memory";
import PicList from "../view/PicList";

const routerConfig = {
    Entrance: {
        screen: Entrance,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: true
        }),
    },
    LongList: {
        screen: LongList,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: true
        }),
    },
    Memory: {
        screen: Memory,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: true
        }),
    },
    PicList: {
        screen: PicList,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: true
        }),
    },
};

export default routerConfig;