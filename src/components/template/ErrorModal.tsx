import { Modal } from "antd";
import { useErrorStore } from "@/store/useErrorStore";

const ErrorModal = () => {
  const { clear } = useErrorStore();
  return (
    <Modal open title="에러 발생" onOk={clear} onCancel={clear}>
      <p>같은 현상이 반복되면 고객센터로 문의 바랍니다.</p>
      <p className="mt-4">
        <b>※ 고객센터</b>
        <br />- email:{" "}
        <a href="mailto:helpdesk@wisebirds.ai">helpdesk@wisebirds.ai</a>
      </p>
    </Modal>
  );
};

export default ErrorModal;
