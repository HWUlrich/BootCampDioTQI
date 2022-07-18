import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 18px;
  width: 100%;
  margin-top: 18px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 5px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 2px solid #ccc;
  padding: 18px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 10px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 18px;
  border: 2px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
