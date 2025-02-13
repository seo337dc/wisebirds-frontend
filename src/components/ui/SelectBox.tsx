"use client";

import { useState } from "react";
import styled from "styled-components";

import Icon from "./Icon";
import { Colors } from "@/util/constant";

import type { TOption } from "@/model/common";

type TSelectBoxProps = {
  options: TOption[];
  select?: TOption;
  onChange: (opt: TOption) => void;
};
const SelectBox = ({ options, onChange, select }: TSelectBoxProps) => {
  // 선택값 있으면 선택값, 없으면 첫번째

  const [selected, setSelected] = useState<TOption>(select || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: TOption) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <Wrap>
      <SelectedBox onClick={() => setIsOpen(!isOpen)}>
        {selected.label}
        <Icon
          fileName="/Icon_down.png"
          alt="Icon_down"
          width="10.5px"
          height="6px"
        />
      </SelectedBox>

      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <Item key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </Item>
          ))}
        </DropdownList>
      )}
    </Wrap>
  );
};

export default SelectBox;

const Wrap = styled.div`
  position: relative;
  width: 120px;
`;

const SelectedBox = styled.div`
  width: 100%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  color: #1a1e27;
  border-bottom: 2px solid #dcdcdc;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  margin-top: 5px;
  padding: 8px;

  background: ${Colors.White};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  z-index: 3;
`;

const Item = styled.li`
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.TextSubTitle};
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
`;
