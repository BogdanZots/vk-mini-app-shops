import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  CardGrid,
  ContentCard,
  Div,
  Avatar,
  TabsItem,
  Tabs,
  Search,
  Spacing,
  Title,
} from "@vkontakte/vkui";
import { useDispatch , useSelector } from "react-redux";
import { setCurrentShop } from "../store/reducers/shopReducer";
import CustomHeaderBlock from "../components/CustomHeaderBlock/CustomHeaderBlock";


const Home = ({ id, go, fetchedUser, shops }) => {
  const {userAdress} = useSelector(store=>store.user)
  const dispatch = useDispatch();
  const filteredShops = shops;
  console.log(filteredShops);
  return (
    <Panel id={id}>
      <CustomHeaderBlock />
      {/*       {fetchedUser && (
        <Group
          header={
            <Header mode='secondary'>User Data Fetched with VK Bridge</Header>
          }>
          <Cell
            before={
              fetchedUser.photo_200 ? (
                <Avatar src={fetchedUser.photo_200} />
              ) : null
            }
            description={
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ""
            }>
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>
      )} */}

      <Group>
        <Tabs className='select__tabs'>
          <TabsItem>Cписок заведений</TabsItem>
          <TabsItem data-to='map' onClick={(e) => go(e)}>
            Карта заведений
          </TabsItem>
        </Tabs>
        Adress : {userAdress}
      </Group>
      <Div>
        <CardGrid className='cards__container' data-to='current-shop' size='l'>
          {filteredShops &&
            filteredShops.map((shop) => {
              const id = shop.id;
              return (
                <ContentCard
                  onClick={(e) => {
                    dispatch(setCurrentShop(id));
                    go(e.target.closest(".cards__container"));
                  }}
                  key={shop.id}
                  className='item__card'
                  image={shop.img}
                  src={shop.img}
                  subtitle={"КОФЕЙНЯ " + shop.name}
                  header={shop.description}
                  caption={shop.addressText}></ContentCard>
              );
            })}
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
