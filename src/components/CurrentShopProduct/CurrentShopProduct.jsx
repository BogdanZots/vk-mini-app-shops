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
import { useSelector } from "react-redux";
import "./CurrentShopProduct.css";
import { useState } from "react";
import Selected from "../../img/svg/Selected/Selected";
import { FormItem, Checkbox, Button } from "@vkontakte/vkui";

export default function CurrentShopProduct({ go }) {
  const { currentShop } = useSelector((store) => store.shops);
  const [activeTab, setActiveTab] = useState(false);
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
                onClick={() => setActiveTab(TABS.small)}
                selected={activeTab === TABS.small}>
                {activeTab === TABS.small ? <Selected /> : ""} S {TABS.small} ₽
              </TabsItem>
              <TabsItem
                className='current-dish__size'
                onClick={() => setActiveTab(TABS.medium)}
                selected={activeTab === TABS.medium}>
                {activeTab === TABS.medium ? <Selected /> : ""} M {TABS.medium}{" "}
                ₽
              </TabsItem>
              <TabsItem
                className='current-dish__size'
                onClick={() => setActiveTab(TABS.large)}
                selected={activeTab === TABS.large}>
                {activeTab === TABS.large ? <Selected /> : ""}L {TABS.large} ₽
              </TabsItem>
            </Tabs>
          </Group>
          <Group>
            <div className='current-dish__adds'>
              <div className='current-dish__add'>
                <div className='add-title'>С сиропом вкуснее! 🍬</div>
                <div className='add-variants'>
                  <FormItem>
                    <Checkbox>Кокосовый сироп +20 ₽</Checkbox>
                  </FormItem>
                  <FormItem>
                    <Checkbox>Кленовый сироп +20 ₽</Checkbox>
                  </FormItem>
                  <div className='add-title'>
                    На альтернативном молоке полезнее 🌿
                  </div>
                  <FormItem>
                    <Checkbox>Миндальное +40 ₽</Checkbox>
                  </FormItem>
                  <FormItem>
                    <Checkbox>Миндальное +40 ₽</Checkbox>
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
