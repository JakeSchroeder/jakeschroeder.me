import React, { Fragment } from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import VSCO_src from "../static/VSCO-project.pdf";
// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import {
  Typography,
  Gray,
  Blue,
  Black,
  Sizes,
  Section,
  Container,
  DarkBlack
} from "../components/utilities";
import { LinkButton } from "../components/elements";

import { ExternalLinkIcon } from "../components/elements/Icons";

const WorkSection = styled.section`
  border-bottom: 1px solid ${Gray};

  @media (max-width: 1100px) {
    height: auto;
  }

  @media (max-height: 880px) {
    height: auto;
  }
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: ${Sizes.xlarge};
  display: flex;
  align-items: center;
  order: ${({ reversed }) => (reversed ? `1` : `0`)};

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 0;
    order: 0;

    &:nth-of-type(even) {
      padding-top: 16px;
    }

    &:nth-of-type(odd) {
      padding-bottom: 16px;
    }
  }
`;

const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkType = styled.h4`
  color: ${Blue};
  margin-bottom: 16px;
  font-weight: 500;
`;

const WorkTitle = styled.h2`
  margin-bottom: 16px;

  font-weight: 600;
`;

const WorkDescription = styled.p`
  margin-bottom: 32px;
  font-size: ${Typography.body};
`;

const VisitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 16px;
  }
`;

const TagIndicator = styled.div`
  border-radius: 50%;
  height: 16px;
  width: 16px;
  background: ${Black};
  box-shadow: 0px 0px 10px 1px rgba(35, 35, 35, 0.66);
  margin-right: 8px;
`;

const TagItems = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

const StyledBackgroundSection = styled(BackgroundImage)`
  min-height: 320px;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: contain; */
  border-radius: 6px;
  border: 1px solid ${DarkBlack};
  transition: all 0.3s ease;
  /* box-shadow: -5px 5px 16px 0px rgba(100,100,100,0.55); */

  @media (max-width: 1100px) {
    height: 100%;
  }
`;

const LinkWrap = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 1;

  &:hover {
    & > div:first-child {
      transition: all 0.3s ease;
      filter: blur(5px);
    }

    & div {
      opacity: 1;
    }
  }
`;

const LinkSVGWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease;

  /* & svg {
    transform: scale(3);
    
  } */
