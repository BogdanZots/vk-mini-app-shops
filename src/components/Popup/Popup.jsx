import React, { useState } from "react";
import {
  ModalRoot,
  ModalPage,
  Select,
  FormLayout,
  ModalPageHeader,
  Separator,
  Div,
  Button,
  Input,
  PanelHeaderButton,
  Spinner,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon16Clear } from "@vkontakte/icons";
import "./Popup.css";
import { PANELS } from "../../consts/conts";
import { useDispatch, useSelector } from "react-redux";

const Popup = ({ modalActive, setModalActive, getGeo, go }) => {
  const { currentShop } = useSelector((store) => store.shops);
  const styles = {
    container: "popup_container",
    buttons: "popup_buttons",
  };
  const mapStyles = {
    container: "popup-map__container",
    imgContainer: "popup-map__img-container",
    img: "popup-map__img",
    description: "popup-map__description",
    button: "popup-map__button",
  };
/*   const goToMapStyles = {
    container 
    
  } */
  const renderSwitch = (param) => {
    switch (param) {
      case PANELS.MAIN_PANEL:
        return (
          <div className={styles.container}>
            <h2>
              Чтобы увидеть заведения на карте, необходимо разрешить передачу
              геоданных
            </h2>
            <div className={styles.buttons}>
              <Div
                onClick={() => {
                  getGeo();
                  setModalActive({ state: false, panel: PANELS.MAIN_PANEL });
                }}>
                <Button>Cогласится</Button>
              </Div>
              <Div
                onClick={() =>
                  setModalActive({ state: false, panel: PANELS.MAIN_PANEL })
                }>
                <Button mode='destructive'>Отказатся</Button>
              </Div>
            </div>
          </div>
        );
      case PANELS.MAP_PANEL:
        return (
          <div className={mapStyles.container}>
            <div className={mapStyles.imgContainer}>
              <img src={currentShop.img} className={mapStyles.img} />
            </div>
            <div className={mapStyles.description}>
              <span>Name : {currentShop.name}</span>
              <span>
                from : {currentShop.workingFrom} to {currentShop.workingTo}
              </span>
              <span>Rate : {currentShop.middleRate}</span>
              <span>Adress : {currentShop.addressText}</span>
            </div>
            <div className={mapStyles.button}>
              <Div
                onClick={() => {
                  go(modalActive.shop);
                  setModalActive({ ...modalActive, state: false });
                }}>
                <Button>Перейти</Button>
              </Div>
            </div>
          </div>
        );
      case "map-btn":
        <div className={mapStyles.container}>

        </div>;
      default:
        return "";
    }
  };

  console.log("MODAL DATA", modalActive);
  return (
    <ModalRoot
      activeModal={modalActive.state ? "modalPage" : null}
      onClose={() => {
        setModalActive(false);
      }}>
      <ModalPage id='modalPage'>
        <ModalPageHeader
          right={
            <PanelHeaderButton
              onClick={() => setModalActive(false)}></PanelHeaderButton>
          }></ModalPageHeader>
        {renderSwitch(modalActive.panel || modalActive.target)}
        <Separator />
      </ModalPage>
    </ModalRoot>
  );
};

export default Popup;
