// import { useState } from "react";
// import Icon from "./Icon";

// import type { ChangeEvent, KeyboardEvent } from "react";

import { useState } from "react";
import * as S from "./Input.styles";
// import { useSearchHistoryStore } from "@/store/useSearchHistoryStore";

type TProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

/**
 * default input 컴포넌트
 */
const Input = ({ value, placeholder, onChange }: TProps) => {
  return (
    <S.StyledInput
      value={value}
      placeholder={placeholder || "입력하세요."}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;

export const InputPassword = ({ value, placeholder, onChange }: TProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={"w-full relative"}>
      <S.StyledInput
        type={isShow ? "text" : "password"}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <S.EyeImg
        onClick={() => setIsShow(!isShow)}
        src="/assets/images/eye_off.png"
        alt="eye_off"
      />
    </div>
  );
};

/**
 * 검색 input 컴포넌트
 */
// interface IPropsSearchInput extends TProps {
//   onEnter?: () => void;
//   onClickHistory?: (value: string) => void;
// }

// export const SearchInput = ({
//   value,
//   onChange,
//   onEnter,
//   onClickHistory,
// }: IPropsSearchInput) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const { history, addHistory, removeHistory } = useSearchHistoryStore();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };

//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && onEnter) {
//       onEnter();
//       setIsFocused(false);
//       addHistory(value);
//     }
//   };

//   const handleSelectHistory = (query: string) => {
//     onChange(query);
//     setIsFocused(false);
//     if (onClickHistory) onClickHistory(query);
//   };

//   const handleDeleteHistory = (query: string) => {
//     removeHistory(query);
//   };

//   const isOpen = isFocused && history.length > 0;

//   return (
//     <S.SearchInputWrapper $isOpen={isOpen}>
//       <div className="flex items-center gap-[11px]">
//         <Icon
//           fileName="icon_search.png"
//           alt="search icon"
//           width="30px"
//           height="30px"
//         />
//         <S.SearchInputField
//           placeholder="검색어를 입력하세요"
//           value={value}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setTimeout(() => setIsFocused(false), 150)}
//         />
//       </div>

//       {isOpen && (
//         <S.SearchHistoryWrapper>
//           {history.map((item) => (
//             <S.SearchHistoryItem key={item}>
//               <S.HistoryText onClick={() => handleSelectHistory(item)}>
//                 {item}
//               </S.HistoryText>
//               <Icon
//                 width="24px"
//                 height="24px"
//                 fileName="/icon_close.png"
//                 alt="icon_close.png"
//                 onClick={() => handleDeleteHistory(item)}
//               />
//             </S.SearchHistoryItem>
//           ))}
//         </S.SearchHistoryWrapper>
//       )}
//     </S.SearchInputWrapper>
//   );
// };
