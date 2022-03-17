import React from "react";
import { Box, Typography } from "@material-ui/core";
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
  unreadCount: {
    height: 22,
    width: 22,
    fontSize: 14,
    color: "white",
    letterSpacing: -0.17,
    fontWeight: "bold",
    backgroundColor: " #3A8DFF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 14
  },
  notification: {
    display: "flex",
    alignItems: "center",
    marginRight: 20
  }
}));

const ChatContent = ({ conversation, user }) => {
  const classes = useStyles();

  const { otherUser, messages, unreadMessages } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={
            unreadMessages > 0 && messages[messages.length - 1].senderId !== user.id
            ? classes.previewUnreadText
            : classes.previewText
          }
        >
          {latestMessageText}
        </Typography>
      </Box>
      {unreadMessages > 0 && messages[messages.length - 1].senderId !== user.id &&
        <Box className={classes.notification}>
          <Typography className={classes.unreadCount}>
            {unreadMessages}
          </Typography>
        </Box>
      }
    </Box>
  );
};

export default ChatContent;
