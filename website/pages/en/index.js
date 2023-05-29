/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_adventure.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>I will talk about myself</h2>
        <MarkdownBlock></MarkdownBlock>
      </div>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const AboutMe = () => (
      <Block background="light">
        {[
          {
            content: "My name is Rafael. I'm 29 years old. I live in Diadema.",
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'right',
            title: 'About me',
          },
        ]}
      </Block>
    );

    const AboutMyFamily = () => (
      <Block>
        {[
          {
            content: "My parents live in the countryside, while my sister and niece also live in Diadema and are my neighbors.",
            image: `${baseUrl}img/family.svg`,
            imageAlign: 'left',
            title: 'About my family',
          },
        ]}
      </Block>
    );

    const AboutMyProfession = () => (
      <Block background="light">
        {[
          {
            content: "I'm a software developer and I work in Jabaquara. I love my job!",
            image: `${baseUrl}img/programmer.gif`,
            imageAlign: 'right',
            title: 'About my profession',
          },
        ]}
      </Block>
    );

    const AboutMyPersonalCharacteristics = () => (
      <Block id="try">
        {[
          {
            content: "I'm a bit shy, but I consider myself an extroverted person.",
            image: `${baseUrl}img/undraw_mello.svg`,
            imageAlign: 'left',
            title: 'About my personal characteristics',
          },
        ]}
      </Block>
    );

    const AboutMyRoutine = () => (
      <Block background="light">
        {[
          {
            content: 
              "I wake up at 6 a.m. every day, I work from home, but twice a week I go to the office. " + 
              " I drive to work, I start at 8 a.m., we have lunch at noon, I work until 6 p.m. " +
              "Twice a week, I have English classes at Wise Up.",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'right',
            title: 'About my routine',
          },
        ]}
      </Block>
    );

    const ThingsLikeDislike = () => (
      <Block>
        {[
          {
            content: 
              "I like to drink beer with my friends, Sometimes, I like to go to the beach." +
              "I like to drive, but I hate heavy traffic, it’s very stressful!",
            image: `${baseUrl}img/undraw_preferences.svg`,
            imageAlign: 'left',
            title: 'Things that I like and don’t like to do.',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          <FeatureCallout />
          <AboutMe />
          <AboutMyFamily />
          <AboutMyProfession />
          <AboutMyPersonalCharacteristics />
          <AboutMyRoutine />
          <ThingsLikeDislike />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
