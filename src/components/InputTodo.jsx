import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div className="input-area">
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
      <style jsx>{`
        .input-area {
          background-color: #f2d49c;
          width: 400px;
          height: 30px;
          border-radius: 8px;
          padding: 8px;
          margin: 8px;
        }
        @media (min-width: 480px) {
          .input-area {
            width: 500px;
          }
        }

        @media (min-width: 768px) {
          .input-area {
            width: 600px;
          }
        }

        @media (min-width: 1024px) {
          .input-area {
            width: 1000px;
          }
        }
      `}</style>
    </>
  );
};
