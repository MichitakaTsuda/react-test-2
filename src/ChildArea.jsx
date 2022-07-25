import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memo()で囲うことで、Propsが変更されない限り、親のコンポーネントが再レンダリングされても再レンダリング（影響）されない
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // });

  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
