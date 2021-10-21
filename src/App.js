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

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState("");
  const [userGeo, setUserGeo] = useState(null);
  const dispatch = useDispatch();
  const { shops } = useSelector((store) => store.shops);

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
      setPopout(null);
    }
    fetchData();
    dispatch(setAllShops());
    const getGeo = async () => {
      try {
        const geo = await bridge.send("VKWebAppGetGeodata");
        setUserGeo(geo);
        console.log("GEO", geo, userGeo);
        dispatch(setUserGeoData({ lat: geo.lat, long: geo.long }));
      } catch (e) {
        console.log(e);
      }
    };
    getGeo();
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
        <View activePanel={activePanel} popout={popout}>
          <Home id='home' fetchedUser={fetchedUser} shops={shops} go={go} />
          <Map id='map' go={go} />
          <CurrentShop id='current-shop' go={go} />
          <CurrentShopProduct id='current-shop-product' go={go} />
        </View>
        <CustomFooter activePanel={activePanel} go={go} />
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
