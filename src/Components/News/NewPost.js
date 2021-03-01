import React from "react";
import moment from "moment";
import "moment/locale/pl";
import styled from "styled-components";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px rgba(100, 100, 100, 0.3);
  border-radius: 10px;
  padding: 0.3rem 0.6rem;
  margin: 0.1rem 0;
  background: #f6f9fe;
  div:first-of-type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
    & p {
      font-family: "Roboto", sans-serif;
      letter-spacing: 0.8px;
      margin: 0;
      color: black;
    }
    & p:last-of-type {
      font-size: 0.8rem;
    }
  }
  & div:last-of-type{
    color: #444444;
    font-size: 0.9rem;
    padding-left: 0.3rem;
    font-family: "Roboto",sans-serif;
    & p{
      margin: 0.4rem 0;
    }
  }

  @media (min-width: 720px) {
    div:first-of-type {
      display: flex;
      justify-content: space-between;
      padding: 0;
      font-size: 1.2rem;
    }
    &div p {
      font-size: 0.6rem;
      margin: 0;
      padding-left: 1rem;
    }
    & p:first-of-type {
      text-align: left;
    }
  }
`;

const NewPost = (props) => {
  moment.locale("pl");
  return (
    <StyledPost>
      <div>
        <p>{props.title}</p>
        <p>{moment(props.time).format("LLL")}</p>
      </div>
      <div>
        <p>{props.body}</p>
      </div>
    </StyledPost>
  );
};

export default NewPost;
