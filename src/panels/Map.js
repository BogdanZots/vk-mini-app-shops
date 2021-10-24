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
    { name: "name1", cord: [55.6171833, 37.673856], id: 1 },
    { name: "name2", cord: [55.751574, 37.773856], id: 2 },
    { name: "name3", cord: [55.851574, 37.873856], id: 3 },
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
    <svg width="45" height="45" viewBox="0 0 43 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.3987 14.268L34.2549 6.33511L27.0508 3.11149L27.191 2.25652L24.528 1.99023L24.1776 1.83605L24.1636 1.96219L20.5475 1.59778L20.5335 1.20534L19.7346 1.51369L16.6792 1.19133L16.9735 2.57889L11.7456 4.62519L2.52323 13.6233L2.08874 26.4898L20.954 57.3665L29.3214 44.7103L36.8198 32.4885L40.0294 23.9109L39.3987 14.268ZM24.8223 29.2789L16.6792 28.424L12.3903 22.201L14.745 14.0578L19.5944 12.2217L22.9022 12.7684L27.191 14.9128L29.3354 23.4904L24.8223 29.2789Z" fill="#F48542"/>
<path d="M21.0096 0C9.4186 0 0 9.4186 0 21.0096C0 24.92 1.07921 28.7463 3.13953 32.0541L19.8183 58.9363C20.1407 59.4549 20.7013 59.7632 21.304 59.7632H21.318C21.9347 59.7632 22.4953 59.4409 22.8037 58.9083L39.062 31.7738C40.9961 28.5361 42.0193 24.8079 42.0193 21.0096C42.0193 9.4186 32.6007 0 21.0096 0ZM36.0486 29.9797L21.2759 54.6475L6.11088 30.218C4.40095 27.4569 3.47591 24.2753 3.47591 21.0096C3.47591 11.3528 11.3528 3.47591 21.0096 3.47591C30.6665 3.47591 38.5294 11.3528 38.5294 21.0096C38.5294 24.1772 37.6604 27.2747 36.0486 29.9797Z" fill="black"/>
<path d="M21.0101 10.5119C15.2216 10.5119 10.4983 15.2212 10.4983 21.0097C10.4983 26.7701 15.1375 31.5215 21.0101 31.5215C26.9528 31.5215 31.5219 26.7141 31.5219 21.0097C31.5219 15.2212 26.7986 10.5119 21.0101 10.5119ZM21.0101 28.0316C17.1277 28.0316 13.9882 24.878 13.9882 21.0097C13.9882 17.1413 17.1558 13.9878 21.0101 13.9878C24.8644 13.9878 28.018 17.1553 28.018 21.0097C28.032 24.822 24.9485 28.0316 21.0101 28.0316Z" fill="black"/>
</svg>

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
      <CustomHeaderBlock className='header__block-map' />
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
