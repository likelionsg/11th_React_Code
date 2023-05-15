import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "../styledComponents";
import loadingIcon from "../loading.svg";

import axios from "axios";
import { APIURL } from "../App";

// const post = {
//   id: "1",
//   title: "제곧내",
//   contents: "오늘 휴강인가요?",
//   repls: [
//     {
//       id: "repl1",
//       contents: "ㅇㅇ",
//       post: "1",
//     },
//     {
//       id: "repl2",
//       contents: "yes",
//       post: "1",
//     },
//   ],
// };

const PostAndRepl = React.memo(({ post, postLoading, replLoading, repls, replCount }) => {
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
});

const ShowPost = () => {
  // params
  const params = useParams();

  // 포스트
  const [post, setPost] = useState(null);
  // 댓글
  const [repls, setRepls] = useState([]);

  // loading states
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  // 댓글 인풋
  const [repl, setRepl] = useState("");
  const replInput = useRef(null);

  const onChange = (e) => {
    const { value } = e.target;
    setRepl(value);
  };

  const getPostData = async () => {
    const res = await axios.get(`${APIURL}/api/posts/${params.postID}/`);
    console.log(res);
    setPost(res.data);
    setPostLoading(false);
    setRepls(res.data.repls);
    setReplLoading(false);
  };

  const onSubmitRepl = async () => {
    try {
      const body = {
        contents: repl,
        post: params.postID,
      };
      const res = await axios.post(`${APIURL}/api/repl/`, body);
      console.log(res);
      window.location.reload();
    } catch (err) {
      console.log("onSubmitRepl Error: ", err);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const replCount = useMemo(() => repls.length, [repls]);

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
        repls={repls}
      />

      <WritereplDiv>
        <ReplInput onChange={onChange} value={repl} ref={replInput} />
        <ReplSubmitDiv onClick={onSubmitRepl}>
          <span>입력</span>
        </ReplSubmitDiv>
      </WritereplDiv>
    </PostSection>
  );
};

export default ShowPost;
