import { SideBar } from "./SideBar";

export const Homepage = () => {
  return (
    <>
      <SideBar />
      <div className="col-10 mt-5 text-center">
        <p className="display-4">Click on any Narrative on the sidebar</p>
      </div>
    </>
  );
};
