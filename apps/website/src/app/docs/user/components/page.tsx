import React from "react";
import Content from "./pageContent.mdx";
import EmojiTable from "#/docs/emojiTable.mdx";

interface UserComponentDocumentationPageProps {}

const UserComponentDocumentationPage = (
  props: UserComponentDocumentationPageProps,
) => {
  console.log("Content: ", Content);
  return (
    <>
      <Content />
      <EmojiTable />
    </>
  );
};

UserComponentDocumentationPage.displayName = "UserComponentDocumentationPage";

export default UserComponentDocumentationPage;
