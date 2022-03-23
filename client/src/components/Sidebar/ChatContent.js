import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  previewUnreadText: {
    fontSize: 12,
    color: "black",
    letterSpacing: -0.17,
    fontWeight: "bold",
  },
  badge: {
    fontSize: 14,
    letterSpacing: -0.17,
    fontWeight: "bold",
    marginRight: 40,
    top: "50%"
  },
}));

const ChatContent = ({ conversation, user }) => {
  const classes = useStyles();

  const { otherUser, messages, unreadMessages } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  const getLastSenderId = (messages) => {
    if (messages.length) {
      return messages[messages.length - 1].senderId;
    }
  }

  let lastSender = getLastSenderId(messages);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={
            unreadMessages > 0 && lastSender !== user.id
            ? classes.previewUnreadText
            : classes.previewText
          }
        >
          {latestMessageText}
        </Typography>
      </Box>
      {unreadMessages > 0 && lastSender !== user.id &&
        <Badge
        badgeContent={unreadMessages}
        color='primary'
        classes={{badge: classes.badge}}
        >
        </Badge>
      }
    </Box>
  );
};

export default ChatContent;
