import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CurrentShop.css";
import {
  CardGrid,
  ContentCard,
  Group,
  HorizontalScroll,
  Tabs,
  Card,
  TabsItem,
  Headline,
  Spacing,
  Title,
  Panel,
  Button,
} from "@vkontakte/vkui";
import { useState } from "react";
import { PANELS } from "../../consts/conts";
import { setCurrentShop } from "../../store/reducers/shopReducer";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
export default function CurrentShop({ go, id }) {
  const { currentShop } = useSelector((store) => store.shops);
  const { currentUserOrder } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Напитки");
  return (
    <Panel id={id}>
      {currentShop.isLoading ? (
        <CustomSpinner />
      ) : (
        <Group>
          <CardGrid className='cards__container current__shop-card' size='l'>
            <ContentCard
              onClick={(e) => {}}
              key={currentShop.id}
              className='current__shop-card'
              image={currentShop.img}
              src={currentShop.img}
              subtitle={"КОФЕЙНЯ " + currentShop.name}></ContentCard>
          </CardGrid>
          <Tabs>
            <HorizontalScroll>
              {currentShop.categories.map((category) => (
                <TabsItem
                  onClick={() =>
                    dispatch(setCurrentShop(currentShop.id, category.id))
                  }>
                  {category.name}
                </TabsItem>
              ))}
            </HorizontalScroll>
          </Tabs>
          <Group class=''>
            <CardGrid className='menu__container' size='m'>
              {currentShop.menu.map((menuItem) => {
                return (
                  <Card className='menu__item' mode='outline'>
                    <img src={menuItem.img} class='menu__item-img'></img>
                    <Spacing size={16} />
                    <div>
                      <Headline>{menuItem.name}</Headline>
                    </div>
                    <Spacing size={16} />
                    <div class='menu__item-buy'>
                      <Title
                        class='menu__item-but-text'
                        level='2'
                        weight='semibold'>
                        ₽ {menuItem.cost}
                      </Title>
                      <div
                        class='menu__item-buy-cirle'
                        data-to={PANELS.CURRENT_SHOP_ORDER_PANEL}
                        onClick={(e) => go(e)}>
                        <svg
                          height='26'
                          width='26'
                          fill='white'
                          viewBox='0 0 512 512'
                          xmlns='http://www.w3.org/2000/svg'>
                          <title />
                          <g data-name='1' id='_1'>
                            <path d='M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z' />
                            <path d='M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z' />
                            <path d='M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z' />
                            <path d='M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z' />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </CardGrid>
            {currentUserOrder.totalCount > 0 ? (
              <Button
                size='l'
                stretched
                style={{ marginTop: 150, position: "absolute", bottom: 100 }}>
                Заказ : {currentUserOrder.totalCount} ₽
              </Button>
            ) : (
              ""
            )}
          </Group>
        </Group>
      )}
    </Panel>
  );
}
