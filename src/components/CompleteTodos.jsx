import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了済のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .complete-area {
          background-color: #a68c6e;
          width: 400px;
          min-height: 200px;
          padding: 8px;
          margin: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
