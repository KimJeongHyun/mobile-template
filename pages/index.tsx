import React, { useState } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

export default function Home(props: { data: any }) {
  const [text, setText] = useState<string>("자바스크립트");

  const router = useRouter();

  console.log(props.data);

  return (
    <div className="container">
      <Check>
        <span>{text} 적용 완료</span>
        <button onClick={() => router.push("/test")}>클릭</button>
        {props.data.name}
      </Check>
    </div>
  );
}

const Check = styled.div`
  font-size: 20em;
  background: beige;
`;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
