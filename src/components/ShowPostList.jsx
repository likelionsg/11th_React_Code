import React, { useCallback, useEffect, useState } from "react";
import {
  CursorDiv,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  PageEmptyDiv,
} from "../styledComponents";

import loadingIcon from "../loading.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faPenToSquare, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import EachPost from "./EachPost";

import { APIURL } from "../App";
import axios from "axios";

// const postList = [
//   {
//     id: "1",
//     title: "제곧내",
//     contents: "오늘 휴강인가요?",
//     repls: [
//       {
//         id: "repl1",
//         contents: "ㅇㅇ",
//         post: "1",
//       },
//       {
//         id: "repl2",
//         contents: "yes",
//         post: "1",
//       },
//     ],
//   },
//   {
//     id: "2",
//     title: "솔직히 멋사 폼 미친거 아님?",
//     contents: "서강 멋사 폼 미쳤다",
//     repls: [
//       {
//         id: "repl3",
//         contents: "ㅆㅇㅈ",
//         post: "2",
//       },
//     ],
//   },
// ];

const ShowPostList = () => {
  // 로딩
  const [loading, setLoading] = useState(true);
  // 포스트 목록
  const [postList, setPostList] = useState([]);
  // 현재 페이지 번호
  const [page, setPage] = useState(1);
  // 전체 페이지 번호들
  const [pages, setPages] = useState([]);

  const getPostList = useCallback(() => {
    const url = `${APIURL}/api/list/?page=${page}`;

    axios
      .get(url)
      .then((res) => {
        console.log("postList: ", res);
        const lastPage = Math.ceil(res.data.count / 10);
        // 첫 번째 페이지 ~ 마지막 페이지 번호
        const tempPages = [];
        for (let i = 1; i <= lastPage; i++) {
          tempPages.push(i);
        }
        setPages(tempPages);

        console.log({ lastPage, tempPages });

        setPostList(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log("getPostList error: ", err);
      });
  });

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };

  useEffect(getPostList, [page]);

  return (
    <>
      {/* 포스트 목록 */}
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={() => {}} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>

        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : (
            <ul>
              {postList.map((post) => (
                <EachPost key={post.id} title={post.title} postID={post.id} />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>

      {/* 페이지 버튼 */}
      <PagingSection>
        {/* 왼쪽 이동 아이콘 */}
        {page > 1 ? (
          <PagenumberDiv
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </PagenumberDiv>
        ) : (
          <PageEmptyDiv></PageEmptyDiv>
        )}

        {pages.map((pageNum) => (
          <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </PagenumberDiv>
        ))}

        {/* 오른쪽 이동 아이콘 */}
        {page < pages.length ? (
          <PagenumberDiv
            onClick={() => {
              if (page < pages.length) {
                setPage(page + 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </PagenumberDiv>
        ) : (
          <PageEmptyDiv></PageEmptyDiv>
        )}
      </PagingSection>
    </>
  );
};

export default ShowPostList;
