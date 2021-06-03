import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        template
      }
    }
  }
`;
const Default = ({ data, children }) => {
  data = data.markdownRemark.frontmatter;

  return (
    <div>
      <h1>{data.title}</h1>
      {children}
    </div>
  );
};

export default Default;
