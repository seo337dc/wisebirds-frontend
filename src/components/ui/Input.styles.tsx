import { styled } from "styled-components";
import { Colors } from "@/util/constant";

export const StyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  font-size: 16px;
  color: #8d94a0;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid ${Colors.PalletPrimary};
  outline: none;

  &::placeholder {
    color: #8d94a0;
  }
`;

export const SearchInputWrapper = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 480px;
  min-height: 50px;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: ${({ $isOpen }) => ($isOpen ? "24px" : "50px")};
  background-color: #f2f4f6;
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 50px;

  border: none;
  outline: none;
  font-size: 16px;

  background-color: #f2f4f6;

  &:focus {
    background-color: #f2f4f6;
  }
  &::placeholder {
    font-size: 16px;
    color: #8d94a0;
    opacity: 1;
  }
`;

export const SearchInputField = styled.input`
  flex: 1;
  height: 45px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #f2f4f6;
  border-radius: 50px;
  padding-left: 2px;

  &:focus {
    background-color: #f2f4f6;
  }
  &::placeholder {
    font-size: 16px;
    color: #8d94a0;
    opacity: 1;
  }
`;

export const SearchHistoryWrapper = styled.div`
  width: 100%;
  margin-top: 4px;
  padding: 8px 0;
`;

export const SearchHistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

export const HistoryText = styled.span`
  width: calc(100% - 24px);
  font-size: 1rem;
`;
