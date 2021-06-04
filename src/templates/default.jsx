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
  const dada = data.markdownRemark.frontmatter;

  return (
    <div>
      <h1>{dada.title}</h1>
      {children}
    </div>
  );
};

export default Default;
