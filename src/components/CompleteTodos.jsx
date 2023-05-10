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
        
        @media (min-width: 480px) {
          .container {
            flex-direction: row;
          }
        }
        
        @media (min-width: 768px) {
          .complete-area {
            width: 600px;
          }
        }
        
        @media (min-width: 1024px) {
          .complete-area {
            width: 1000px; 
            }
        }
      `}</style>
    </>
  );
};
