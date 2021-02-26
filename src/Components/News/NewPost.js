import React from "react";
import moment from "moment";
import "moment/locale/pl";
import styled from "styled-components";

const StyledPost = styled.div`
display: flex;
flex-direction: column;
  div:first-of-type {
    display:flex;
    justify-content: space-between;
    padding: 0 2rem;
    font-size: 1rem;
    background: #f6f9fe;

  }
  &div p{
    font-size: 0.6rem;
  }
  & p:first-of-type {
    text-align: left;
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
