import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    imgAvatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo={"Today at 6:00PM"}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    imgAvatar={faker.image.avatar()}
                    author="Jen"
                    timeAgo={"Today at 6:02PM"}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    imgAvatar={faker.image.avatar()}
                    author="Mark"
                    timeAgo={"Today at 6:07PM"}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
