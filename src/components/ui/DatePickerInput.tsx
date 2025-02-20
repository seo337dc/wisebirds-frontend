import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type TProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const DatePickerInput = ({ value, onChange }: TProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  const handleChange = (date: Date | null) => {
    if (Array.isArray(date)) return; // 배열일 경우 무시
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      dateFormat="yyyy.MM.dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
      maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={(date) => handleChange(date)}
    />
  );
};

export default DatePickerInput;
