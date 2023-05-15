import React, { useEffect, useRef, useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostWriteDiv,
  PostTitleDiv,
  ContentsInput,
  TitleInput,
} from "../styledComponent";

const SubmitComponent = React.memo(() => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WriteTitle = React.memo(() => (
  <PostTitleDiv>
    <PostTitle>글쓰기</PostTitle>
  </PostTitleDiv>
));

const WritePost = () => {
  // input states
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

  const titleInput = useRef(null);
  const contentsInput = useRef(null);

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      contentsInput.current.focus();
    }
  };

  useEffect(() => {
    titleInput.current.focus();
  }, []);

  return (
    <PostSection>
      <WriteTitle />

      <PostWriteDiv>
        <TitleInput
          name="title"
          type="text"
          placeholder="제목을 입력해주세요. (15자 이내)"
          onChange={onChange}
          value={title}
          ref={titleInput}
          onKeyUp={onKeyUp}
        />

        <ContentsInput
          name="contents"
          cols="30"
          rows="10"
          onChange={onChange}
          value={contents}
          ref={contentsInput}
        />
      </PostWriteDiv>

      <SubmitComponent />
    </PostSection>
  );
};

export default WritePost;
