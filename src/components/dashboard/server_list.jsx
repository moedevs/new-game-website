import * as React from "react";
import * as B from "bloomer";
import "./server_list.scss";

export const ServerList = ({ servers }) =>
  <div className="server-list">
    <div className="server-list-header">
      <B.Image className="is-marginless" isSize="48x48" src="https://i.love.miki.ai/hifumi_avatar.png"/>
    </div>
    <hr className="server-list-separator"/>
    <div className="server-icons">
      <div className="server-icon is-rounded">
        <B.Image
          className="is-rounded"
          src="https://cdn.discordapp.com/icons/231790205676290049/ee8eedae97d5eca59d03af4a93993b85.png"
        />
      </div>
    </div>
  </div>;
