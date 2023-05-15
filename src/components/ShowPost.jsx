import React, { useEffect, useState } from "react";
import {
  LoadingDiv,
  LoadingImg,
  PostReadDiv,
  PostReplDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  Repl,
  ReplInput,
  ReplSubmitDiv,
  ReplTitleDiv,
  Replwriter,
  WritereplDiv,
} from "../styledComponent";
import loadingIcon from "../loading.svg";
import { useParams } from "react-router-dom";

const post = {
  id: "1",
  title: "제곧내",
  contents: "오늘 휴강인가요?",
  repls: [
    {
      id: "repl1",
      contents: "ㅇㅇ",
      post: "1",
    },
    {
      id: "repl2",
      contents: "yes",
      post: "1",
    },
  ],
};

const PostAndRepl = React.memo(
  ({ post, postLoading, replLoading, repls, replCount }) => {
    return (
      <>
        <PostTitleDiv>
          <PostTitle>{post && post.title}</PostTitle>
        </PostTitleDiv>

        {postLoading ? (
          <LoadingDiv>
            <LoadingImg src={loadingIcon} />
          </LoadingDiv>
        ) : (
          <PostReadDiv>{post && post.contents}</PostReadDiv>
        )}

        <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
        {replLoading ? (
          <LoadingDiv>
            <LoadingImg src={loadingIcon} />
          </LoadingDiv>
        ) : (
          repls &&
          repls.map((repl) => (
            <PostReplDiv key={repl.id}>
              <Replwriter>익명</Replwriter>
              <Repl>{repl.contents}</Repl>
            </PostReplDiv>
          ))
        )}
      </>
    );
  }
);

const ShowPost = () => {
  const params = useParams();

  // loading states
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  const replCount = post.repls.length;

  // 댓글 입력 문자열 state
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    console.log(e.target);
    console.log(value);
    setInput(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setPostLoading(false);
      setReplLoading(false);
    }, 2000);
  }, []);

  if (!params.postID) {
    return <PostSection>잘못된 접근입니다.</PostSection>;
  }

  return (
    <PostSection>
      <PostAndRepl
        post={post}
        postLoading={postLoading}
        replCount={replCount}
        replLoading={replLoading}
        repls={post.repls}
      />

      <WritereplDiv>
        <ReplInput onChange={onChange} value={input} />
        <ReplSubmitDiv>
          <span>입력</span>
        </ReplSubmitDiv>
      </WritereplDiv>
    </PostSection>
  );
};

export default ShowPost;
