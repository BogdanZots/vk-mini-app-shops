import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import {
  Panel,
  Group,
  CardGrid,
  ContentCard,
  Div,
  TabsItem,
  Tabs,
  Spinner,
} from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentShop } from "../store/reducers/shopReducer";
import CustomHeaderBlock from "../components/CustomHeaderBlock/CustomHeaderBlock";
import { setAllShops } from "../store/reducers/shopReducer";
import { ITEMS_PER_PAGE, PANELS } from "../consts/conts";
import CustomSpinner from "../components/CustomSpinner/CustomSpinner";
const Home = ({
  id,
  go,
  fetchedUser,
  shops,
  userGeo,
  modalActive,
  setModalActive,
}) => {
  const { userAdress } = useSelector((store) => store.user);
  const { currentItemsCount, totalItemsCount, currentPage, isLoading } =
    useSelector((store) => store.shops);
  const dispatch = useDispatch();
  const page = currentPage + 1;
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        1 &&
      currentPage * ITEMS_PER_PAGE <= totalItemsCount
    ) {
      dispatch(setAllShops(page, ITEMS_PER_PAGE));
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [currentItemsCount, currentPage]);

  const filteredShops = shops;
  return (
    <Panel id={id}>
      <CustomHeaderBlock />
      <Group>
        <Tabs className='select__tabs'>
          <TabsItem>Cписок заведений3</TabsItem>
          <TabsItem
            data-to='map'
            data-item='map-btn'
            onClick={(e) => {
              if (!userGeo) {
                setModalActive({
                  state: true,
                  panel: PANELS.MAIN_PANEL,
                  target: "map-btn",
                  shop: false,
                });
                /*   const popup = document.querySelector(".vkuiModalPage__in");
                console.log(popup); */
                return;
              }
              go(e);
            }}>
            Карта заведений
          </TabsItem>
        </Tabs>
        Adress : {userAdress}
      </Group>
      <Div>
        <CardGrid className='cards__container' data-to='current-shop' size='l'>
          {isLoading ? (
            <Spinner />
          ) : (
            filteredShops.map((shop) => {
              const id = shop.id;
              return (
                <ContentCard
                  className='card'
                  onClick={(e) => {
                    dispatch(setCurrentShop(id));
                    go(e.target.closest(".cards__container"));
                  }}
                  key={shop.id}
                  className='item__card'
                  image={shop.img}
                  /*     src={shop.img} */
                  subtitle={
                    "Часы работы " + shop.workingFrom + " - " + shop.workingTo
                  }
                  header={"Рейтинг : " + shop.middleRate}
                  caption={"Адрес : " + shop.addressText}></ContentCard>
              );
            })
          )}
        </CardGrid>
      </Div>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
