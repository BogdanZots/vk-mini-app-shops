import {
  Panel,
  PanelHeader,
  CardGrid,
  ContentCard,
  Group,
  Tabs,
  TabsItem,
} from "@vkontakte/vkui";
import React from "react";
import { PANELS, TABS } from "../../consts/conts";
import { PanelHeaderBack } from "@vkontakte/vkui";
import { useSelector, useDispatch } from "react-redux";
import "./CurrentShopProduct.css";
import { useState } from "react";
import Selected from "../../img/svg/Selected/Selected";
import { FormItem, Checkbox, Button } from "@vkontakte/vkui";
import { setUserOrder } from "../../store/reducers/userReducer";

export default function CurrentShopProduct({ go }) {
  const { currentShop } = useSelector((store) => store.shops);
  const { currentUserOrder } = useSelector((store) => store.user);
  const [activeTab, setActiveTab] = useState(false);
  const dispatch = useDispatch();
  return (
    <Panel>
      <CardGrid className='current-dish__cotnainer' size='l'>
        <PanelHeaderBack
          className='back_button'
          onClick={go}
          data-to={PANELS.CURRENT_SHOP_PANEL}
        />
        <ContentCard
          onClick={(e) => {}}
          key={currentShop.id}
          className='current__shop-card'
          image={currentShop.img}
          src={currentShop.img}></ContentCard>
        <div className='current-dish__title'>
          <div>
            <h2>130 P</h2>
          </div>
          <div>
            <h2>Капучино</h2>
          </div>
          <div>Рекомендуем обьём L</div>
        </div>
        <div className='current-dish__sizes'>
          <Group>
            <Tabs className='current-dish__sizes' mode='segmented'>
              <TabsItem
                className='current-dish__size'
                onClick={(e) => {
                  dispatch(setUserOrder(e));
                  setActiveTab(TABS.small);
                }}
                selected={activeTab === TABS.small}
                data-size-count='140'>
                {activeTab === TABS.small ? <Selected /> : ""} S {TABS.small} ₽
              </TabsItem>
              <TabsItem
                className='current-dish__size'
                onClick={(e) => {
                  dispatch(setUserOrder(e));
                  setActiveTab(TABS.medium);
                }}
                selected={activeTab === TABS.medium}
                data-size-count='160'>
                {activeTab === TABS.medium ? <Selected /> : ""} M {TABS.medium}{" "}
                ₽
              </TabsItem>
              <TabsItem
                className='current-dish__size'
                onClick={(e) => {
                  dispatch(setUserOrder(e));
                  setActiveTab(TABS.large);
                }}
                selected={activeTab === TABS.large}
                data-size-count='180'>
                {activeTab === TABS.large ? <Selected /> : ""}L {TABS.large} ₽
              </TabsItem>
            </Tabs>
          </Group>
          <Group>
            <div className='current-dish__adds'>
              <div className='current-dish__add'>
                <div className='add-title'>С сиропом вкуснее! 🍬</div>
                <div className='add-variants'>
                  <FormItem className='add-variant'>
                    <Checkbox
                      onChange={(e) => {
                        dispatch(setUserOrder(e));
                      }}
                      data-adds-count='20'>
                      Кокосовый сироп +20 ₽
                    </Checkbox>
                  </FormItem>
                  <FormItem className='add-variant'>
                    <Checkbox
                      onChange={(e) => {
                        dispatch(setUserOrder(e));
                      }}
                      data-adds-count='20'>
                      Кленовый сироп +20 ₽
                    </Checkbox>
                  </FormItem>
                  <div className='add-title'>
                    На альтернативном молоке полезнее 🌿
                  </div>
                  <FormItem className='add-variant'>
                    <Checkbox
                      onChange={(e) => {
                        dispatch(setUserOrder(e));
                      }}
                      data-adds-count='40'>
                      Миндальное +40 ₽
                    </Checkbox>
                  </FormItem>
                  <FormItem>
                    <Checkbox
                      onChange={(e) => {
                        dispatch(setUserOrder(e));
                      }}
                      data-adds-count='40'>
                      Миндальное +40 ₽
                    </Checkbox>
                  </FormItem>
                </div>
                <Button size='l' stretched style={{ marginRight: 8 }}>
                  В корзину
                </Button>
              </div>
            </div>
          </Group>
        </div>
      </CardGrid>
      <Group className='current__dish'></Group>
    </Panel>
  );
}
