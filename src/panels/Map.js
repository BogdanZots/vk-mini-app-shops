import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  TabsItem,
  Tabs,
  Group,
} from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import "./Map.css";
import { setCurrentShop } from "../store/reducers/shopReducer";
import CustomHeaderBlock from "../components/CustomHeaderBlock/CustomHeaderBlock";

const Map = (props) => {
  const dispatch = useDispatch();
  const fakeShops = [
    { name: "name1", cord: [51.5171833,31.2746446], id: 1 },
    { name: "name2", cord: [56.751574, 38.573856], id: 2 },
    { name: "name3", cord: [57.751574, 39.573856], id: 3 },
    { name: "name4", cord: [58.751574, 40.573856], id: 4 },
  ];
  const [localMap, setLocalMap] = useState("");
  const handleLoad = () => {
    window.ymaps.ready(() => {
      setLocalMap(
        new ymaps.Map(
          "map-2",
          {
            center: [55.751574, 37.573856],
            zoom: 9,
          },
          {
            searchControlProvider: "yandex#search",
          }
        )
      );
    });
  };
  useEffect(() => {
    handleLoad();
  }, []);

  fakeShops.forEach((shop, i) => {
    const template = `<div id="map_point" class="map_point" data-to="current-shop"   data-id=${fakeShops[i].id} class="text">
    ${fakeShops[i].name}
    <div class="place_title">
    <div>test</div>
    <div>
    <img src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/star-interface-256.png" style="width:12px;heigth:12px">
    <span class="text_small">
    4,5 Капучино от 190 р
    </span>
    </div>
    </div>
    </div>`;
    let content = ymaps?.templateLayoutFactory?.createClass(template);
    if (window.ymaps.GeoObject) {
      const myGeoObject = new ymaps.Placemark(
        fakeShops[i].cord,
        {
          hintContent: fakeShops[i].name,
        },
        {
          iconLayout: content,
          iconShape: {
            type: "Rectangle",
            coordinates: [
              [-95, -88],
              [85, 78],
            ],
          },
        }
      );
      if (localMap.geoObjects) {
        localMap.geoObjects.add(myGeoObject);
        myGeoObject.events.add("click", function (e) {
          const dom = document.getElementsByClassName("map_point");
          dispatch(setCurrentShop(dom[i].dataset.id));
          props.go(dom[i]);
        });
      }
    }
  });
  return (
    <Panel id={props.id}>
    {/*   <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to='home' />}>

      </PanelHeader> */}
              <CustomHeaderBlock className="header__block-map" />
      <Group>
        <Tabs className='select__tabs-map'>
          <TabsItem data-to='home' onClick={(e) => props.go(e)}>
            Cписок заведений
          </TabsItem>
          <TabsItem data-to='map' onClick={(e) => props.go(e)} className='shop'>
            Карта заведений
          </TabsItem>
        </Tabs>
      </Group>
      <div id='map-2'></div>
    </Panel>
  );
};

Map.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Map;
