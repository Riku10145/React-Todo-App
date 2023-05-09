import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .incomplete-area {
          background-color: #d9a57d;
          width: 400px;
          min-height: 200px;
          padding: 8px;
          margin: 8px;
          border-radius: 8px;
          }
          
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 800px;
        }
        
        @media (min-width: 480px) {
          .container {
            flex-direction: row;
          }
        }
        
        @media (min-width: 768px) {
          .incomplete-area {
            width: 600px;
          }
        }
        
        
        @media (min-width: 1024px) {
          .incomplete-area {
            width: 1000px; 
            }
        }
      `}</style>
    </>
  );
};
