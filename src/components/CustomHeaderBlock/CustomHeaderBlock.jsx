import React from "react";
import "./CustomHeaderBlock.css";
import { Spacing, Title, Div, Search } from "@vkontakte/vkui";
import { Icon24Search } from "@vkontakte/icons";
import { compose } from "redux";
import { useDispatch } from "react-redux";
import { setUserGeoDataAC } from "../../store/actions/actions";
export default function CustomHeaderBlock() {
  const dispatch = useDispatch();
  return (
    <div class='header__block'>
      <Spacing size={16} />
      <Title className='header__block-title'>Заказывай еду ко времени</Title>
      <Spacing size={16} />
      <Div className='header__block-options'>
        <Search
          className='header__block-search'
          icon={<Icon24Search />}
          onIconClick={(e) => {
            const parentEl = e.target.parentElement
              .closest(".vkuiSearch__icons")
              .closest(".Search__after").parentElement;
            const inputValue = parentEl
              .querySelector(".Search__input")
              .value.split(" ");
            console.log(inputValue);
            const getGeo = async () => {
              const res = await fetch(
                `https://nominatim.openstreetmap.org/?addressdetails=1&q=${
                  inputValue[0] ? inputValue[0] : ""
                }+${inputValue[1] ? inputValue[1] : ""}+${
                  inputValue[2] ? inputValue[2] : ""
                }&format=json&limit=1`
              );
              const data = await res.json();
              const adress = {
                city: data[0].address?.city,
                amenity: data[0].address?.amenity,
                road: data[0].address?.road,
                houseNumber: data[0].address?.house_number,
              };
              const dataEdited = Object.values(adress).filter((prop) => {
                if (prop !== undefined || null) {
                  if (prop.length) {
                    return prop;
                  }
                }
              });
              dispatch(setUserGeoDataAC({ data: dataEdited, type: "search" }));
            };
            getGeo();
          }}
        />
        <Div className='geo'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 43 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M21.0096 0C9.4186 0 0 9.4186 0 21.0096C0 24.92 1.07921 28.7463 3.13953 32.0541L19.8183 58.9363C20.1407 59.4549 20.7013 59.7632 21.304 59.7632H21.318C21.9347 59.7632 22.4953 59.4409 22.8037 58.9083L39.062 31.7738C40.9961 28.5361 42.0193 24.8079 42.0193 21.0096C42.0193 9.4186 32.6007 0 21.0096 0ZM36.0486 29.9797L21.2759 54.6475L6.11088 30.218C4.40095 27.4569 3.47591 24.2753 3.47591 21.0096C3.47591 11.3528 11.3528 3.47591 21.0096 3.47591C30.6665 3.47591 38.5294 11.3528 38.5294 21.0096C38.5294 24.1772 37.6604 27.2747 36.0486 29.9797Z'
              fill='black'
            />
            <path
              d='M21.0101 10.5119C15.2216 10.5119 10.4983 15.2212 10.4983 21.0097C10.4983 26.7701 15.1375 31.5215 21.0101 31.5215C26.9528 31.5215 31.5219 26.7141 31.5219 21.0097C31.5219 15.2212 26.7986 10.5119 21.0101 10.5119ZM21.0101 28.0316C17.1277 28.0316 13.9882 24.878 13.9882 21.0097C13.9882 17.1413 17.1558 13.9878 21.0101 13.9878C24.8644 13.9878 28.018 17.1553 28.018 21.0097C28.032 24.822 24.9485 28.0316 21.0101 28.0316Z'
              fill='black'
            />
          </svg>
        </Div>
      </Div>
      <Spacing size={16} />
    </div>
  );
}
