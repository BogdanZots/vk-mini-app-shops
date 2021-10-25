import React from "react";
import { Icon24Search } from "@vkontakte/icons";
import { Icon24ShoppingCartOutline } from "@vkontakte/icons";
import { Icon24MenuOutline } from "@vkontakte/icons";
import { Group, Cell, Div, List, Footer, Tabbar } from "@vkontakte/vkui";
import "./CustomFooter.css";
import { PANELS, VIEWS } from "../../consts/conts";
const CustomFooter = ({ activePanel , go }) => {
  return (
    <Tabbar className='nav__tabbar'>
      <Group className='footer__group'>
        <List className='nav__list'>
          <Cell className='nav__item' expandable>
            {PANELS.SEARCH_PANELS.some(panel => panel === activePanel) ? (
              <>
                <Div>
                  <Icon24Search fill="orange" data-to="home" onClick={(e)=>go(e)} />
                </Div>
                <span class="active">Поиск</span>
              </>
            ) : (
              ""
            )}
          </Cell>

          <Cell className='nav__item' expandable>
            <Div>
              <Icon24ShoppingCartOutline fill='#99A2AD' />
            </Div>
            Корзина
          </Cell>
          <Cell className='nav__item' expandable>
            <Div>
              <Icon24MenuOutline fill='#99A2AD' />
            </Div>
            Мои заказы
          </Cell>
        </List>
      </Group>
    </Tabbar>
  );
};

export default CustomFooter;
