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
} from "@vkontakte/vkui";
import { useDispatch , useSelector } from "react-redux";
import { setCurrentShop } from "../store/reducers/shopReducer";
import CustomHeaderBlock from "../components/CustomHeaderBlock/CustomHeaderBlock";


const Home = ({ id, go, fetchedUser, shops }) => {
  const {userAdress} = useSelector(store=>store.user)
  const dispatch = useDispatch();
  const filteredShops = /* shops || */ [
    {
      "id": 1,
      "name": "string1",
      "description": "string1",
      "addressText": "string1",
      "phone": "string1",
      "img": "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/store-256.png",
      "middleRate": 0,
    },
    {
      "id": 2,
      "name": "string2",
      "description": "string2",
      "addressText": "string2",
      "phone": "string2",
      "img": "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/store-256.png",
      "middleRate": 0,
    }
    ,  {
      "id": 3,
      "name": "string3",
      "description": "string3",
      "addressText": "string3",
      "phone": "string3",
      "img": "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/store-256.png",
      "middleRate": 0,
    }
    ,  {
      "id": 4,
      "name": "string4",
      "description": "string4",
      "addressText": "string4",
      "phone": "string4",
      "img": "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/store-256.png",
      "middleRate": 0,
    }
  ];
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
