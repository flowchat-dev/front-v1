import React from "react";
import Channel from "./Channel";
import { IChannel } from "./types/interface";
import styled from "@emotion/styled";
import { HorizontalWrapper, Icon } from "./atomics";

const HeaderWrapper = styled(HorizontalWrapper)`
  margin: 0px 0px 18px 0px;
`;
const Head = styled.h1`
  font-size: 18px;
  font-weight: 800;
  margin: 0px;
`;

const AddIcon = styled(Icon)`
  font-size: 18px;
  line-height: 2rem;
  text-align: right;
  flex: 1;
`;
interface IProps {
  channels: IChannel[];
  onChannelClick?: (channel: IChannel) => void;
}
const Sidebar: React.FC<IProps> = ({ channels, onChannelClick, ...props }) => (
  <div {...props}>
    <HeaderWrapper>
      <Head>최근 채팅</Head>
      <AddIcon>add</AddIcon>
    </HeaderWrapper>
    {channels
      .sort((a, b) => +b.lastMessage.time - +a.lastMessage.time)
      .map((e) => (
        <Channel
          key={e.id}
          {...e}
          onClick={() => onChannelClick && onChannelClick(e)}
        />
      ))}
  </div>
);
export default Sidebar;