import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const TagsBlock = styled.div`
    a {
        padding: .2em;
    }

    a::after{
        content: ",";
    }
`;

export default ({ tags }) => {
    return (
        <TagsBlock>
            <strong>Tags:</strong>
            {tags.map(tag => {
                return (<Link to={`/tags/${tag}`}>
                    {tag}
                </Link>
                );
            })}
        </TagsBlock>)
};
