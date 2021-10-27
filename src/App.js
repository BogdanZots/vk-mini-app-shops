import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Map from "./panels/Map";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import { useDispatch, useSelector } from "react-redux";
import { setAllShops } from "./store/reducers/shopReducer";
import CurrentShop from "./components/CurrentShop/CurrentShop";
import CurrentShopProduct from "./components/CurrentShopProduct/CurrentShopProduct";
import { setUserGeoData } from "./store/reducers/userReducer";
import Popup from "./components/Popup/Popup";
import { PANELS } from "./consts/conts";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popoup, setPopoup] = useState({
    state: true,
    panel: PANELS.MAIN_PANEL,
    shop: null,
  });
  const [userGeo, setUserGeo] = useState(null);
  const dispatch = useDispatch();
  const { shops } = useSelector((store) => store.shops);
  const getGeo = async () => {
    try {
      const geo = await bridge.send("VKWebAppGetGeodata");
      setUserGeo(geo);
      dispatch(setUserGeoData({ lat: geo.lat, long: geo.long }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
    dispatch(setAllShops());
  }, []);
  const go = (e) => {
    if (!e.currentTarget) {
      setActivePanel(e.dataset.to);
      return;
    }
    setActivePanel(e.currentTarget.dataset.to);
  };
  return (
    <AdaptivityProvider>
      <AppRoot>
        <View
          activePanel={activePanel}
          modal={
            <Popup
              modalActive={popoup}
              setModalActive={setPopoup}
              getGeo={getGeo}
              go={go}
            />
          }>
          <Home id='home' fetchedUser={fetchedUser} shops={shops} go={go} />
          <Map setModalActive={setPopoup} id='map' go={go} />
          <CurrentShop id='current-shop' go={go} />
          <CurrentShopProduct id='current-shop-order-product' go={go} />
        </View>
        <CustomFooter activePanel={activePanel} go={go} />
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