`;

const Tags = ({ children }) => (
  <TagWrapper>
    <TagIndicator />
    <TagItems>{children}</TagItems>
  </TagWrapper>
);

const WorkItem = ({
  img,
  isReversed,
  title,
  border,
  description,
  link,
  tags,
  project,
  buttonText
}) => (
  <WorkSection>
    <StyledContainer>
      <Column reversed={isReversed}>
        <LinkWrap target={"_blank"} rel={"nofollow"} href={link}>
          {img}
          <LinkSVGWrapper>
            <ExternalLinkIcon />
          </LinkSVGWrapper>
        </LinkWrap>
      </Column>
      <Column>
        <WorkContent>
          <WorkType>{project}</WorkType>
          <WorkTitle>{title}</WorkTitle>
          <WorkDescription>{description}</WorkDescription>
          <VisitWrapper>
            <LinkButton href={link} target={"_blank"} rel={"nofollow"}>
              {buttonText ? `${buttonText}` : `Visit Site`}
            </LinkButton>
            <Tags>{tags}</Tags>
          </VisitWrapper>
        </WorkContent>
      </Column>
    </StyledContainer>
  </WorkSection>
);

const ProjectsPage = ({ data, className }) => (
  <Fragment>
    <Seo title="Projects" />
    <WorkItem
      isReversed
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.vscoScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"VSCO Warriors"}
      description={
        "During my Junoir year at Depaul University I enrolled in a course called User Centered Evaluation, geared towards User Experience Design majors. It specialized in modern user research practices including topics such as usability testing, heuristic evaluation and applied contextual inquiry. Checkout my final project, summarizing the course and its goals."
      }
      buttonText="See Project"
      link={VSCO_src}
      tags={"Usability, Testing"}
    />
    <WorkItem
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.terrainScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Terrain Generator"}
      description={
        "An audio visualization using the Perlin Noise algorithm to generate a 3d terrain. It is then offset by the waveform of a song called Timestretch by the dubstep artist Bassnectar. I have always been passionate about music and making sound interactive, I saw this as an opportunity to combine both and make something truly stunning."
      }
      link={"https://terrain-generator.netlify.com"}
      tags={"p5, Netlify"}
    />
    <WorkItem
      isReversed
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.isophexScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Isophex Solutions"}
      description={
        "I created Isophex to be an affordable web development practice delivering custom web solutions. I designed this site to feel clean and professional with an emphasis on successful client case studies. I utilized the Zurb Foundation UI framework for the Frontend and deployed to Netlify for the hosting."
      }
      link={"https://isophex.com"}
      tags={"Foundation, Netlify"}
    />
    <WorkItem
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.heliosScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Helios IP"}
      border
      description={
        "Helios Intellectual Property is a services technologies company that specializes in IP management. I designed this site to feel disruptive and cutting edge, more like a software company than a legal services company. I developed the site using plain old vanilla html, css, and js. It is hosted on Netlify."
      }
      link={"https://heliosipm.com"}
      tags={"Vanilla, Netlify"}
    />
    <WorkItem
      isReversed
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.insightsScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Helios Insights"}
      description={
        "Access featured articles, download industry research or browse a support knowledge base. I designed the site to feel responsive, reactive and easy to use. The Frontend is developed using Gatsby, a React framework. Authentication is handled by GoTrue API in combination with Netlify for hosting."
      }
      link={"https://heliosinsights.netlify.com"}
      tags={"Gatsby, Netlify"}
    />
    <WorkItem
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.dmsScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      project={"Development"}
      border
      title={"Digital Marketing School"}
      description={
        "A learning platform for people interested in becoming an expert in SEO, marketing and content creation. I collaborated with other developers on the Frontend, modifying WordPress templates with custom CSS and PHP. The entire solution is hosted on WPEngine."
      }
      link={"https://digitalmarketing.school"}
      tags={"Wordpress, WP Engine"}
    />
    <WorkItem
      isReversed
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.onestopScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"One Stop Properties"}
      description={
        "The place to find industrial or commercial properties in the greater NYC area. I worked on the site’s redesign. I aimed to create a more fully featured solution complete with a new theme and custom backend for easy property updates. It is built with wordpress and hosted on WPEngine."
      }
      link={"https://onestopspaces.com"}
      tags={"Wordpress, WP Engine"}
    />
    <WorkItem
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.paintingScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Scroll Painting"}
      border
      description={
        "A digital showcase of watercolor paintings by Suvi Karjalainen. I worked closely with Suvi to design this site to be minimal yet dynamic. I developed the Frontend with bootstrap UI frameowrk. I originally built a barebones cms on the backend using PHP, the solution is now hosted on Netlify."
      }
      link={"https://scrollpainting.org"}
      tags={"Bootstrap, PHP, MediaTemple"}
    />
    <WorkItem
      isReversed
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.mediawikiScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      project={"Development"}
      title={"Docket Engine Wiki"}
      description={
        "A Wikipedia of sorts for the intellectual property rulesets that power HeliosComplete. I worked with a backend developer to deliver the Frontend solution to the app, modifing a preexisting php wiki framework called MediaWiki. The backend is using PHP, its hosted on MediaTemple."
      }
      link={"https://www.ipdocketengine.com"}
      tags={"MediaWiki, MediaTemple"}
    />
    <WorkItem
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.tractionScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Traction2Vision"}
      border
      description={
        "Helping Business Leaders Get What They Want Out of Their Businesses. I built this site as a prototype for Dan Paxton, the CEO of Traction2Vision. He wanted to keep the design professional and to the point, aimed at small business owners. I developed the site using Bootstrap and Jekyll, as static site generator. It is hosted on Netlify."
      }
      link={"https://traction2vision.netlify.com"}
      tags={"Jekyll, Netlify"}
    />
    <WorkItem
      isReversed
      img={
        <StyledBackgroundSection
          Tag="div"
          className={className}
          fluid={data.terminalScreen.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        />
      }
      title={"Terminal Emulator"}
      description={
        "A terminal ui that originally served as my portfolio site. You can resize, collapse, and drag n drop the frame as if it were a desktop interface. It utilizes and open source command line interpreter/ terminal emulator written in Javascript. Try writing bash commands to it!"
      }
      link={"https://jakeschroeder.github.io"}
      tags={"Vanilla, Github Pages"}
    />
  </Fragment>
);

WorkItem.defaultProps = {
  project: "Design / Development"
};

export default ProjectsPage;

export const squareImage = graphql`
  fragment bgImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 750) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const PageQuery = graphql`
  query {
    vscoScreen: file(relativePath: { eq: "vsco.png" }) {
      ...bgImage
    }
    terrainScreen: file(relativePath: { eq: "terrain-generator.png" }) {
      ...bgImage
    }
    heliosScreen: file(relativePath: { eq: "heliosipmscreen-test.png" }) {
      ...bgImage
    }
    insightsScreen: file(relativePath: { eq: "heliosinsights.png" }) {
      ...bgImage
    }
    dmsScreen: file(relativePath: { eq: "dms-screen.png" }) {
      ...bgImage
    }
    onestopScreen: file(relativePath: { eq: "onestop.png" }) {
      ...bgImage
    }
    mediawikiScreen: file(relativePath: { eq: "mediawiki.png" }) {
      ...bgImage
    }
    isophexScreen: file(relativePath: { eq: "isophex.png" }) {
      ...bgImage
    }
    paintingScreen: file(relativePath: { eq: "scrollpainting.png" }) {
      ...bgImage
    }
    tractionScreen: file(relativePath: { eq: "traction2vision.png" }) {
      ...bgImage
    }
    terminalScreen: file(relativePath: { eq: "terminal.png" }) {
      ...bgImage
    }
  }
`;
