import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const findLastReadId = (messages) => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].wasRead && messages[i].senderId === userId) {
        return messages[i].id;
      }
    }
  }

  let lastRead;
  if (messages.length > 0) {
    lastRead = findLastReadId(messages);
  }

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            time={time}
            message={message}
            otherUser={otherUser}
            lastRead={lastRead}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
