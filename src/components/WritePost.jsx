import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIURL } from "../App";
import { PostSection, PostSubmit, PostSubmitDiv, PostTitle, PostWriteDiv, PostTitleDiv } from "../styledComponents";

import InputPost from "./InputPost";

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv onClick={onSubmit}>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WriteTitle = React.memo(() => (
  <PostTitleDiv>
    <PostTitle>글쓰기</PostTitle>
  </PostTitleDiv>
));

const WritePost = () => {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  const { title, contents } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(`${APIURL}/api/posts/`, {
        title,
        contents,
      })
      .then((res) => {
        console.log(res);
        alert("글이 등록되었습니다!");
        navigate("../");
      });
  };

  return (
    <PostSection>
      <WriteTitle />

      <PostWriteDiv>
        <InputPost onChange={onChange} title={title} contents={contents} />
      </PostWriteDiv>

      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );
};

export default WritePost;
