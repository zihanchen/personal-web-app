import { Flex, Divider, Heading, View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import NavBarHeader from "./ui-components/NavBarHeader";
import ConnectFour from "./ConnectFour";

function IntroTabs() {


  return (
    <main>
      <Flex 
        justifyContent="center"
        backgroundColor="rgb(121, 167, 176)">
        <Heading level={1} > Zihan Chen </Heading>
      </Flex>
      <NavBarHeader />
      <Flex
        gap="0px"
        direction="row"

        justifyContent="left"
        alignItems="center"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="hsl(184, 23.00%, 76.10%)"
      >
        <View id="Experience" className="tabcontent" style={{display: "block"}}>
          <h1>Amazon</h1>
          <h4>2022, Sep - 2024, June</h4>
          <h3>Software Engineer</h3>
          <p>- Responsible for maintaining data propagation and transformation service, performing oncall duties</p>
          <p>- Worked on history offload and unified propagation, which releases around 50% of the memory space in database</p>
          <p>- Developed self-service for Data Extraction requests, reduce manual requests by 80%</p>
          <Divider size="large" orientation="horizontal"/>
          <h1>Coinbase</h1>
          <h4>2022, Feb - 2022, June</h4>
          <h3>Software Engineer</h3>
          <p>- Responsible for maintaining data propagation and transformation service, performing oncall duties</p>
          <p>- Worked on history offload and unified propagation, which releases around 50% of the memory space in database</p>
          <p>- Developed self-service for Data Extraction requests, reduce manual requests by 80%</p>
          <Divider size="large" orientation="horizontal"/>
          <h1>Coherent Logix</h1>
          <h4>2018, May - 2018, Sep</h4>
          <h3>Software Engineer</h3>
          <p>- Embed trained neural networks on low power consumption chips</p>
          <p>- Add quantization to the net parser to improve performance by around 15%</p>
          <p>- Widen the types of networks that can be processed</p>
          <Divider size="large" orientation="horizontal"/>
          <h1>Avidbots</h1>
          <h4>2017, Sep - 2017, Dec</h4>
          <h3>Software Engineer</h3>
          <p>- Implement path planning algorithms for robots on ROS, adding A-star algorithm to the planning module</p>
          <p>- Build new KPI for robots to measure performances, adding more data from sensor to improve evaluations for robots</p>
          <p>- Built data pipeline for aggregating data from deployed robot</p>

        </View>

        <View id="Education" className="tabcontent" style={{display: "none"}}>
          <h1>University of Waterloo</h1>
          <h4>2019, June - 2021, Dec</h4>
          <p>Master of Mathematics - Computer Science</p>
          <h3>Courses</h3>
          <p>CS 854 - Advance Topics in Computer Science: IoT & Intelligent Connectivity</p>
          <p>CS 798 - Advanced Research Topics: Network Softwarization</p>
          <p>CS 680 - Introduction to Machine Learning</p>
          <p>CS 885 - Advanced Topics in Computer Science: Reinforcement Learning</p>
          <Divider size="large" orientation="horizontal"/>
          <h1>University of Waterloo</h1>
          <h4>2014, Sep - 2019, May</h4>
          <p>Bachelor or Mathematics - Honours Computer Science & Honours Statistics with Computational Math Minor</p>
          <h3>Highlighted Courses</h3>
          <p>CS 246 - Object-Oriented Software Developed</p>
          <p>CS 240 - Data Structure and Data Managemenet</p>
          <p>CS 241 - Foundation of Sequential Programs</p>
          <p>CS 350 - Operating Systems</p>
          <p>STAT 341 - Computational Statistics & </p>
          <p>CS 365 - Models of Computation</p>
          <p>CS 343 - Concurrent and Parallel Programming</p>
          <p>CS 454 - Distributed System</p>
          <p>CS 450 - Computer Architecture</p>
          <p>CS 456 - Computer Networks</p>
          <p>CS 486 - Introduction to Artificial Intelligence</p>
          <p>CO 487 - Applied Cryptography</p>
        </View>
        <View id="Research" className="tabcontent" style={{display: "none"}}>
          <h1>Polite Wifi Sensing</h1>
          <h4>2020, May - 2021, Sep</h4>
          <p>Discover that private wifi network where IoT devices inside will respond to potentially malicious attacker </p>
          <p>and detecting breath rate of people near target device by processing CSI info from responding packets.</p>
          <p>Paper Reference: <a href="https://dspacemainprd01.lib.uwaterloo.ca/server/api/core/bitstreams/6c2877e0-7c01-4810-bba7-74a3e7e27ffc/content">Link</a></p>
          <Divider size="large" orientation="horizontal"/>
          <h1>VIVA: Road Condition Sensing Using Wireless Signals</h1>
          <h4>2019, June - 2020, Apr</h4>
          <p>Discovers that millimeter wave(mmWave) is able to enable robust and practical road sensing for road conditions.</p>
          <p>Combining the mmWave radar with a machine learning algorithm, we trained a model that can detect the roughness of </p>
          <p>the road, which can be used to detect the road condition.</p>
          <p>Paper Reference: <a href="https://mobisys20.hotcrp.com/doc/mobisys20-paper213.pdf?cap=0213a1iBFyBH1Pys">Link</a></p>
        </View>
        <View id="Projects" className="tabcontent" style={{display: "none"}}>
          <ConnectFour />

        </View>
      </Flex>
    </main>
  )
}

export default IntroTabs;
