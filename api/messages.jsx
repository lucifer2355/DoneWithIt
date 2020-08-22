import apiClient from "./client";

const send = (message, listingId) => {
  apiClient.post("/messages", {
    message,
    listingId,
  });
};

export default {
  send,
};
