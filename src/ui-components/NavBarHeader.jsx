import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text, Image, Button } from '@aws-amplify/ui-react';
import LogoWithText from './LogoWithText';
import MyIcon from './MyIcon';


export default function NavBarHeader(props) {
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="0px"
    direction="column"
    justifyContent="center"
    alignItems="center"
    position="relative"
    boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
    padding="0px 0px 0px 0px"
    backgroundColor="rgb(106, 189, 205)"
    {...getOverrideProps(overrides, "NavBarHeader")}
    {...rest}
  >

    <Flex
      gap="10px"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      grow="1"
      shrink="1"
      basis="0"
      position="relative"
      {...getOverrideProps(overrides, "Frame 32129767076")}
    >
      <Button
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="40"
        color="rgb(0, 0, 0)"
        colorTheme="info"
        lineHeight="24px"
        textAlign="center"
        display="block"
        shrink="0"
        position="relative"
        // whiteSpace="pre-wrap"
        variation="menu"
        {...getOverrideProps(overrides, "Dashboard")}
        onClick={() => openTab(event, 'Experience')}
      >
        Experience
      </Button>
      <Button
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgb(0, 0, 0)"
        colorTheme="info"
        lineHeight="24px"
        textAlign="center"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        variation="menu"
        {...getOverrideProps(overrides, "Jobs")}
        onClick={() => openTab(event, 'Education')}
      >
        Education
      </Button>
      <Button
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgb(0, 0, 0)"
        colorTheme="info"
        lineHeight="24px"
        textAlign="center"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        variation="menu"
        {...getOverrideProps(overrides, "Applicants")}
        onClick={() => openTab(event, 'Research')}
      >
        Research
      </Button>
      <Button
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgb(0, 0, 0)"
        colorTheme="info"
        lineHeight="24px"
        textAlign="center"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
        variation="menu"
        {...getOverrideProps(overrides, "Company")}
        onClick={() => openTab(event, 'Projects')}
      >
        Projects
      </Button>
    </Flex>
    <Flex
      gap="32px"
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      grow="1"
      shrink="1"
      basis="0"
      position="relative"
      {...getOverrideProps(overrides, "Frame 32129767081")}
    >
    </Flex>
  </Flex>
  )
}
