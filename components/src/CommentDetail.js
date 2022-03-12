import React from "react";
const CommentDetail = ({author, timeAgo, imgAvatar}) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={imgAvatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                   {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
};

export default CommentDetail;
