import React from "react";

interface MyNotesPageProps {}


/* RESUME: This should be up next after the landing page. Having this infront of potential partners should be a priority. */
const MyNotesPage = (props: MyNotesPageProps) => {
  return (
    <div className={"flex flex-col justify-center items-center gap-6"}>
      <h1 className={"text-5xl"}>My Notes Here</h1>
    </div>
  );
};

MyNotesPage.displayName = "MyNotesPage";

export default MyNotesPage;
